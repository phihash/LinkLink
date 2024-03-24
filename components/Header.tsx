import React from "react";
import Link from "next/link";
import { noto_sans_jp } from "@/app/fonts";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <div className="bg-slate-100 py-4 md:py-6 flex items-center justify-between">
      {user ? (
        <>
          <h1 className="text-2xl md:text-3xl font-bold pl-8">
            <Link href="/">App</Link>
          </h1>
          <button
            onClick={handleLogout}
            className={`${noto_sans_jp.className} font-semibold mr-6 bg-sky-400 md:py-3 md:px-8 px-6 py-3 md:text-base text-sm  rounded-xl text-white `}
          >
            ログアウト
          </button>
        </>
      ) : (
        <>
          <h1 className="text-2xl md:text-3xl font-bold pl-8">
            <Link href="/">App</Link>
          </h1>
          <Link href="/login" rel="noopener noreferrer" target="_blank">
            <button
              className={`${noto_sans_jp.className} font-semibold mr-6 bg-sky-400 md:py-3 md:px-8 px-6 py-3 md:text-base text-sm  rounded-xl text-white `}
            >
              ログイン
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default Header;
