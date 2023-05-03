import axios, { AxiosResponse } from "axios";
import { User } from "@/lib/types/user";

const getUser : (_id : string) => Promise<User> = async (_id) => {
    const response : AxiosResponse<User> = await axios.get(`/api/users/${_id}`);

    return response.data; 
};
export default getUser;