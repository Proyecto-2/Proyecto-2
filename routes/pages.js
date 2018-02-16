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

router.get('/product', ensureLoggedIn('/login'), (req, res, next) => {
  Product.find({}, (err, products) => {
    res.render('product/list', { products: products.slice(0, 5) });
  })
});


router.get('/product/:id', ensureLoggedIn('/login'), (req, res, next) => {
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
  console.log('entro en la ruta post de cart')
  console.log(req.body)
  const userID = res.locals.user._id
  const tipo = req.body.tipo;
  const cantidad = req.body.cantidad;
  const precio = req.body.precio;
  const all = JSON.parse(req.body.all.toString());
  const url_img = all.url_img;
  const texto = all.texto;
  console.log(cantidad)

  const newProd = new Product({
    tipo,
    cantidad,
    precio,
    url_img,
    texto
  });

  newProd.save().then((savedProduct) => {
    var productId = savedProduct._id
    console.log('entro a buscar el carrito')
    Cart.findByIdAndUpdate(cartId,
      { $push: { products: productId } },
      { 'new': true }).then(res.render('personalizado', { object: undefined, title: 'Personalizando' }));
  })
})



// Carrito

router.get("/cart", (req, res, next) => {
  console.log('el id de mi cart')
  console.log(cartId)
  Cart.findById(cartId).populate('products')
    .then(cart => {
      console.log("cart", cart)
      res.render("cart", { cart: cart });
    });
});

router.post('/:id', (req, res, next) => {
  const productId = req.params.id;
});

module.exports = router;
