const express = require('express');
require('./config/db');

const app = express();

const PORT = process.env.PORT || 5000;
const routeBook = require('./routes/route.books');

app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use(routeBook);

app.listen(PORT, (err) => {
    if(err) {
        console.log('Error Occured');
    } else {
        console.log(`Server Running at Port ${PORT}`);
    }
})
