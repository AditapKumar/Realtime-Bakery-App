const express = require("express");
const homeController = require("../app/http/controllers/homeController");
const authController = require("../app/http/controllers/authController");
const cartController = require("../app/http/controllers/customers/cartController");
const orderController = require("../app/http/controllers/orderController");
const adminOrderController = require("../app/http/controllers/admin/orderController");
const auth = require("../app/http/middlewares/auth");

const router = express.Router();

function initRoutes(app) {
  // Web routes
  app.get("/", homeController().index);
  app.get("/cart", cartController().index);
  app.get("/orders", auth().auth, orderController().index);
  app.get("/orders/:id", auth().auth, orderController().show);
  app.post("/orders", auth().auth, orderController().store);

  // Admin routes
  app.get("/admin/orders", adminOrderController().index);
  app.get("/admin/orders/:id", adminOrderController().show);
  app.post("/admin/orders/status", adminOrderController().updateStatus);

  // Auth routes
  app.get("/login", auth().guest, authController().login);
  app.post("/login", auth().guest, authController().postLogin);
  app.get("/register", auth().guest, authController().register);
  app.post("/register", auth().guest, authController().postRegister);
  app.post("/logout", authController().logout);

  // API routes
  app.use("/api", require("./api"));
}

module.exports = initRoutes;
