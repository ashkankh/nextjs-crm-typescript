import HomePage from "@/components/templates/homePage";
import Customer from "@/models/customer";
import connectDB from "@/utils/connectDB"
import { notFound } from "next/navigation"
import { CustomerType } from "@/types/customer.type";

type Props = {
  customers: CustomerType[]
}

function Index({ customers }: Props) {
  console.log(customers)
  return (
    <>
      <HomePage customers={customers} />
    </>
  )
}

export default Index

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

