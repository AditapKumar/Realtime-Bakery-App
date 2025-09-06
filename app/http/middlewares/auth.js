function auth() {
  return {
    guest(req, res, next) {
      if (!req.session.isAuthenticated) {
        return next();
      }
      return res.redirect("/");
    },
    auth(req, res, next) {
      if (req.session.isAuthenticated) {
        return next();
      }
      return res.redirect("/login");
    },
  };
}

module.exports = auth;
