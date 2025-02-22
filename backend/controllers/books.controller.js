const Book = require('../models/books.model');

// Controller For Book Creation 
exports.createBook = async (req, res) => {
  try {
    const { title, author, description, publishedDate, publisher, pages, imageUrl } = req.body;

    let newBook = new Book({
      title,
      author,
      description,
      publishedDate,
      publisher,
      pages,
      imageUrl
    });

    newBook = await newBook.save();
    res.status(201).json(newBook);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Controller For Fetching All Books
exports.getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    res.json(books);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};

// Controller For Fetching Single Book
exports.getBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.json(book);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}