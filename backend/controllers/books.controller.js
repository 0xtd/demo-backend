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

// Controller For Update of Book
exports.updateBook = async (req, res) => {
  try {
    const { title, author, description, publishedDate, publisher, pages, imageUrl } = req.body;

    let updatedBook = new Book({
      title,
      author,
      description,
      publishedDate,
      publisher,
      pages,
      imageUrl,
      _id: req.params.id,
    });

    updatedBook = await Book.findByIdAndUpdate(req.params.id, updatedBook);

    res.json({
      message: `Book with id ${req.params.id} updated successfully`
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}

// Controller For Book Delete
exports.deleteBook = async (req, res) => {
  try {
    const deletedBook = await Book.findByIdAndDelete(req.params.id);
    res.json({
      message: `Book with id ${req.params.id} deleted successfully`
    });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}