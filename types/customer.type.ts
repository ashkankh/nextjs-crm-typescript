import React, { Dispatch, SetStateAction } from "react";
import { ProductsType } from "./form.type";

export type CustomerType = {
    _id: string
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    date: string;
    products: ProductsType[];
    createdAt: string;
    updateAt: string;
}

export type CustomerProps = {
    customer: CustomerType,
    customersData: CustomerType[],
    setCustomersData: Dispatch<SetStateAction<CustomerType[]>>
}