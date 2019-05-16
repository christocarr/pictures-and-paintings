var express = require('express');
var router = express.Router();
const Product = require('../models/product');

/* GET home page. */
router.get('/', function(req, res, next) {
  Product.find(function(err, docs) {
    res.render('gallery/index', { products: docs });
  });
});

router.get('/showpainting/:id', async (req, res, next) => {
  const painting = await Product.findById(req.params.id);
  res.render('showpainting', { painting: painting });
  
});

module.exports = router;
