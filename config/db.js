const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/booksDb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
