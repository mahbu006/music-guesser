const express = require("express");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");
const keys = require("./config/keys");
const app = express();
app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey] //array bc it allows multiple cookies if we want
  })
);
require("./routes/spotifyRoutes")(app);
app.get("/", (req, res) => {
  res.send({ hi: "there" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
