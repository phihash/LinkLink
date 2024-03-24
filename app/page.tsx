"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import Header from "@/components/Header";
import { noto_sans_jp } from "@/app/fonts";


const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>ローディング中</div>;
  }
  return (
    <div>
      <Header></Header>
      {user ? (
        <>
        <div className="w-11/12 pt-10 text-slate-700 mx-auto">
          <h1 className={`${noto_sans_jp.className} text-2xl font-semibold`}>用意された質問</h1>
        <h2>Welcome, {user.displayName}!</h2>

        </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
