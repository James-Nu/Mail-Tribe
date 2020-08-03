const keys = require("../config/keys");
const stripe = require("stripe")(
  "sk_test_51HBjzDDOYWT7gjgiFFIy4WsDIg6h7EaB2Y4Hsp0Bf00NdUSyJD5qpyCqmxeHe3yGQ3ymAcdU8UNrYtKd1gNNr9p500LJiGnvcV"
);
const requireLogin = require("../middlewares/requireLogin");

module.exports = (app) => {
  app.post("/api/stripe", requireLogin, async (req, res) => {
    const charge = await stripe.charges.create({
      amount: 500,
      currency: "usd",
      description: "$5 for 5 credits",
      source: req.body.id,
    });

    req.user.credits += 5;
    const user = await req.user.save();

    res.send(user);
  });
};
