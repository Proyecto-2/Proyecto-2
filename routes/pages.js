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
  const all = JSON.parse(req.body.all.toString());
  const url_img_saved = all.url_img;
  const texto_saved = all.texto;
  // const url = req.body.url;
  // const text = req.body.text;
  // { _id: 5a844be754a66016d48539e7,  url_img: '7d77c09e38910167d677fce4b79bad81',  texto: 'fgfg' }

  console.log(all);
  console.log(all.url_img);
  console.log("text " + all.texto);

  const newProd = new Create({
    tipo,
    cantidad,
    url_img_saved,
    texto_saved
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
