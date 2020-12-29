import React from "react";
import Head from "next/head";
import Nav from "../components/nav";
import { useRouter } from "next/router";

const Confirm = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="text-sans">
      <Head>
        <title>timeshot</title>
      </Head>

      <Nav />
      <div className="container mx-auto px-4 my-4 py-1">
        <p className="text-center">
          {router.query.email}に確認メール送信致しました。
        </p>
      </div>
    </div>
  );
};

export default Confirm;
