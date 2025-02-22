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
  publishedDate: {
    type: String,
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
},
{
  timestamps: true,
});

const Book = mongoose.model('books', bookSchema);
module.exports = Book;