const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Cart = require('../models/cart');

// GET home page
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
    res.render('gallery/index', { products: docs });
  });
});


// GET showpainting page and render clicked painting 
router.get('/showpainting/:id', async (req, res, next) => {
  const painting = await Product.findById(req.params.id);
  res.render('showpainting', { painting: painting });
  
});

router.get('/add-to-cart/:id', (req, res, next) => {
  let productId = req.params.id;
  let cart = new Cart(req.session.cart ? req.session.cart : {});

  Product.findById(productId, (err, product) => {
    if (err) {
      return res.redirect('/');
    }
    cart.add(product, product.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  });
});

router.get('/cart', (req, res, next) => {
  if (!req.session.cart) {
    return res.render('cart', { products: null });
  }
  let cart = new Cart(req.session.cart);
  res.render('cart', { products: cart.generateArr(), totalPrice: cart.totalPrice });
});

module.exports = router;
