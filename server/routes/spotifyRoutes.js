const keys = require("../config/keys");
const spotifyToken = require("../middlewares/spotifyToken");
module.exports = app => {
  var SpotifyWebApi = require("spotify-web-api-node");
  var spotifyApi = new SpotifyWebApi({
    clientId: keys.spotifyClientId,
    clientSecret: keys.spotifyClientSecret
  });
  spotifyToken(app, spotifyApi);
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
          index: index,
          song: song,
          artist: artist,
          album: album,
          chosen: chosenCount === 1 ? true : false
        });
      });
      res.status(200).send(result.sort(() => Math.random() - 0.5));
    } catch (err) {
      res.status(400).send({ error: err.body });
    }
  });
};
