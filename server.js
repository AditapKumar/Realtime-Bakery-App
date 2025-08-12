const express = require("express");
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Rendering the template
app.get('/', (req, res) => {
  res.render('home');
})

// Set Template Engine
app.use(expressLayouts);
app.set("views", path.join(__dirname, "resources/views"));
app.set("view engine", "ejs");

// Routes
app.get("/", (req, res) => {
  res.send("Hello from server");
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Page not found");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
