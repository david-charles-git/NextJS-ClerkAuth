import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
    name : {
        type : String,
        required : true,
        min : 3,
        max: 255
    },
    email : {
        type : String,
        required : true,
        min : 6,
        max : 255,
    },
    // password : {
    //     type : String,
    //     required : true,
    //     min : 6,
    //     max : 1024
    // },
    // date : {
    //     type : Date,
    //     defualt : Date.now
    // },
    // permissions : {
    //     type : String,
    //     default : "user"
    // }
});

const User = models.Users || model("Users", UserSchema);

export default User;