import { MongoClient } from "mongodb";

const { MONGODB_URI, MONGODB_DB } = process.env;

if (!MONGODB_URI) { throw Error("Please define the MONGODB_URI environment variable in .env.local"); }

if (!MONGODB_DB) { throw Error("Please define the MONGODB_DB enrironment variable in the .env.local"); }

var cached = global.mongo;

if (!cached) { cached = global.mongo = { conn: null, promise: null }; }

export async function connectToDatabase() {
    if (cached.conn) { return cached.conn; }

    if (!cached.promise) {
        const options = {
            useNewUrlParser : true,
            useUnifiedTopology : true
        };

        cached.promise = MongoClient.connect(MONGODB_URI, options).then((client) => {
            return { client, db : client.db(MONGODB_DB) }
        });
    }

    cached.conn = await cached.promise;

    return cached.conn;
}