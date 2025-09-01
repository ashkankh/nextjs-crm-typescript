import { CustomerForm, FormProps } from '@/types/form.type'
import React from 'react'
import FormInput from '../element/formInput'
import ItemList from '../element/itemList'

function Form({ form, setForm }: FormProps) {
    return (
        <>
            <div>Form</div>
            <FormInput name='Name' label='Name' type='string' value='mewo' onChange={e => e.target.value} />
            <ItemList form={form} setForm={setForm} />
        </>
    )
}

export default Form