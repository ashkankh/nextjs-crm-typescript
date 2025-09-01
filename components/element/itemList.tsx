import { FormProps } from '@/types/form.type'
import React from 'react'
import FormInput from './formInput'

function ItemList({ form, setForm }: FormProps) {

    const changeHandler = () => {

    }

    const deleteHandler = () => {

    }
    
    const addHandler = () => {
        setForm({
            ...form,
            products: [...products, { name: "", price: "", qty: "" }]
        })
        console.log(products)
    }

    const { products } = form
    return (
        <>
            <div className='p-4 border-2 border-gray-400 rounded-2xl bg-gray-900 my-4'>
                <h1 className='flex justify-center text-xl'>Purchased Products</h1>
                {products.map((product) => (
                    <div className='p-4 px-8 flex flex-col border-1 border-gray-300 bg-gray-950 rounded-lg my-2'>
                        <div className='w-full'><FormInput label='Product Name' name='name' onChange={changeHandler} type='text' value={product.name} />
                            <div className='flex flex-row justify-between gap-1'>
                                <FormInput label='Product price' name='price' onChange={changeHandler} type='text' value={product.price} />
                                <FormInput label='Product quantity' name='qty' onChange={changeHandler} type='number' value={product.qty} />
                            </div>
                            <button className='flex felx-row w-f justify-center py-1 px-4 border-1 w-full font-semibold text-red-500 rounded-sm hover:cursor-pointer' onClick={deleteHandler}>Remove</button>
                        </div>
                    </div>

                ))}
                <button className='flex felx-row w-f justify-center py-1 px-4 border-1 w-full font-semibold text-black rounded-sm hover:cursor-pointer my-2 bg-green-300' onClick={addHandler}>Add Item</button>
            </div>
        </>
    )
}

export default ItemList