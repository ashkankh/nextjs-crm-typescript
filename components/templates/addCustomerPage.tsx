import React, { useState } from 'react'
import Form from '../modules/form'
import { CustomerForm } from '@/types/form.type'

function AddCustomerPage() {
    const [form, setForm] = useState<CustomerForm>({
        name: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        postalCode: "",
        date: "",
        products: [],
    })

    return (
        <>
            <div>Add Customer Page</div>
            <Form form={form} setForm={setForm} />
        </>
    )
}

export default AddCustomerPage