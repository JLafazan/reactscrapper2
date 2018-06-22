const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const saveSchema = new Schema({
  title: { type: String, required: false },
  date: { type: Date, default: Date.now },
  story: { type: String, required: false },
  url: { type: String, required: false },
  image: { type: String, required: false },
  comments: { type: Schema.Types.ObjectId, ref: 'Comment' }

});

const Save = mongoose.model("Save", saveSchema);

module.exports = Save;

/*
create quick sample using that schema and test it with post request with obj as the body

{
  title: "Look for this title",
  story: "Look for this story",
  url:"Look for this url",
  image:"Look for this image"
}


*/
