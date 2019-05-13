var express = require('express');
var router = express.Router();
const Product = require('../models/product');
const csrf = require('csurf');
const passport = require('passport');

const csrfProtection = csrf();
router.use(csrfProtection);

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
    res.render('gallery/index', { products: docs });
  });
});

router.get('/showpainting', (req, res, next) => {
  res.render('showpainting');
  console.log(req.params.id)
});

router.get('/user/signup', (req, res, next) => {
  // const messages = req.flash('error');
  res.render('user/signup', { csrfToken: req.csrfToken() });
});

router.post('/user/signup', passport.authenticate('local.signup', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signup',
  failureFlash: true
}));

router.get('/user/profile', (req, res, next) => {
  res.render('user/profile');
});

router.get('/user/signin', (req, res, next) => {
  // const messages = req.flash('error');
  res.render('user/signin', { csrfToken: req.csrfToken() });
});

router.post('/user/signin', passport.authenticate('local.signin', {
  successRedirect: '/user/profile',
  failureRedirect: '/user/signin',
  failureFlash: true
}));

module.exports = router;
