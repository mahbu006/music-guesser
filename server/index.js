const express = require("express");
const app = express();
const port = 3000;

var SpotifyWebApi = require('spotify-web-api-node');
var spotifyApi = new SpotifyWebApi({
    clientId: '3330af03c9b249c78e72aed84b9720f1',
    clientSecret: '7a7fc20450c240bcb9d702858ae639ef',
    redirectUri: 'https://www.spotify.com/us/'
});

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