import { CustomerForm, FormProps } from '@/types/form.type'
import React from 'react'
import FormInput from '../element/formInput'
import ItemList from '../element/itemList'



// export type CustomerForm = {
//     date: string;
//     products: productsType[];
// }


function Form({ form, setForm }: FormProps) {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    return (
        <>
            <FormInput label='Name' name='name' type='name' value={form.name} onChange={(e) => changeHandler(e)} />
            <FormInput label='Last Name' name='lastName' type='name' value={form.lastName} onChange={(e) => changeHandler(e)} />
            <FormInput label='Email' name='email' type='name' value={form.email} onChange={(e) => changeHandler(e)} />
            <FormInput label='Phone' name='phone' type='name' value={form.phone} onChange={(e) => changeHandler(e)} />
            <FormInput label='Address' name='address' type='name' value={form.address} onChange={(e) => changeHandler(e)} />
            <FormInput label='Postal Code' name='postalCode' type='name' value={form.postalCode} onChange={(e) => changeHandler(e)} />
            <FormInput label='Date' name='date' type='name' value={form.date} onChange={(e) => changeHandler(e)} />

            <ItemList form={form} setForm={setForm} />
        </>
    )
}

export default Form