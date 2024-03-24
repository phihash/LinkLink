"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../lib/firebase";
import GoogleLoginButton from "../../components/GoogleLoginButton";
import { lexend } from "../fonts";

const LoginPage = () => {
  const [user, loading] = useAuthState(auth);
  //   user: ログインしているユーザーの情報が入ります。ログインしていない場合はnullになります。 loading: ユーザーのログイン状態を確認中はtrue、確認が終わるとfalseになります。 error: ログイン状態の確認中にエラーが発生した場合、エラーの情報が入ります。
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user, router]);

  return (
    <div className="bg-slate-200 flex justify-center items-center h-screen">
      <div className="bg-slate-100 md:w-2/5 w-4/5 h-3/5 rounded-3xl">
        <h1
          className={`${lexend.className} text-4xl pt-16 text-center font-semibold`}
        >
          App
        </h1>
        <p
          className={`${lexend.className} text-xl pt-12 text-center text-slate-700 font-semibold`}
        >
          ログイン
        </p>
        <p
          className={`${lexend.className} text-sm md:text-base pt-4 text-center text-slate-500 font-semibold`}
        >
          こんにちは！既にアカウントをお持ちですか？
          <br />
          お使いのアカウントでログインしてください
        </p>
        {loading ? (
          <p
            className={`${lexend.className} text-base md:text-2xl pt-12 text-center text-slate-800 font-semibold`}
          >
            Loading.....
          </p>
        ) : (
          <>
            <GoogleLoginButton />
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
