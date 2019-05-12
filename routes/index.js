var express = require('express');
var router = express.Router();
const Product = require('../models/product');
const csrf = require('csurf');

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
  res.render('user/signup', {csrfToken: req.csrfToken() });
});


module.exports = router;
