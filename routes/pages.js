const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

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
  res.render('personalizado', { title: 'Personalizando' });
});

router.post("/personalizado", upload.single('image'), (req, res, next) => {
  const url_img = req.body.url_img;
  const texto = req.body.texto;
  
  const newProd = new Product({
    url_img,
    texto
  });

  newProd.save((err) => {
    if (err) {
      res.render("personalizado", { message: "Something went wrong" });
    } else {
      res.redirect("personalizado");
    }
  });
});






module.exports = router;
