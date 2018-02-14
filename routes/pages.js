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
        
        Product.find({},(err, prod) => {
            let img;            
            console.log(prod);
            res.render('generico', {text : prod.texto, img : prod.url_img});})
        });

    module.exports = router;