const keys = require("../config/keys");
module.exports = app => {
  var SpotifyWebApi = require("spotify-web-api-node");
  var spotifyApi = new SpotifyWebApi({
    clientId: keys.spotifyClientId,
    clientSecret: keys.spotifyClientSecret
  });
  spotifyApi.setAccessToken(keys.spotifyAccessToken);

  app.get("/spotify/access_token", (req, res) => {
    spotifyApi.clientCredentialsGrant().then(
      function(data) {
        console.log("The access token expires in " + data.body["expires_in"]);
        console.log("The access token is " + data.body["access_token"]);
        //fix this
        spotifyApi.setAccessToken(data.body["access_token"]);
      },
      function(err) {
        console.log(
          "Something went wrong when retrieving an access token",
          err
        );
      }
    );
  });

  app.get("/spotify/choices/:genre", async (req, res) => {
    try {
      const data = await spotifyApi.searchTracks(`genre:${req.params.genre}`, {
        limit: 4,
        offset: Math.floor(Math.random() * 996)
      });
      const body = data.body.tracks.items;
      let chosenCount = 0;
      result = [];
      body.map((track, index) => {
        const album = {
          name: track.album.name,
          url: track.album.external_urls.spotify,
          image: track.album.images[1].url
        };
        const artist = {
          name: track.artists[0].name,
          url: track.artists[0].external_urls.spotify
        };
        const song = {
          name: track.name,
          preview: track.preview_url
        };
        if (chosenCount == 1 || song.preview !== null) chosenCount++;
        result.push({
          song: song,
          artist: artist,
          album: album,
          chosen: chosenCount === 1 ? true : false
        });
      });
      res.status(200).send(result);
    } catch (err) {
      res.status(400).send({ error: err.body });
    }
  });
};
