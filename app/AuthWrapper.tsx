"use client";

import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { saveUserData } from "../lib/auth";

export default function AuthWrapper({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        saveUserData(user);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return <>{children}</>;
}
