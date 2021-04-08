const passport = require("passport");
const spotifyAuth = require("../services/spotifyAuth");
module.exports = app => {
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
      res.redirect("exp://127.0.0.1:19000" + `/?user=${req.user}`);
      //exp://192.168.86.160:19000
    }
  );
};
