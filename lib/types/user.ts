export type UserPermission = "admin" | "member" | "none";

export interface User {
    _id? : string,
    name : string,
    email : string,
    password : string,
    permissions : UserPermission
};