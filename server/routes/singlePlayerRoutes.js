const mongoose = require("mongoose");
const User = mongoose.model("users");
const SingleScore = mongoose.model("singleScores");
module.exports = app => {
  app.post("/single/score", async (req, res) => {
    const { mode, value, genre, timestamp } = req.body;
    if (!mode || !timestamp)
      res.status(400).send({ error: "All attributes are required" });
    try {
      const score = await new SingleScore({
        userId: req.user._id,
        mode: mode,
        value: value,
        genre: genre,
        timestamp: timestamp
      }).save();
      res.send(score);
    } catch (err) {
      res
        .status(400)
        .send({ error: "There was an error receiving the stats." });
    }
  });

  app.get("/single/leaderboard/:mode/:genre", async (req, res) => {
    try {
      const scores = await SingleScore.find({
        mode: req.params.mode,
        genre: req.params.genre
      }).sort({ value: -1 });
      res.status(200).send(scores);
    } catch (err) {
      res
        .status(400)
        .send({ error: "There was an error getting the leaderboard." });
    }
  });
};
