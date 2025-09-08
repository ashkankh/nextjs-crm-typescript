import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB";
import { NextApiResponse, NextApiRequest } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        connectDB();
    } catch (err) {
        console.log(err)
        return res.status(500).json({ status: "failed", message: "Error in connecting to DataBase" })
    }
    if (req.method === "DELETE") {
        const id = req.query.customerID;
        if (!id) {
            return res.status(400).json({ status: "failed", message: "customerID is required" });
        }
        try {
            await Customer.deleteOne({ _id: id });
            res.status(200).json({ status: "success", message: "Delete Record successfully", id })
        } catch (err) {
            res.status(500).json({ status: "failed", message: "Error in deleting Data from DB" })
        }

    } else if (req.method === "GET") {
        const id = req.query.customerID;
        if (!id) {
            return res.status(400).json({ status: "failed", message: "customerID is required" })
        } try {
            const customer = await Customer.findById(id)
            return res.status(200).json({ status: "success", customer });
        } catch (err) {
            console.log(err)
            res.status(500).json({ status: "failed", message: "Error in getting Data from DB" })
        }
    } else if (req.method === "PUT") {
        const id = req.query.customerID;
        const updateData = req.body;
        
        delete updateData.email;

        if (!id) {
            return res.status(400).json({ status: "failed", message: "customerID is required" })
        } try {
            const updatedCustomer = await Customer.findByIdAndUpdate(
                id,
                { $set: req.body },
                { new: true, runValidators: true }
            );
            return res.status(200).json({ status: "success", updatedCustomer });
        } catch (err) {
            console.log(err)
            res.status(500).json({ status: "failed", message: "Error in getting Data from DB" })
        }
    }
    else {
        res.status(405).json({ status: "failed", message: "Method not allowed" });
    }
}