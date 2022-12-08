const express = require('express');
const product = require('../models/product');
const router = express.Router();

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Getting One using ID
router.get('/:id', getProduct, (req, res) => {
    // res.send(res.ProductById.name)
    res.json(res.ProductById);
});

// Creating One

router.post('/', async (req, res) => {
    const ProductEntry = new product({
        id: req.body.id,
        name: req.body.name,
        imageurl: req.body.imageurl,
        coll: req.body.coll,
        category: req.body.category,
        price: req.body.price,
        description: req.body.description,
        rating: req.body.rating,
    });

    try {
        const newProduct = await ProductEntry.save();
        res.status(201).json(newProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Updating One
router.patch('/:id', getProduct, async (req, res) => {
    const {formData} = {req.body.name};

    if (req.body.name !== null) {
        res.ProductById.name = name;
    }
    if (req.body.imageurl !== null) {
        res.ProductById.imageurl = imageurl;
    }
    if (req.body.category !== null) {
        res.ProductById.category = category;
    }
    if (req.body.coll !== null) {
        res.ProductById.coll = coll;
    }
    if (req.body.price !== null) {
        res.ProductById.price = price;
    }
    if (req.body.description !== null) {
        res.ProductById.description = description;
    }
    if (req.body.rating !== null) {
        res.ProductById.rating = rating;
    }

    try {
        const updatedProduct = await res.ProductById.save();
        res.json(updatedProduct);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Deleting One
router.delete('/:id', getProduct, async (req, res) => {
    try {
        await res.ProductById.remove();
        res.json({ message: `Deleted ${res.ProductById.name}` });
    } catch (err) {
        res.status(500).json({ message: err.message });

    }
});

async function getProduct(req, res, next) {
    try {
        ProductById = await product.findById(req.params.id);
        if (ProductById == null) {
            return res.status(404).json({ message: 'Cannot find product' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.ProductById = ProductById;
    next();
}

module.exports = router;
