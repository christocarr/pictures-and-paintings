const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const Cart = require('../models/cart');

// GET home page
router.get('/', function(req, res, next) {
  let successMsg = req.flash('success')[0];
  Product.find(function(err, docs) {
    res.render('gallery/index', { products: docs, successMsg: successMsg });
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

router.get('/checkout', (req, res) => {
  if (!req.session.cart) {
    return res.redirect('cart');
  }
  let errMsg = req.flash('error')[0];
  let cart = new Cart(req.session.cart);
  res.render('checkout', { total: cart.totalPrice, errMsg: errMsg });
});

router.post('/checkout', (req, res, next) => {
  if (!req.session.cart) {
    return res.redirect('cart');
  }
  
  let cart = new Cart(req.session.cart);

  // Set your secret key: remember to change this to your live secret key in production
  // See your keys here: https://dashboard.stripe.com/account/apikeys
  const stripe = require('stripe')('sk_test_ho39Cy3bzev0YTwr1LMEVin1005Lk87lHP');

  // Token is created using Checkout or Elements!
  // Get the payment token ID submitted by the form:
  const token = req.body.stripeToken; // Using Express

  (async () => {
    try {
      const charge = await stripe.charges.create({
      amount: cart.totalPrice * 100,
      currency: 'gbp',
      description: 'Example charge',
      source: token.id,
      metadata: {order_id: 6735},
      });  
    } catch(err) {
      req.flash('error', err.message);
      return res.redirect('/checkout');
    } 
    req.flash('success', 'Successfully bought product');
    req.cart = null;
    res.redirect('/');
  })();

});

module.exports = router;
