"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var UserSchema = new mongoose_1.Schema({
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
    }
});
var User = mongoose_1.models.Users || mongoose_1.model("Users", UserSchema);
exports["default"] = User;

//# sourceMappingURL=User.js.map
