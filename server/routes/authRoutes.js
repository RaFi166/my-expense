const express = require("express");
const {
  registerController,
  userController,
  loginController,
} = require("../controllers/authControllers");
const authRouter = express.Router();

authRouter.post("/register", registerController);
authRouter.get("/users", userController);
authRouter.post("/login", loginController);

module.exports = authRouter;
