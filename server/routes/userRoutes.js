const mongoose = require("mongoose");
const User = mongoose.model("users");
const SingleScore = mongoose.model("singleScores");
module.exports = app => {
  app.get("/user", async (req, res) => {
    try {
      const user = await User.findOne({ _id: req.user._id });
      res.status(200).send(user);
    } catch (err) {
      res.status(400).send({ error: "User could not be found." });
    }
  });

  app.get("/user/single/stats/all", async (req, res) => {
    try {
      const gamesPlayed = await SingleScore.find({ userId: req.user._id });
      //games played
      //most played categories (show all categories played in descending order)
    } catch (err) {
      res.status(400).send({ error: "User stats couldn't be found." });
    }
  });

  app.get("/user/single/stats/genre/:genre", async (req, res) => {
    try {
      const gamesPlayed = await SingleScore.find({
        userId: req.user._id,
        genre: req.params.genre
      });
      //games played
      //highest score in each mode
    } catch (err) {
      res
        .status(400)
        .send({ error: "User stats for this genre couldn't be found." });
    }
  });
};
