import PaymentModal from "@/components/paymentModal";
import TableComp from "@/components/tables";
import Head from "next/head";

export default function UserPayment() {
  return (
    <>
      <Head>
        <title>Admin</title>
        <meta name="description" content="Razorpay-UI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="container flex flex-col items-center justify-center gap-12 px-4 py-6">
          <h1 className="text-6xl">Brand Name</h1>
        </div>
        <PaymentModal />
        <TableComp />
      </main>
    </>
  );
}
