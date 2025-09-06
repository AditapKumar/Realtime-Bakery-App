const Order = require("../../../models/order");

function orderController() {
  return {
    async index(req, res) {
      const orders = await Order.find({})
        .populate("customerId", "name email phone address")
        .sort({ createdAt: -1 });

      res.render("admin/orders", { orders });
    },
    async updateStatus(req, res) {
      const { orderId, status } = req.body;

      try {
        const order = await Order.findByIdAndUpdate(
          orderId,
          { status },
          { new: true }
        ).populate("customerId", "name email phone address");

        if (!order) {
          return res.status(404).json({ error: "Order not found" });
        }

        // Emit Socket.IO event for status update
        const io = req.app.get("io");
        io.emit("orderStatusUpdate", {
          orderId: order._id.toString().slice(-6),
          status: order.status,
          customerName: order.customerId.name,
        });

        res.json({ success: true, order });
      } catch (error) {
        res.status(500).json({ error: "Something went wrong" });
      }
    },
    async show(req, res) {
      const order = await Order.findById(req.params.id).populate(
        "customerId",
        "name email phone address"
      );

      if (!order) {
        return res.status(404).render("errors/404");
      }

      res.render("admin/singleOrder", { order });
    },
  };
}

module.exports = orderController;
