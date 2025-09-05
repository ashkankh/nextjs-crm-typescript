import { CustomerProps, CustomerType } from '@/types/customer.type'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'


function Customer({ customer, customersData, setCustomersData }: CustomerProps) {
    const deleteHandler = async () => {
        const res = await fetch(`/api/customer/${customer._id}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if (data.status === "success") {
            setCustomersData(prev => prev.filter(c => c._id !== data.id));
        }
    }

    return (
        <div className='flex flex-col py-1 px-1 bg-gray-800 text-md my-2 rounded-lg'>
            <div className='flex flex-col md:flex-row justify-between items-center'>
                <div className='flex flex-col md:flex-row gap-4 px-2 py-2 text-sky-200 justify-left md:text-left text-center'>
                    <div className='flex felx-row w-fit md:w-62 overflow-x-auto  whitespace-nowrap'>{customer.name} {customer.lastName}</div>
                    <div>{customer.email}</div>
                </div>
                <div className='flex flex-row gap-1' >
                    <button className='flex felx-row justify-center text-sm py-1 px-2 border-1 text-red-500 rounded-sm hover:cursor-pointer' onClick={deleteHandler}>Delete</button>
                    <button className='flex felx-row justify-center text-sm py-1 px-2 border-1 text-green-500 rounded-sm hover:cursor-pointer'><Link href={`customer/edit/${customer._id}`}>Edit</Link></button>
                    <button className='flex felx-row justify-center text-sm py-1 px-2 border-1 text-gray-200 rounded-sm hover:cursor-pointer'><Link href={`/customer/${customer._id}`}>Details</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Customer