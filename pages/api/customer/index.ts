import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";
import { NextApiRequest, NextApiResponse } from "next";

interface MongoError extends Error {
    code?: number;
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    try {
        await connectDB();
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: "failed", message: "Error in connecting to DB" })
    }

    if (req.method === "POST") {
        const data = req.body.data

        if (!data.name || !data.lastName || !data.email) return res.status(400).json({ status: "failed", message: "Invalid Data" })
        try {
            const existing = await Customer.findOne({ email: data.email });
            if (existing) {
                return res.status(400).json({ status: "failed", message: "User already exists" });
            }
            const customer = await Customer.create(data);
            res.status(201).json({ status: "success", message: "Data Created", data: customer })
        } catch (err: unknown) {
            const error = err as MongoError;
            if (error.code === 11000) {
                return res.status(400).json({ status: "failed", message: "Email already exists" });
            }
            return res.status(500).json({ status: "failed", message: "Error in stroing Data in DB" })
        }
    }
}