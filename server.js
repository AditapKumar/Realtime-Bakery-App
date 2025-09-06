// server.js
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const sessionConfig = require("./app/http/middlewares/sessionConfig");
const flash = require("express-flash");

const initRoutes = require("./routes/web");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
const mongoURI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/realtime_bakery_app";
mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    console.log("MongoDB connected to realtime_bakery_app database...")
  )
  .catch((err) => {
    console.error("MongoDB connection error:", err);
    // Don't exit, just log the error and continue
  });

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Connection error:", err);
});

db.once("open", () => {
  console.log("Database is ready to use ✅");
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(sessionConfig());
app.use(flash());

// Global middleware to make user available in all views
app.use((req, res, next) => {
  res.locals.session = req.session;
  res.locals.user = req.session.user;
  next();
});

// This is the key change: Serve assets from the 'public/dist' directory
app.use(express.static(path.join(__dirname, "public/dist")));

// Template Engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/views"));

initRoutes(app);

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Socket.IO setup
const io = require("socket.io")(server);

// Make io available globally
app.set("io", io);

// Socket.IO connection handling
io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});
