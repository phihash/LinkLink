"use client";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import Header from "@/components/Header";

const Home = () => {
  const [user, loading] = useAuthState(auth);

  const handleLogout = async () => {
    await auth.signOut();
  };

  if (loading) {
    return <div>ローディング中</div>;
  }

  return (
    <div>
      <Header></Header>
      {user ? (
        <>
          <h1>Welcome, {user.displayName}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
        </>
      )}
    </div>
  );
};

export default Home;
