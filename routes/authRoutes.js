const passport = require("passport");

module.exports = (app) => {
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"],
    })
  );

  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/surveys");
    }
  );

  app.get("/api/logout", (req, res) => {
    //passport attaches this one too automatically
    //it kills th cookie in there
    req.logout();
    res.redirect("/");
  });

  app.get("/api/current-user", (req, res) => {
    //passport attaches the user object to req
    res.send(req.user);
  });
};
