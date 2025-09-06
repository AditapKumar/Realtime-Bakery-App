const Order = require("../../models/order");

function orderController() {
  return {
    async index(req, res) {
      const orders = await Order.find({ customerId: req.session.user._id })
        .populate("customerId", "name email phone address")
        .sort({ createdAt: -1 });

      res.render("customers/orders", { orders });
    },
    async store(req, res) {
      const { phone, address } = req.body;

      // Validate request
      if (!phone || !address) {
        req.flash("error", "All fields are required");
        return res.redirect("/cart");
      }

      if (
        !req.session.cart ||
        Object.keys(req.session.cart.items).length === 0
      ) {
        req.flash("error", "Cart is empty");
        return res.redirect("/cart");
      }

      try {
        const order = new Order({
          customerId: req.session.user._id,
          items: Object.values(req.session.cart.items),
          phone,
          address,
          totalPrice: req.session.cart.totalPrice,
        });

        await order.save();

        // Emit Socket.IO event for new order
        const io = req.app.get("io");
        io.emit("newOrder", {
          orderId: order._id.toString().slice(-6),
          customerName: req.session.user.name,
          totalPrice: order.totalPrice,
        });

        // Clear cart after successful order
        delete req.session.cart;

        req.flash("success", "Order placed successfully!");
        return res.redirect("/orders");
      } catch (error) {
        req.flash("error", "Something went wrong");
        return res.redirect("/cart");
      }
    },
    async show(req, res) {
      const order = await Order.findById(req.params.id).populate(
        "customerId",
        "name email phone address"
      );

      if (order.customerId._id.toString() === req.session.user._id.toString()) {
        return res.render("customers/singleOrder", { order });
      }
      return res.redirect("/");
    },
  };
}

module.exports = orderController;
