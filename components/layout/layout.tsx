import React from 'react'
import { LayoutProps } from '@/types/layout.type'
import Link from 'next/link'
import { AtSymbolIcon, UserPlusIcon } from '@heroicons/react/24/outline'

function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen ">
            <header>
                <div className='flex flex-row justify-around items-center bg-slate-900  w-full h-14'>
                    <Link className='flex text-2xl text-green-400' href="/">NextJS CRM</Link>
                    <Link href="/add-customer" className='flex flex-row gap-2 justify-center items-center text-black bg-green-300 px-3 py-1 rounded-md hover:cursor-pointer '>
                        <UserPlusIcon className='w-5' color='#2f2f2' />
                        <h2 className=''> Add Customer</h2>
                    </Link>
                </div>
            </header >

            <main className="flex-grow flex bg-gray-700 text-white">
                <div className="max-w-7xl w-full mx-auto p-4">
                    {children}
                </div>
            </main>

            <footer>
                <div className='flex flex-row justify-center items-center bg-slate-900 w-full md:h-20'>
                    <div className='flex flex-col md:flex-row gap-2 text-green-100 text-lg items-center justify-center'>
                        <div className='flex flex-row justify-center gap-2'>
                            <h3 >Design by </h3>
                            <a href='https://khodayarkhani.ir' className='text-blue-300 text-xl'>Ashkan</a>
                        </div>
                        <div className='flex text-sm md:text-lg justify-center'>
                            <h3>CRM project With NextJS | Tailwind | Typescript</h3>
                        </div>
                    </div>
                </div>
            </footer>
        </div >
    )
}

export default Layout