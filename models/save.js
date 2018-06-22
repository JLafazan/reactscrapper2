const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
  title: { type: String, required: true },
  date: { type: Date, default: Date.now },
  story: { type: String, required: true },
  url: { type: String, required: true },
  image: { type: String, required: true },
  comments: { type: Schema.Types.ObjectId, ref: 'Comment' }

});

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;
