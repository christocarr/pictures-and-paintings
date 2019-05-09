const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/pictures-and-paintings', { useNewUrlParser: true });

const products = [
  new Product({
    imagePath: '/images/sold.jpg',
    title: 'Curvilinear Tree-Sold',
    medium: 'Oils on canvas lined board',
    size: '20 x 16 inches (508 x 406mm)',
    price: 100
  }),
  new Product({
    imagePath: '/images/Avenue1.jpg',
    title: 'Avenue1',
    medium: 'Oils on deep stretched canvas',
    size: '16 x 12 inches (405 x 305mm)',
    price: 75
  }),
  new Product({
    imagePath: '/images/Avenue2.jpg',
    title: 'Avenue2',
    medium: 'Oils on canvas lined board',
    size: '20 x 16 inches (508 x 406mm)',
    price: 100
  }),
  new Product({
    imagePath: '/images/Beach_Horizon.jpg',
    title: 'Beach Horizon',
    medium: 'Oils on canvas lined board',
    size: '20 x 16 inches (508 x 406mm)',
    price: 100
  }),
  new Product({
    imagePath: '/images/Country_track.jpg',
    title: 'Country Track',
    medium: 'Oils on canvas lined board',
    size: '20 x 16 inches (508 x 406mm)',
    price: 100
  }),
  new Product({
    imagePath: '/images/On_the_Diagonal.jpg',
    title: 'On the Diagonal',
    medium: 'Acrylics and oils on board',
    size: '24 x 24 inches (610 x 610mm)',
    price: 150
  }),
  new Product({
    imagePath: '/images/Fantasy_Village.jpg',
      title: 'Fantasy Village',
      medium: 'Oils on stretched canvas',
      size: '14 x 18 inches (356 x 458mm)',
      price: 200
  }),
  new Product({
    imagePath: '/images/Field_of_Flowers.jpg',
      title: 'Field of Flowers',
      medium: 'Oils on canvas lined board',
      size: '16 x 20 inches (406 x 508mm)',
      price: 100
  }),
  new Product({
    imagePath: '/images/Fields.jpg',
      title: 'Fields',
      medium: 'Oils on streched canvas',
      size: '16 x 12 inches (405 x 305mm)',
      price: 75
  }),
  new Product({
    imagePath: '/images/Fishing_boat.jpg',
      title: 'Fishing Boat',
      medium: 'Oils on canvas lined board',
      size: '16 x 20 inches (406 x 508mm)',
      price: 100
  }),
  new Product({
    imagePath: '/images/Fishing_Jetty.jpg',
      title: 'Fishing Jetty',
      medium: 'Oils on stretched canvas',
      size: '12 x 16 inches (300 x 400mm)',
      price: 75
  }),
  new Product({
    imagePath: '/images/Fishing_village.jpg',
      title: 'Fishing Village',
      medium: 'Oils on stretched canvas',
      size: '12 x 16 inches (300 x 400mm)',
      price: 75
  }),
  new Product({
    imagePath: '/images/Red_Evening.jpg',
      title: 'Red Evening',
      medium: 'Oils on canvas lined board',
      size: '32 x 32 inches (812 x 812mm)',
      price: 250
  }),
  new Product({
    imagePath: '/images/Shattered_1.jpg',
      title: 'Shattered One',
      medium: 'Oils on deep mounted board',
      size: '24 x 24 inches (610 x 610mm)',
      price: 175
  }),
  new Product({
      imagePath: '/images/Shattered_2.jpg',
      title: 'Shattered Two',
      medium: 'Oils on board',
      size: '24 x 24 inches (610 x 610mm)',
      price: 150
  }),
  new Product({
    imagePath: '/images/Islet.jpg',
    title: 'Islet',
    medium: 'Oils on stretched canvas',
    size: '16 x 12 inches (405 x 305mm)',
    price: 75
}),
new Product({
  imagePath: '/images/Lake_Farm.jpg',
  title: 'Lake Farm',
  medium: 'Oils on stretched canvas',
  size: '12 x 9 inches (304 x 230mm)',
  price: 50
}),
new Product({
  imagePath: '/images/Deep_in_the_woods.jpg',
  title: 'Deep in the Woods',
  medium: 'Oils on stretched canvas',
  size: '20 x 16 inches (508 x 406mm)',
  price: 175
}),
new Product({
  imagePath: '/images/Winter_tree.jpg',
  title: 'Winter Tree',
  medium: 'Oils on stretched canvas',
  size: '20 x 16 inches (508 x 406mm)',
  price: 175
}),
new Product({
  imagePath: '/images/Yellow_Road.jpg',
  title: 'Yellow Road',
  medium: 'Oils on board',
  size: '14 x 14 inches (400 x 400mm)',
  price: 50
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