const express = require("express");
const router = express.Router();

// Cart API routes
router.post("/update-cart", (req, res) => {
  if (!req.session.cart) {
    req.session.cart = {
      items: {},
      totalQty: 0,
      totalPrice: 0,
    };
  }

  const { _id, name, price, size, image } = req.body;
  const cart = req.session.cart;

  // Check if item exists in cart
  if (cart.items[_id]) {
    cart.items[_id].qty += 1;
  } else {
    cart.items[_id] = {
      item: { _id, name, price, size, image },
      qty: 1,
    };
  }

  cart.totalQty += 1;
  cart.totalPrice += parseInt(price);

  res.json({ totalQty: cart.totalQty, totalPrice: cart.totalPrice });
});

router.delete("/remove-from-cart", (req, res) => {
  const { _id } = req.body;
  const cart = req.session.cart;

  if (cart && cart.items[_id]) {
    cart.totalQty -= cart.items[_id].qty;
    cart.totalPrice -= cart.items[_id].item.price * cart.items[_id].qty;
    delete cart.items[_id];
  }

  res.json({ totalQty: cart.totalQty, totalPrice: cart.totalPrice });
});

module.exports = router;
