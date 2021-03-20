const mongoose = require('mongoose');

const booksSchema = new mongoose.Schema({
    _id : {
        type : Number,
        reqired : true,
    },
    name : {
        type : String,
        required : true
    },
    
    author : {
        type : String,
        required : true
    },
    rating : {
        type : Number,
        required : true
    },
    
    uploadedAt : {
        type : Date,
        required : true,
        default : new Date,
    }
});

const Book = mongoose.model('Book', booksSchema);

module.exports = Book;