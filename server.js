// server.js
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");
const mongoose = require('mongoose');

const initRoutes = require("./routes/web");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/bakery-app')
.then(() => console.log("MongoDB connected..."))
.catch(err => console.error(err));

const db = mongoose.connection;

db.on("error", (err) => {
  console.error("Connection error:", err);
});

db.once("open", () => {
  console.log("Database is ready to use ✅");
});


// This is the key change: Serve assets from the 'public/dist' directory
app.use(express.static(path.join(__dirname, "public/dist")));

// Template Engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/views"));

initRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});