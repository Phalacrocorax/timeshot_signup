import { useState } from "react";
import { useRouter } from "next/router";

// layout for this page
import Auth from "layouts/Auth.js";

const Login = () => {
  const router = useRouter();
  const [sendbutton, setSendbutton] = useState("送信");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    router.push({
      pathname: "/admin/dashboard",
      query: { email: email }
    });
  };
  return (
    <div className="w-full text-gray-900">
      <h1 className="m-0 w-full pt-20 leading-tight text-5xl text-center font-bold">
        TimeShot ログイン
      </h1>
      <div className="container mx-auto px-4 my-4 py-1">
        <form>
        <label className="text-gray-600 font-light">メールアドレス</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Enter your input here"
              className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
            />
            <label className="text-gray-600 font-light">パスワード</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Enter your input here"
              className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
            />
            <button
              className="w-full py-3 mt-6 font-medium bg-blue-600 hover:bg-blue-700 rounded duration-300 text-white shadow px-6 py-1"
              type="submit"
              onClick={login}
            >
              {sendbutton}
            </button>
        </form>
      </div>
    </div>
  );
};

Login.layout = Auth;

export default Login;
