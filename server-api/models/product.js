const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    },
    coll: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('product', productSchema);



// const masterTable = [
//     {key: 'collection', values: [{displayLabel: 'Royal', value: 'royal'}]},
//     {key: 'color', values: [{displayLabel: 'Black', value: 'black'}]},
//     {key: 'category', values: [{displayLabel: 'Tables', value: 'tables'}]}
// ]