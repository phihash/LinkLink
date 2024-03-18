// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { signInWithPopup, GoogleAuthProvider, User } from "firebase/auth";
import { auth } from "../lib/firebase";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleGoogleLogin = async () => {
    setLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
      // ログイン成功後の処理を記述
    } catch (error) {
      console.error("Googleログインエラー:", error);
      // エラー処理を記述
    }
    setLoading(false);
  };

  return (
    <div>
      {user ? (
        <div>
          <p className="text-xl">ようこそ、{user.displayName}さん!</p>
          <button className="bg-amber-400 p-4 rounded-xl" onClick={() => auth.signOut()}>ログアウト</button>
        </div>
      ) : (
        <button className="bg-red-400 p-4 rounded-xl" onClick={handleGoogleLogin} disabled={loading}>
          {loading ? "ログイン中..." : "Googleでログイン"}
        </button>
      )}
    </div>
  );
}
