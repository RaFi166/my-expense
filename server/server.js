const express = require("express");
const app = express();
const mongoose = require("mongoose");
var cors = require("cors");
const passport = require("passport");
const checkLogin = require("./middlewares/checkLogin");
const transactionRoutes = require("./routes/transactionRoutes");
const authRouter = require("./routes/authRoutes");
const port = 1337;

app.use(cors());
app.use(express.json());
app.use(passport.initialize());
app.use("/api", transactionRoutes);
app.use("/api", authRouter);
require("./middlewares/checkLogin");

mongoose
  .connect(
    "mongodb+srv://rafi:8c1wLY0msll4kaG4@cluster0.opetx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

app.get("/", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.send("Hello World!");
});

app.get("/me", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.send("Hello me!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
