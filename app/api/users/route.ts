import { connectToDatabase } from "../../../lib/mongo/index.js";

export async function GET(request: Request) {
    const { db } = await connectToDatabase();

    const data = await db.collection("Users").find({}).limit(20).toArray();

    return new Response(JSON.stringify(data))
  }
  