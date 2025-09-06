const session = require("express-session");
const MongoStore = require("connect-mongo");

function sessionConfig() {
  return session({
    secret: process.env.SESSION_SECRET || "your-secret-key",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl:
        process.env.MONGODB_URI ||
        "mongodb://localhost:27017/realtime_bakery_app",
    }),
    cookie: {
      secure: false, // Set to true in production with HTTPS
      maxAge: 1000 * 60 * 60 * 24, // 24 hours
    },
  });
}

module.exports = sessionConfig;
