var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/tipo',(req,res) => {
  res.render('tipo', { title: 'Tipo' });
});

router.get('/generico', function(req, res, next) {
    res.render('generico', { title: 'Genericos' });
  });

  router.get('/personalizado', function(req, res, next) {
    res.render('personalizado', { title: 'Personalizando' });
  });

module.exports = router;
