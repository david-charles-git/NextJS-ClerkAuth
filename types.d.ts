type UserPermission = "admin" | "member" | "none";

interface User {
    _id? : string,
    name : string,
    email : string,
    password : string,
    permissions : UserPermission
};