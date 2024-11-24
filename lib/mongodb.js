const { MongoClient } = require("mongodb");

const uri = process.env.MONGODB_URI || ""; // Your MongoDB URI from environment variables
if (!uri) throw new Error("MONGODB_URI environment variable is missing");

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  // Reuse the client in development mode to avoid creating multiple connections
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // For production, always create a new client
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

module.exports = clientPromise;
