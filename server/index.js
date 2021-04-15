const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieSession = require("cookie-session");
const cookieParser = require("cookie-parser");
const keys = require("./config/keys");
const passport = require("passport");
const requireAuth = require("./middlewares/requireAuth");
require("./models/User");
require("./models/SingleScore");

mongoose.connect(
  keys.mongoURI,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    userCreateIndex: true
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
app.use(
  cors({
    origin: "http://localhost:3000/"
  })
);
require("./routes/allAuthRoutes")(app);
requireAuth(app);
require("./routes/spotifyRoutes")(app);
require("./routes/singlePlayerRoutes")(app);
require("./routes/userRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening at port ${PORT}`);
});
