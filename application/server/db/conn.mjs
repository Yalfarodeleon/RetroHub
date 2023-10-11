import { MongoClient } from "mongodb";
const connectionString = process.env.mongo_url || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}
let db = conn.db("site_info");
export default db;