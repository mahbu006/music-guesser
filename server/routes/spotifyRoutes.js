const keys = require("../config/keys");
module.exports = app => {
  var SpotifyWebApi = require("spotify-web-api-node");
  var spotifyApi = new SpotifyWebApi({
    clientId: keys.spotifyClientId,
    clientSecret: keys.spotifyClientSecret
  });
  spotifyApi.setAccessToken(keys.spotifyAccessToken);
  app.get("/spotify", (req, res) => {
    res.send({ spotify: "there" });
    track = spotifyApi.searchTracks("Love").then(
      function(data) {
        console.log('Search by "Love"', data.body);
      },
      function(err) {
        console.error(err);
      }
    );
    res.send(track);
  });
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
};
