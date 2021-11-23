const mongoose = require("../connection");
const schema = new mongoose.Schema({
  title: String,
  heroimage: String,
  links: String,
  backimage: String,
  skills: String,
  description: String,
  upload: String
});
const model = mongoose.model("portfolios", schema);
module.exports = model;
