const User = require("../../models/user");

function authController() {
  return {
    login(req, res) {
      res.render("auth/login");
    },
    async postLogin(req, res) {
      const { email, password } = req.body;

      // Validate request
      if (!email || !password) {
        req.flash("error", "All fields are required");
        return res.redirect("/login");
      }

      try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
          req.flash("error", "Invalid email or password");
          return res.redirect("/login");
        }

        // Check password
        const isMatch = await user.comparePassword(password);
        if (!isMatch) {
          req.flash("error", "Invalid email or password");
          return res.redirect("/login");
        }

        // Set session
        req.session.isAuthenticated = true;
        req.session.user = user;
        req.flash("success", "Login successful");
        return res.redirect("/");
      } catch (error) {
        req.flash("error", "Something went wrong");
        return res.redirect("/login");
      }
    },
    register(req, res) {
      res.render("auth/register");
    },
    async postRegister(req, res) {
      const { name, email, password, phone, address } = req.body;

      // Validate request
      if (!name || !email || !password || !phone || !address) {
        req.flash("error", "All fields are required");
        return res.redirect("/register");
      }

      try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          req.flash("error", "Email already registered");
          return res.redirect("/register");
        }

        // Create new user
        const user = new User({
          name,
          email,
          password,
          phone,
          address,
        });

        await user.save();
        req.flash("success", "Registration successful! Please login");
        return res.redirect("/login");
      } catch (error) {
        req.flash("error", "Something went wrong");
        return res.redirect("/register");
      }
    },
    logout(req, res) {
      req.session.destroy((err) => {
        if (err) {
          console.log(err);
        }
        return res.redirect("/");
      });
    },
  };
}

module.exports = authController;
