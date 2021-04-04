const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const scoreSchema = new Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  mode: String,
  value: {
    type: Number,
    default: 0
  },
  timestamp: Number
});
mongoose.model("scores", scoreSchema);
