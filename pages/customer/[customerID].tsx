import { CustomerType } from '@/types/customer.type'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

function CustomerDetails() {
    const router = useRouter();

    const deleteHandler = async () => {
        const res = await fetch(`/api/customer/${customerID}`, {
            method: "DELETE",
        })
        const data = await res.json()
        console.log(data)
        router.push("/")
    }

    const [customer, setCustomer] = useState<CustomerType>()
    const [loading, setLoading] = useState(true)
    const {
        query: { customerID },
        isReady,
    } = router

    useEffect(() => {
        setLoading(true)

        if (isReady) {
            console.log(customerID)
            fetch(`/api/customer/${customerID}`)
                .then((res) => res.json())
                .then((data) => {
                    setCustomer(data.customer)
                    setLoading(false)
                })
        }

    }, [isReady])

    if (loading) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-sky-300 text-xl animate-pulse">Loading...</p>
            </div>
        )
    }

    if (!customer) {
        return (
            <div className="flex justify-center items-center h-64">
                <p className="text-red-400 text-xl">Customer not found!</p>
            </div>
        )
    }

    return (
        <>
            <div className='flex flex-col bg-gray-800 rounded-lg p-4 m-2 gap-6'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <h3 className='w-full md:w-1/3'><span className='text-sky-300 '>Name :</span> {customer?.name}</h3>
                    <h3 className='w-full md:w-1/3'><span className='text-sky-300 '>Last Name :</span> {customer?.lastName}</h3>
                    <h3 className='w-full md:w-1/3'><span className='text-sky-300 '>Email :</span> {customer?.email}</h3>
                </div>
                <div className='flex flex-col md:flex-row justify-between'>
                    <h3 className='w-full md:w-1/3'><span className='text-sky-300 '>Phone :</span> {customer?.phone}</h3>
                    <h3 className='w-full md:w-1/3'><span className='text-sky-300 '>Date :</span> {customer?.date?.slice(0, 10)}</h3>
                    <h3 className='w-full md:w-1/3'><span className='text-sky-300 '>Postal Code :</span> {customer?.postalCode}</h3>
                </div>
                <div className='flex flex-row '>
                    <h3 ><span className='text-sky-300 '>Address :</span> {customer?.address}</h3>
                </div>
            </div>

            <div className='flex flex-col bg-gray-800 rounded-lg p-4 m-2 gap-6' >
                <div className='flex flex-row text-center'>
                    <h3 className='text-sky-300 w-1/4'>Name </h3>
                    <h3 className='text-sky-300 w-1/4'>Quantity </h3>
                    <h3 className='text-sky-300 w-1/4'>Price </h3>
                    <h3 className='text-sky-300 w-1/4'>Total Price </h3>
                </div>
                {customer?.products.map((product, index) => (
                    <div className='flex flex-row text-center' key={index}>
                        <h3 className='text-gray-300 w-1/4'>{product.name} </h3>
                        <h3 className='text-gray-300 w-1/4'>{product.qty}  </h3>
                        <h3 className='text-gray-300 w-1/4'>{product.price} $ </h3>
                        <h3 className='text-gray-300 w-1/4'>{Number(product.price) * Number(product.qty)} $</h3>
                    </div>
                ))}
                <div className='flex flex-row text-center'>
                    <h3 className='text-sky-300 w-1/4'> </h3>
                    <h3 className='text-sky-300 w-1/4'> </h3>
                    <h3 className='text-sky-300 text-xl w-1/2 md:w-1/5  rounded-l-lg py-2 border-1 border-r-0'>Total Price</h3>
                    <h3 className='text-sky-300 text-xl w-1/2 md:w-1/5  rounded-r-lg py-2 border-1 border-l-0'>{customer?.products.reduce(
                        (sum, p) => sum + Number(p.price) * Number(p.qty), 0)} $</h3>
                </div>

            </div >
            <div className='flex flex-row bg-gray-800 justify-around p-4 m-2 gap-6' >
                <button className='flex felx-row justify-center w-40 text-md py-1 px-2 border-1 text-red-500 rounded-sm hover:cursor-pointer' onClick={deleteHandler} >Delete</button>
                <button className='flex felx-row justify-center w-40 text-md py-1 px-2 border-1 text-green-500 rounded-sm hover:cursor-pointer'>Edit</button>

            </div >
        </>

    )
}

export default CustomerDetails