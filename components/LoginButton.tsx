"use client";
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, signInWithPopup, signOut, UserCredential } from "firebase/auth";
import { getAuth } from "firebase/auth";

type LoginButtonProps = {
  firebaseConfig: {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
  };
};

export default function LoginButton({ firebaseConfig }: LoginButtonProps) {
  const handleLogin = async () => {
    initializeApp(firebaseConfig);
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    return result;
  };

  const handleLogout = async () => {
    const auth = getAuth();
    await signOut(auth);
  };

  return (
    <div>
      <button className="p-4 bg-red-500" onClick={handleLogin}>
        ログイン
      </button>
      <button className="p-4 bg-blue-500" onClick={handleLogout}>
        ログアウト
      </button>
    </div>
  );
}
