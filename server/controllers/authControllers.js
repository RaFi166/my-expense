const AuthSch = require("../models/authModel");
const bcrypt = require("bcrypt");
const saltRounds = 10;
var jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  const password = await bcrypt.hash(req.body.password, saltRounds);
  const data = await AuthSch.create({
    email: req.body.email,
    password: password,
  });
  res.send(data);
};

const userController = async (req, res) => {
  const users = await AuthSch.find();
  res.send(users);
};

const loginController = async (req, res) => {
  const user = await AuthSch.findOne({ email: req.body.email });
  const passMatch = await bcrypt.compare(req.body.password, user.password);
  if (user && passMatch) {
    const payload = {
      email: user.email,
      id: user._id,
    };
    var token = jwt.sign({ payload }, "shhhhh");
    res.send({ token: "Bearer " + token });
  } else {
    res.send("something is wrong");
  }
};
module.exports = {
  registerController,
  userController,
  loginController,
};
