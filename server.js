// server.js
const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// This is the key change: Serve assets from the 'public/dist' directory
app.use(express.static(path.join(__dirname, "public/dist")));

// Template Engine
app.use(expressLayouts);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});