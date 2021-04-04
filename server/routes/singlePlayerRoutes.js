const mongoose = require("mongoose");
const User = mongoose.model("users");
const Score = mongoose.model("singleScores");
module.exports = app => {
  app.post("/single/score", async (req, res) => {
    const { user, mode, value, genre, timestamp } = req.body;
    if (!user || !mode || !timestamp)
      res.status(400).send({ error: "All attributes are required" });
    try {
      const score = await new Score({
        userId: req.user._id,
        mode: mode,
        value: value,
        genre: genre,
        timestamp: timestamp
      }).save();
      res.send(score);
    } catch (err) {
      console.log(err);
    }
  });

  app.get("/single/leaderboard/:mode/:genre", async (req, res) => {
    try {
      const scores = await Score.find(
        { mode: req.params.mode, genre: req.params.genre },
        ["userId", "mode", "value", "genre", "timestamp"]
      ).sort({ value: -1 });
      res.status(200).send(scores);
    } catch (err) {
      console.log(err);
    }
  });
};
