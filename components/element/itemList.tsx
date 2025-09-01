import { FormProps } from '@/types/form.type'
import React from 'react'
import FormInput from './formInput'

type ChangeHandlerType = {
    e: React.ChangeEvent<HTMLInputElement>;
    index: number;
};

type deleteHandlerType = {
    index: number
}

function ItemList({ form, setForm }: FormProps) {

    const { products } = form

    const changeHandler = ({ e, index }: ChangeHandlerType) => {
        const { name, value } = e.target;
        const newProducts: any = [...products];
        newProducts[index][name] = value;
        setForm({ ...form, products: newProducts })
    }

    const deleteHandler = (index: Number) => {
        const newProducts: any = [...products];
        newProducts.splice(index, 1)
        setForm({ ...form, products: newProducts })
    }

    const addHandler = () => {
        setForm({
            ...form,
            products: [...products, { name: "", price: "", qty: "" }]
        })
    }

    return (
        <>
            <div className='p-4 border-2 border-gray-400 rounded-2xl bg-gray-900 my-4'>
                <h1 className='flex justify-center text-xl'>Purchased Products</h1>
                {products.map((product, index) => (
                    <div className='p-4 px-8 flex flex-col border-1 border-gray-300 bg-gray-950 rounded-lg my-2'>
                        <div className='w-full'><FormInput label='Product Name' name='name' onChange={(e) => changeHandler({ e, index })} type='text' value={product.name} />
                            <div className='flex flex-row justify-between gap-1'>
                                <FormInput label='Product price' name='price' onChange={(e) => changeHandler({ e, index })} type='text' value={product.price} />
                                <FormInput label='Product quantity' name='qty' onChange={(e) => changeHandler({ e, index })} type='number' value={product.qty} />
                            </div>
                            <button className='flex felx-row w-f justify-center py-1 px-4 border-1 w-full font-semibold text-red-500 rounded-sm hover:cursor-pointer' onClick={(e) => deleteHandler(index)}>Remove</button>
                        </div>
                    </div>
                ))}
                <button className='flex felx-row w-f justify-center py-1 px-4 border-1 w-full font-semibold text-black rounded-sm hover:cursor-pointer my-2 bg-green-300' onClick={addHandler}>Add Item</button>
            </div>
        </>
    )
}

export default ItemList