import axios, { AxiosResponse } from "axios";
import { User } from "@/lib/types/user";

const getUsers : () => Promise<User[]> = async () => {
    const response : AxiosResponse<User[]> = await axios.get(`/api/users`);

    return response.data;
};
export default getUsers;