
import { CustomerType } from '@/types/customer.type'
import React from 'react'
import Customer from '../modules/customer'



function HomePage({ customers }: { customers: CustomerType[] }) {
    return (
        <>
            {customers?.map((customer) => (
                <Customer customer={customer} key={customer._id} />
            ))}

        </>
    )
}

export default HomePage