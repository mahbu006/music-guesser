module.exports = app => {
  require("./googleAuthRoutes")(app);
  require("./spotifyAuthRoutes")(app);
  app.get("/logout", (req, res) => {
    req.logout();
    //req.session = null;
    res.redirect("/");
  });
};
