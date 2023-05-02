"use strict";

var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  email: {
    type: String,
    required: true,
    min: 6,
    max: 255
  },
  password: {
    type: String,
    required: true,
    min: 6,
    max: 1024
  },
  date: {
    type: Date,
    defualt: Date.now
  },
  permissions: {
    type: String,
    "default": "user"
  }
});
var UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;
//# sourceMappingURL=User.dev.js.map
