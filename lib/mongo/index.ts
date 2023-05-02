import { MongoClient } from "mongodb";

declare global { var mongo : any; }

const { MONGODB_URI, MONGODB_DB_ONE } = process.env;

if (!MONGODB_URI) { throw new Error("Please define the MONGODC_URI in .env.local"); }

if (!MONGODB_DB_ONE) { throw new Error("Please define the MONGODB_DB  in .env.local"); }

let cachedConnection : any = global.mongo;

if (!cachedConnection) { cachedConnection = global.mongo = { conn : null, promise : null }; }

const connectToDatabase : () => Promise<any> = async () => {
    if (cachedConnection.conn) return cachedConnection.conn;

    if (!cachedConnection.promise) {
        const options : any = {
            useNewUrlParser : true,
            useUnifiedTopology : true
        };

        cachedConnection.promise = await MongoClient.connect(MONGODB_URI, options).then((client) => {
            return {
                client,
                db_one: client.db(MONGODB_DB_ONE)
            }
        });
    }

    cachedConnection.conn = await cachedConnection.promise;
};

export { connectToDatabase };