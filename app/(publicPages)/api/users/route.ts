import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";

const dataBaseName : string = "AuthTest";
const collectionName : string = "Users";

const GET : (request : NextRequest) => Promise<NextResponse> = async (request) => {
    try {
        const { client } = await connectToDatabase();
        const dataBase = await client.db(dataBaseName);
        const data = await dataBase.collection(collectionName).find({}).limit(10).toArray();

        return new NextResponse(JSON.stringify(data));
        
    } catch(error) {
        return new NextResponse(JSON.stringify(error));

    }
};

const POST : (request : NextRequest) => Promise<NextResponse> = async (request) => {
    const { client } = await connectToDatabase();
    const dataBase = await client.db(dataBaseName);
    const data = await request.json();
    const repsonse = await dataBase.collection(collectionName)
        .insertOne({
            name : data.name,
            email : data.email,
            password : data.password,
            permissions : data.permissions
        });

    return new NextResponse(JSON.stringify(repsonse));
};
  
export { GET, POST };