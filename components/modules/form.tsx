import { CustomerForm, FormProps } from '@/types/form.type'
import React from 'react'
import FormInput from '../element/formInput'

function Form({ form, setForm }: FormProps) {
    return (
        <>
            <div>Form</div>
            {/* <FormInput name='Name' label='Name' type='string' value='mewo' onChange={e => e.target.value} /> */}
        </>
    )
}

export default Form