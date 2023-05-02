import { connectToDatabase } from "@/lib/mongo";

const dataBaseName : string = "sample_airbnb";
const collectionName : string = "listingsAndReviews";

const GET : (request : Request) => Promise<Response> = async (request) => {
    const { client } = await connectToDatabase();
    const dataBase = await client.db(dataBaseName);
    const data = await dataBase.collection(collectionName).find({}).limit(10).toArray();

    return new Response(JSON.stringify(data));
};
  
export { GET };