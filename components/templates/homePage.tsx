
import { CustomerType } from '@/types/customer.type'
import React, { useState } from 'react'
import Customer from '../modules/customer'



function HomePage({ customers }: { customers: CustomerType[] }) {
    const [customersData, setCustomersData] = useState<CustomerType[]>(customers);
    return (
        <>
            {customersData?.map((customer) => (
                <Customer customer={customer} key={customer._id} customersData={customersData} setCustomersData={setCustomersData} />
            ))}

        </>
    )
}

export default HomePage