import Customer from "@/models/customer";
import { CustomerForm } from "@/types/form.type";
import connectDB from "@/utils/connectDB"
import { notFound } from "next/navigation"

function Index(customers: CustomerForm[]) {
  console.log(customers)
  return (
    <>
      <h1 className="flex justify-center">CRM Project | NextjS + Tailwind + TypeScript</h1>
    </>
  )
}


export async function getServerSideProps() {
  try {
    await connectDB();
    const customers = await Customer.find();
    return {
      props: {
        customers: JSON.parse(JSON.stringify(customers)),
      }
    }
  } catch (err) {
    return {
      notFound: true,
    }
  }
}

export default Index