var express = require('express');
var router = express.Router();
const Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
    res.render('gallery/index', { products: docs });
  });
});

router.get('/showpainting/:id', (req, res, next) => {
  res.render('showpainting', { id: req.params.id });
});

module.exports = router;
