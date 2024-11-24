import { MongoClient } from 'mongodb';
import clientPromise from '../../../lib/mongodb';  // Ensure this is the correct path


export async function GET() {
  try {
    const client = await clientPromise; // Await the MongoClient promise
    const db = client.db("student-portfolio"); // Access your database
    const collection = db.collection("projects"); // Use your collection

    const projects = await collection.find({}).toArray(); // Fetch all projects from the collection
    return new Response(JSON.stringify(projects), { status: 200 });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    return new Response("Error connecting to MongoDB", { status: 500 });
  }
}
