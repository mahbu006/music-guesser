const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const singleScoreSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  mode: String,
  value: {
    type: Number,
    default: 0
  },
  genre: String,
  timestamp: Number
});
mongoose.model("singleScores", singleScoreSchema);
