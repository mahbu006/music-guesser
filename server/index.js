const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const keys = require("./config/keys");
const passport = require("passport");
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] //array bc it allows multiple cookies if we want
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
require("./routes/spotifyRoutes")(app);
require("./routes/allAuthRoutes")(app);

/* app.get("/", (req, res) => {
  if (req.session.token) {
    res.cookie("token", req.session.token);
    res.json({
      status: "session cookie set"
    });
  } else {
    res.cookie("token", "");
    res.json({
      status: "session cookie not set"
    });
  }
}); */

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
