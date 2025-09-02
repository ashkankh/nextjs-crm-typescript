import HomePage from "@/components/templates/homePage";
import Customer from "@/models/customer";
import { CustomerForm } from "@/types/form.type";
import connectDB from "@/utils/connectDB"
import { notFound } from "next/navigation"

function Index(customers: CustomerForm[]) {
  console.log(customers)
  return (
    <>
      <HomePage />
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