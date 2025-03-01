const express = require('express');
const router = express.Router();
const bookController = require('../controllers/books.controller');


router.post('/create-book', bookController.createBook);
router.get('/get-all-books', bookController.getAllBooks);
router.get('/get-all-books/:id', bookController.getBook);
router.put('/get-all-books/:id', bookController.updateBook);
router.delete('/get-all-books/:id', bookController.deleteBook);

module.exports = router;