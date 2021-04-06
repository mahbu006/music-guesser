module.exports = (app, spotifyApi) => {
  app.use(async (req, res, next) => {
    var cookie = req.cookies.spotifyClientAccessToken;
    if (cookie == undefined) {
      try {
        const data = await spotifyApi.clientCredentialsGrant();
        spotifyApi.setAccessToken(data.body["access_token"]);
        res.cookie("spotifyClientAccessToken", data.body["access_token"], {
          maxAge: 3590000,
          httpOnly: true
        });
      } catch (err) {
        console.log("Something went wrong with cookie", err);
      }
    } else spotifyApi.setAccessToken(cookie);
    next();
  });
};
