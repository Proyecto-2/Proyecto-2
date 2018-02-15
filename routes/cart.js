const express = require("express");
const router = express.Router();
const ensureLoggedIn = require("/pages");
const Cart = require("../models/Cart");


router.get("/", (req, res, next) => {
    Cart.findOne({ "ownerId": req.user._id }).populate("products")
    .then(cart => {
        let cartObject;
        let pricesArray = cart.products.map((e)=> e.price)
        console.log(pricesArray.reduce((a,b)=>a+b))
        if(cart!=null)cartObject = cart
        else cartObject = undefined;
        res.render("myCart", { cart: cartObject });
    }).catch(err=>console.log(err))
});

router.post("/", (req, res, next) => {
      new Cart({ ownerId: req.user._id })
        .save()
        .then(newCart => console.log(newCart))
        .catch(err => console.log(err));
        res.redirect('/cart')
});
router.post("/addProduct", (req, res, next) => {

     Cart.findOneAndUpdate({ ownerId: req.body.userid }, { $push:{products:req.body.productid}}, {new: true})
     .then(cart => {
        res.redirect("/cart")
    });
});

module.exports = router;