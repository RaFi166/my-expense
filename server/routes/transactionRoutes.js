const express = require("express");
const app = express();
const passport = require("passport");
const {
  getTransaction,
  postTransaction,
  deleteTransaction,
} = require("../controllers/transactionControllers");
const transactionRoutes = express.Router();
app.use(passport.initialize());
transactionRoutes.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  getTransaction
);
transactionRoutes.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postTransaction
);
transactionRoutes.delete(
  "/delete/:id",
  passport.authenticate("jwt", { session: false }),
  deleteTransaction
);

module.exports = transactionRoutes;
