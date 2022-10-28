const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AuthSchema = new Schema({
  email: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
});

const AuthSch = mongoose.model("AuthSch", AuthSchema);
module.exports = AuthSch;
