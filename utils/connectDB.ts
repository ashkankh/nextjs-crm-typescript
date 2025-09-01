import mongoose from "mongoose"

export default async function connectDB() {
    const uri = process.env.MONGO_URI;
    if (!uri) {
        throw new Error("MONGO_URI not defined in environment variables");
    }
    if (mongoose.connections[0].readyState) return
    await mongoose.connect(uri);
    console.log("Connected to DB")
}