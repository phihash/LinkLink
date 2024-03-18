"use client";
import { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function AuthButtons() {
  const [user, setUser] = useState<UserCredential | null>(null);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <div>
      {user ? (
        <button className="p-4 bg-blue-500" onClick={handleLogout}>
          ようこそ {user.user?.displayName}さん - ログアウト
        </button>
      ) : (
        <button className="p-4 bg-red-500" onClick={handleLogin}>
          ログイン
        </button>
      )}
    </div>
  );
}
