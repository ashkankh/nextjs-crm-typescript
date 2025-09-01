import { Dispatch, SetStateAction } from "react";

export type CustomerForm = {
    name: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    postalCode: string;
    date: string;
    products: string[];
}

export type FormProps = {
    form: CustomerForm;
    setForm: Dispatch<SetStateAction<CustomerForm>>;
}

export type FormInputType = {
    name: string;
    label: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}