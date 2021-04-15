module.exports = app => {
  const passport = require("passport");
  const googleAuth = require("../services/googleAuth");
  googleAuth(passport);

  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["https://www.googleapis.com/auth/userinfo.profile"],
      showDialog: true
    })
  );
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", { failureRedirect: "/" }),
    (req, res) => {
      //req.session.token = req.user.token;
      res.redirect("exp://127.0.0.1:19000/home" + `/?user=${req.user._id}`);
    }
  );
};
