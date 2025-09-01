import React, { useState } from 'react'
import Form from '../modules/form'
import { CustomerForm } from '@/types/form.type'

function AddCustomerPage() {

    function saveHandler() {
        //   TODO  
    }

    function cancelHandler() {
        //   TODO  

    }

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
            <div className='flex flex-row justify-around'>
                <button className='flex felx-row justify-center py-1 px-4 border-1 font-semibold text-red-500 rounded-sm hover:cursor-pointer' onClick={cancelHandler}>Cancel</button>
                <button className='flex felx-row justify-center py-1 px-4 border-1 font-semibold text-green-500 rounded-sm hover:cursor-pointer' onClick={saveHandler}>Save</button>
            </div>
        </>
    )
}

export default AddCustomerPage