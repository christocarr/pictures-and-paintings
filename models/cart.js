module.exports = function Cart(initCart) {
  this.items = initCart.items ? initCart.items : {};
  this.totalQty = initCart.totalQty ? initCart.totalQty : 0;
  this.totalPrice = initCart.totalPrice ? initCart.totalPrice : 0;

  this.add = (item, id) => {
    let storedItem = this.items[id];
    if (!storedItem) {
      storedItem = this.items[id] = { item: item, qty: 0, price: 0 }
    }
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;
  }

  this.generateArr = function() {
    let arr = [];
    for (let id in this.items) {
      arr.push(this.items[id]);
    }
    return arr;
  };
};