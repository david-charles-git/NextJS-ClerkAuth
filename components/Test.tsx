"use client"

import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { User } from "@/lib/types/user";

const Test = () => {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const createUser : () => Promise<void> = async () => {
        setIsLoading(true);

        try {
            const postURL : string = "/api/users";
            const postBody : User = {
                name : "david",
                email : "asd@asd.com",
                password : "root",
                permissions : "none"
            };

            axios.post(postURL, postBody)
                .then((response) =>  { console.log(response); })
                .catch((error) => { console.log(error); })
                .finally(() => { setIsLoading(false); });

        } catch (error) {
            console.log(error);
            setIsLoading(false);

        }
        
    };
    const getUsers : () => Promise<void> = async () => {
        try {
            const response : AxiosResponse<User[]> = await axios.get("/api/users");

            setUsers(response.data);

        } catch (error) {
            console.log(error);

        }
    };
    const getUser : (_id : string) =>Promise<void> = async (_id) => {
        try {
            const response : AxiosResponse<User[]> = await axios.get(`/api/users/${_id}`);

            setUsers(response.data);

        } catch (error) {
            console.log(error);

        }
    };

    useEffect(() => { getUsers(); }, []);

    return (
        <>
            {
                users ?
                <div>
                    {
                        users.map((user, key) => {
                            return (
                                <p key={ key }>{ JSON.stringify(user) }</p>
                            )
                        })
                    }
                </div>
                :
                <></>
            }

            {
                isLoading ?
                <p>Loading</p>
                :
                <p onClick={ createUser }>Add User</p>
            }
        </>
    )
};
export default Test;