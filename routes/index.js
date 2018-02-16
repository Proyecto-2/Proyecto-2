var express = require('express');
var router = express.Router();

const Cart = require('../models/Cart');
/* GET home page. */
router.get('/', function(req, res, next) {
  const userID = res.locals.user._id
  
    const newCart = new Cart({
      ownerId: userID
    })
  
    newCart.save().then((cart) => {
      cartId = cart._id;
    })
  res.render('index', { title: 'Express' });
});

module.exports = router


