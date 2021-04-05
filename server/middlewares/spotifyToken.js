module.exports = (app, spotifyApi) => {
  app.use(async (req, res, next) => {
    var cookie = req.cookies.spotifyClientAccessToken1;
    if (cookie == undefined) {
      try {
        const data = await spotifyApi.clientCredentialsGrant();
        /* console.log("The access token expires in " + data.body["expires_in"]);
        console.log("The access token is " + data.body["access_token"]); */
        spotifyApi.setAccessToken(data.body["access_token"]);
        res.cookie("spotifyClientAccessToken1", data.body["access_token"], {
          maxAge: 3590000,
          httpOnly: true
        });
        console.log("cookie created", data.body["access_token"]);
      } catch (err) {
        console.log("Something went wrong", err);
      }
    } else {
      console.log("Cookie exists", cookie);
      spotifyApi.setAccessToken(cookie);
    }
    next();
  });
};
