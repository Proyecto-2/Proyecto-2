const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/project2');

/* GET home page. */
router.get('/tipo', (req, res) => {
    res.render('tipo', { title: 'Tipo' });
});

router.get('/generico', (req, res, next) => {

    Product.find({}, (err, products) => {
        res.render('generico', { products: products });
    })
});

router.post('/:id', (req, res, next) => {
    const productId = req.params.id;
  });

router.get('/previsualizacion', (req, res, next) => {
    Product.find({}, (err, products) => {
        res.render('previsualizacion', { products: products });
    })
});

module.exports = router;