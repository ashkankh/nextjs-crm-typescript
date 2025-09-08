import { CustomerForm, FormProps } from '@/types/form.type'
import React from 'react'
import FormInput from '../element/formInput'
import ItemList from '../element/itemList'


function Form({ form, setForm, editable }: FormProps) {

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value })
    }

    return (
        <>
            <FormInput label='Name' name='name' type='text' value={form.name} onChange={(e) => changeHandler(e)} />
            <FormInput label='Last Name' name='lastName' type='text' value={form.lastName} onChange={(e) => changeHandler(e)} />
            <FormInput label='Email' name='email' type='text' value={form.email} onChange={(e) => changeHandler(e)}  disabled={editable} readonly={editable} />
            <FormInput label='Phone' name='phone' type='text' value={form.phone} onChange={(e) => changeHandler(e)} />
            <FormInput label='Address' name='address' type='text' value={form.address} onChange={(e) => changeHandler(e)} />
            <FormInput label='Postal Code' name='postalCode' type='text' value={form.postalCode} onChange={(e) => changeHandler(e)} />
            <FormInput label='Date' name='date' type='date' value={form.date} onChange={(e) => changeHandler(e)} />
            <ItemList form={form} setForm={setForm} />
        </>
    )
}

export default Form