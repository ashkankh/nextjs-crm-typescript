import React, { useState } from 'react'
import Form from '../modules/form'
import { CustomerForm } from '@/types/form.type'
import { useRouter } from 'next/router';

function AddCustomerPage() {

    const router = useRouter()

    function cancelHandler() {
        setForm({
            name: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            postalCode: "",
            date: "",
            products: [],
        })
        router.push("/")
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

    async function saveHandler() {
        const res = await fetch("/api/customer", {
            method: "POST",
            body: JSON.stringify({ data: form }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await res.json()
        console.log(data)
        data.status === "success" && router.push("/")
    }

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