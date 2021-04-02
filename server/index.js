const express = require("express");
const app = express();
const port = 3000;

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi();

app.get('/', (req, res) => {
    track = spotifyApi.searchTracks('Love')
    .then(function(data) {
      console.log('Search by "Love"', data.body);
    }, function(err) {
      console.error(err);
    });
    res.send(track);
})

app.listen(port, () => {
    console.log(`Listening at port ${port}`)
})