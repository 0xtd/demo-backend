const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  author: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  published: {
    type: Date,
    required: true,
  },
  publisher: {
    type: String,
    trim: true,
  },
  pages: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
    trim: true,
  },
});

const bookModel = mongoose.model('books', bookSchema);
module.exports = bookModel;