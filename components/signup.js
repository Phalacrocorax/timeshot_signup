import { createClient } from "@supabase/supabase-js";
import { useState } from "react";
import { useRouter } from "next/router";

const SignUp = () => {
  const [sendbutton, setSendbutton] = useState("送信");
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [orgName, setOrgName] = useState("");
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_KEY;
  const supabase = createClient(supabaseUrl, supabaseKey);

  const googleSignup = async (e) => {
    let { user, error } = await supabase.auth.signIn({
      provider: "google"
    });
  };
  const githubSignup = async (e) => {
    let { user, error } = await supabase.auth.signIn({
      provider: "github"
    });
  };
  // Create Supabase User
  const subscribe = async (e) => {
    e.preventDefault();
    setSendbutton("送信中...");
    try {
      let { user, error } = await supabase.auth.signUp({
        email: email,
        password: password
      });
      if (error) {
        alert("Error");
        console.log(error);
        setSendbutton("送信");
        return false;
      }
      createAccount(user);
    } catch (err) {
      setSendbutton("送信");
      alert(err);
    }
  };
  // Create Acount
  const createAccount = async (user) => {
    let { account, error } = await supabase.from("account").insert([
      {
        user_id: "64805884-ceac-4569-ae1e-d1a28ca6d351",
        organization_name: orgName
      }
    ]);
    if (error) {
      alert("Error");
      setSendbutton("送信");
      console.log(error);
    } else {
      // account N/A
      router.push({
        pathname: "/confirm",
        query: { email: email }
      });
    }
  };
  return (
    <div className="w-full text-gray-900">
      <h1 className="m-0 w-full pt-20 leading-tight text-5xl text-center font-bold">
        会員登録
      </h1>
      <div className="container mx-auto px-4 my-4 py-1">
        <p className="text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 mx-1"
            onClick={googleSignup}
          >
            Signup with Google
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 mx-1"
            onClick={githubSignup}
          >
            Signup with Github
          </button>
        </p>
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
          <label className="text-gray-600 font-light">組織名</label>
          <input
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
            type="text"
            placeholder="Enter your input here"
            className="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-green-500"
          />
          <button
            className="bg-blue-600 hover:bg-blue-700 rounded duration-300 text-white shadow px-6 py-1"
            type="submit"
            onClick={subscribe}
          >
            {sendbutton}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
