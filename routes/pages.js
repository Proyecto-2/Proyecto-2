const express = require('express');
const Cart = require('../models/Cart');
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

router.get('/generico', (req, res, next) => {

    Product.find({}, (err, products) => {
        res.render('generico', { products: products });
    })
});


router.get('/previsualizacion', (req, res, next) => {
  Product.find({}, (err, products) => {
    res.render('previsualizacion', { products: products });
  })
});

// Personalizado

router.get('/personalizado', ensureLoggedIn('/login'), function (req, res, next) {
  res.render('personalizado', { object: undefined, title: 'Personalizando' });
});

router.post("/personalizado", [ensureLoggedIn('/login'), upload.single('url_img')], (req, res) => {
  console.log('entro aqui 1')
  const url_img = req.file.filename;
  const texto = req.body.texto;
  
  const newProd = new Product({
    url_img,
    texto
  });
  console.log("entra aqui")
  res.render('personalizado', { object: newProd, title: 'Personalizado' })
})

router.post("/cart", ensureLoggedIn('/login'), (req, res) => {
  const userID = res.locals.user._id
  const tipo = req.body.tipo;
  const cantidad = req.body.cantidad;
  const all = JSON.parse(req.body.all.toString());
  const url_img = all.url_img;
  const texto = all.texto;
  var cartId
  
  const newProd = new Product({
    tipo,
    cantidad,
    url_img,
    texto
  });

  const newCart = new Cart({
    ownerId: userID
  })

  newCart.save().then((cart) => {
    cartId = cart._id
  })
  
  newProd.save().then((savedProduct) => {
    var productId = savedProduct._id

      Cart.findByIdAndUpdate(cartId, 
        { $push: { products: savedProduct._id }},
        { 'new': true })
     .then((mycart) => console.log(mycart))
     
    })
  })

// Carrito

router.get('/cart', ensureLoggedIn('/login'), function (req, res, next) {
  res.render('cart', { object: undefined, title: 'cart' });
});

router.post('/:id', (req, res, next) => {
    const productId = req.params.id;
  });







module.exports = router;
