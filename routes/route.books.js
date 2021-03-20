const express = require('express');

const router = express.Router();

const {randomMessage, getBooks, getSingleBook, postBook, updateBookById, deleteBookById} = require('../controller/books.controller.js');

router.get('/', randomMessage);
router.get('/books', getBooks);
router.get('/book/:id', getSingleBook);
router.post('/book', postBook);
router.put('/book/:id', updateBookById);
router.delete('/book/:id', deleteBookById);

module.exports = router;
