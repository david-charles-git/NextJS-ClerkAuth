import { connectToDatabase } from "@/lib/mongo";
import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { User } from "@/lib/types/user";

const dataBaseName : string = "AuthTest";
const collectionName : string = "Users";

const GET : (request : NextRequest, { params } : { params : { _id : string } }) => Promise<NextResponse> = async (request, { params }) => {
    const { client } = await connectToDatabase();
    const dataBase = await client.db(dataBaseName);
    const _id : string = params._id;
    const objectID : ObjectId = new ObjectId(_id);
    const data : User = await dataBase.collection(collectionName).findOne({ _id :  objectID });

    return new NextResponse(JSON.stringify(data));
};

const DELETE : (request : NextRequest, { params } : { params : { _id : string } }) => Promise<NextResponse> = async (request, { params }) => {
    const { client } = await connectToDatabase();
    const dataBase = await client.db(dataBaseName);
    const _id : string = params._id;
    const objectID : ObjectId = new ObjectId(_id);
    const data = await dataBase.collection(collectionName).deleteOne({ _id : objectID });

    return new NextResponse(JSON.stringify(data));
};

const PATCH : (request : NextRequest, { params } : { params : { _id : string } }) => Promise<NextResponse> = async (request, { params }) => {
    const { client } = await connectToDatabase();
    const dataBase = await client.db(dataBaseName);
    const _id : string = params._id;
    const body : User = await request.json();
    const update = [ { $set : { name : body.name, email : body.email, password : body.password, permissions : body.permissions } }];
    const objectID : ObjectId = new ObjectId(_id);
    const data = await dataBase.collection(collectionName).updateOne({ _id : objectID }, update);

    return new NextResponse(JSON.stringify(data));
};
  
export { GET, DELETE, PATCH }; 