import React from "react";
import Auth from "layouts/Auth.js";
import { useRouter } from "next/router";

const Confirm = () => {
  const router = useRouter();
  console.log(router.query);
  return (
    <div className="max-w-xl mx-auto text-gray-900">
      <div className="container mx-auto px-4 my-4 py-1">
        <p className="text-center">
          {router.query.email}に確認メール送信致しました。
        </p>
      </div>
    </div>
  );
};

Confirm.layout = Auth;
export default Confirm;
