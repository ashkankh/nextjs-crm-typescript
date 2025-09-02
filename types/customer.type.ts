import { productsType } from "./form.type";

export type CustomerType = {
    _id: string
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    date: string;
    products: productsType[];
    createdAt: string;
    updateAt: string;
}