module.exports = app => {
  const passport = require("passport");
  const spotifyAuth = require("../services/spotifyAuth");
  spotifyAuth(passport);

  app.get(
    "/auth/spotify",
    passport.authenticate("spotify", {
      scope: ["user-read-email", "user-read-private"],
      showDialog: true
    })
  );

  app.get(
    "/auth/spotify/callback",
    passport.authenticate("spotify", { failureRedirect: "/" }),
    (req, res) => {
      res.redirect("/");
    }
  );
};
