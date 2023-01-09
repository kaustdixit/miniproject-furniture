const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/products');
const db = mongoose.connection;
db.on('error',(error) => console.log(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json())

const productsRouter = require('./routes/products');
app.use('/products', productsRouter);

const port = process.env.PORT || 3000;
app.listen(port, ()=>console.log(`Listening to port ${port}...`));

