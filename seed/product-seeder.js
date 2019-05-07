const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pictures-and-paintings', { useNewUrlParser: true });

const products = [
  new Product({
    imagePath: '../public/images/13.Red_Evening.jpg',
    title: 'Curvilinear Tree-Sold',
    medium: 'Oils on canvas lined board',
    size: '20 x 16 inches (508 x 406mm)',
    price: 100
  }),
  new Product({
    imagePath: '../public/images/13.Red_Evening.jpg',
    title: 'Avenue1',
    medium: 'Oils on deep stretched canvas',
    size: '16 x 12 inches (405 x 305mm)',
    price: 75
  }),
  new Product({
    imagePath: '../public/images/13.Red_Evening.jpg',
    title: 'Avenue2',
    medium: 'Oils on canvas lined board',
    size: '20 x 16 inches (508 x 406mm)',
    price: 100
  }),
];

let done = 0;
for (let i = 0; i < products.length; i++) {
  products[i].save(function(err, result) {
    done++;
    if (done === products.length) {
      exit();
    } else {
      console.log('Error:', err);
    }
  });
}

exit = () => {
  mongoose.disconnect();
}