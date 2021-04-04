const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const keys = require("./config/keys");
require("./models/User");
require("./models/Score");
const passport = require("passport");
mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },
  () => {
    console.log("Connected to mongo");
  }
);
mongoose.set("useFindAndModify", false);
const app = express();

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
require("./routes/spotifyRoutes")(app);
require("./routes/allAuthRoutes")(app);
require("./routes/singlePlayerRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
