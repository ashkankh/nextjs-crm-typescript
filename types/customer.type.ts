import React, { Dispatch, SetStateAction } from "react";
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

export type CustomerProps = {
    customer: CustomerType,
    customersData: CustomerType[],
    setCustomersData: Dispatch<SetStateAction<CustomerType[]>>
}