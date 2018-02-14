const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const Create = require('../models/Create');

const multer = require('multer');
const upload = multer({ dest: __dirname + '/../uploads' });

/* GET home page. */
router.get('/tipo', (req, res) => {
  res.render('tipo', { title: 'Tipo' });
});

router.get('/generico', function (req, res, next) {
  res.render('generico', { title: 'Genericos' });
});

// Personalizado

router.get('/personalizado', function (req, res, next) {
  res.render('personalizado', { object: undefined, title: 'Personalizando' });
});

router.post("/personalizado", upload.single('url_img'), (req, res) => {

  const url_img = req.file.filename;
  const texto = req.body.texto;

  const newProd = new Create({
    url_img,
    texto,
  });
    res.render('personalizado', { object: newProd, title: 'Personalizado' })
})

router.post("/cart", (req, res) => {

  const tipo = req.body.tipo;
  const cantidad = req.body.cantidad;
  const all = req.body.all;

  const newProd = new Create({
    tipo,
    cantidad,
    all
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

router.get('/cart', function (req, res, next) {
  res.render('cart', { object: undefined, title: 'cart' });
});





module.exports = router;
