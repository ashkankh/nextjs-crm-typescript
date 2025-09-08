import { CustomerForm} from "@/types/form.type";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Form from "../modules/form";

function CustomerEditPage() {

  const updateHandler = async () => {
    const res = await fetch(`/api/customer/${customerID}`, {
      method: "PUT",
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' }
    })
    const data = await res.json()
    console.log(data)
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


  const router = useRouter();
  const {
    query: { customerID },
    isReady,
  } = router

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)

    if (isReady) {
      console.log(customerID)
      fetch(`/api/customer/${customerID}`)
        .then((res) => res.json())
        .then((data) => {
          const getform: CustomerForm = {
            name: data.customer.name,
            address: data.customer.address,
            date: data.customer.date
              ? new Date(data.customer.date).toISOString().split("T")[0] //JUST yyyy-mm-dd
              : "",
            email: data.customer.email,
            lastName: data.customer.lastName,
            phone: data.customer.phone,
            postalCode: data.customer.postalCode,
            products: data.customer.products
          }
          setForm(getform)
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

  if (!form) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-400 text-xl">Customer not found!</p>
      </div>
    )
  }

  return (
    <>
      <div>Add Customer Page</div>
      <Form form={form} setForm={setForm} editable={true} />
      <div className='flex flex-row justify-around'>
        {/* <button className='flex felx-row justify-center py-1 px-4 border-1 font-semibold text-red-500 rounded-sm hover:cursor-pointer' onClick={cancelHandler}>Cancel</button> */}
        <button className='flex felx-row justify-center py-1 px-4 border-1 font-semibold text-green-500 rounded-sm hover:cursor-pointer' onClick={updateHandler}>Update</button>
      </div>
    </>
  )

}

export default CustomerEditPage