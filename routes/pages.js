const express = require('express');
const Create = require('../models/Cart');
const multer = require('multer');
const upload = multer({ dest: __dirname + '/../uploads' });
const router = express.Router();
const Product = require('../models/Product');
const mongoose = require('mongoose');

const ensureLoggedIn = (redirect_url) => {
  return (req, res, next) => {
    if (req.user) {
      next()
    } else {
      res.redirect(redirect_url)
    }
  }
}

/* GET home page. */
router.get('/tipo', ensureLoggedIn('/login'), (req, res) => {
  res.render('tipo', { title: 'Tipo' });
});

router.get('/product', (req, res, next) => { 
    Product.find({}, (err, products) => {
        res.render('product/list', { products: products });
    })
});


router.get('/product/:id', (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
        res.render('product/detail', { product: product });
    })
});

// Personalizado

router.get('/personalizado', ensureLoggedIn('/login'), function (req, res, next) {
  res.render('personalizado', { object: undefined, title: 'Personalizando' });
});

router.post("/personalizado", [ensureLoggedIn('/login'), upload.single('url_img')], (req, res) => {

  const url_img = req.file.filename;
  const texto = req.body.texto;

  const newProd = new Product({
    url_img,
    texto
  });
  res.render('personalizado', { object: newProd, title: 'Personalizado' })
})

router.post("/cart", ensureLoggedIn('/login'), (req, res) => {

  const tipo = req.body.tipo;
  const cantidad = req.body.cantidad;
  const all = JSON.parse(req.body.all.toString());
  const url_img = all.url_img;
  const texto = all.texto;

  const newProd = new Product({
    tipo,
    cantidad,
    url_img,
    texto
  });

  newProd.save((err) => {
    if (err) {
      res.render("personalizado", {
        errorMessage: "Something went wrong when signing up"
      });
    } else {
      
      res.redirect("/cart");
    }
  })
})




// Carrito

router.get('/cart', ensureLoggedIn('/login'), function (req, res, next) {
  res.render('cart', { object: undefined, title: 'cart' });
});





module.exports = router;
