import axios from "axios";
import { User } from "@/lib/types/user";

const updateUserName : ({ _id, name } : User) => Promise<User | void> = async ({ _id, name }) => {
    const patchURL : string = `/api/users/${_id}`;
    const patchBody = { name : name };
    const patchOptions : any = {};

    axios.patch(patchURL, patchBody, patchOptions)
        .then((response) =>  { return response.data; })
        .catch((error) => { console.log(error); })
        .finally(() => { });

    return;
};
const updateUserEmail : ({ _id, email } : User) => Promise<User | void> = async ({ _id, email }) => {
    const patchURL : string = `/api/users/${_id}`;
    const patchBody = { email : email };
    const patchOptions : any = {};

    axios.patch(patchURL, patchBody, patchOptions)
        .then((response) =>  { return response.data; })
        .catch((error) => { console.log(error); })
        .finally(() => { });

    return;
};
const updateUserPassword : ({ _id, password } : User) => Promise<User | void> = async ({ _id, password }) => {
    const patchURL : string = `/api/users/${_id}`;
    const patchBody = { email : password };
    const patchOptions : any = {};

    axios.patch(patchURL, patchBody, patchOptions)
        .then((response) =>  { return response.data; })
        .catch((error) => { console.log(error); })
        .finally(() => { });

    return;
};
const updateUserPermissions : ({ _id, permissions } : User) => Promise<User | void> = async ({ _id, permissions }) => {
    const patchURL : string = `/api/users/${_id}`;
    const patchBody = { email : permissions };
    const patchOptions : any = {};

    axios.patch(patchURL, patchBody, patchOptions)
        .then((response) =>  { return response.data; })
        .catch((error) => { console.log(error); })
        .finally(() => { });

    return;
};
export { updateUserName, updateUserEmail, updateUserPassword, updateUserPermissions };