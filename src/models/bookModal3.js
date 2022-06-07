const mongoose = require("mongoose");

const bookSchema3 = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  author_id: {
    type: Number,
    ref:"author",
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  ratings: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("booksDay3", bookSchema3);
