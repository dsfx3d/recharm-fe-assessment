import {CreateRequestMainComponent} from "@/components/CreateRequestMainComponent";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Create New Request</title>
      </Head>
      <CreateRequestMainComponent />
    </>
  );
}
