import axios from "axios";
import { User } from "@/lib/types/user";

const createUser : ({ name, email, password, permissions } : User) => Promise<User | void> = async ({ name, email, password, permissions }) => {
    const postURL : string = "/api/users";
    const postBody : User = {
        name : name,
        email : email,
        password : password,
        permissions : permissions
    };

    axios.post(postURL, postBody)
        .then((response) =>  { return response.data; })
        .catch((error) => { console.log(error); })
        .finally(() => { });

    return;
};
export default createUser;