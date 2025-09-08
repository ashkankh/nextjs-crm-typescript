import { Schema, model, models } from "mongoose";
import { unique } from "next/dist/build/utils";
import { type } from "os";

const customerSchema = new Schema({
    name: {
        type: String,
        required: true,
        minLength: 1
    },
    lastName: {
        type: String,
        required: true,
        minLength: 1,
    },
    email: {
        type: String,
        unique :true,
        required: true,
        minLength: 1,

    },
    phone: String,
    address: String,
    postalCode: String,
    date: Date,
    products: {
        type: Array,
        default: [],
    },
    createdAt: {
        type: Date,
        default: () => Date.now(),
        immutable: true
    },
    updateAt: {
        type: Date,
        default: () => Date.now()
    }
});


const Customer = models.Customer || model("Customer", customerSchema)

export default Customer;