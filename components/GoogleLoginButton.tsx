import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import { noto_sans_jp } from "../app/fonts";
import { FcGoogle } from "react-icons/fc";

const GoogleLoginButton = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleLogin = async () => {
    await signInWithGoogle();
  };

  return (
    <button
      className={`${noto_sans_jp.className} font-semibold text-slate-800 border-solid  border-2 border-slate-300 rounded-xl py-3 md:px-24 px-6  md:text-lg text-base flex mx-auto mt-8 items-center gap-4`}
      onClick={handleLogin}
      disabled={loading}
    >
      {loading ? (
        <div className="text-slate-400">ログイン処理を行なってください</div>
      ) : (
        <>
          <FcGoogle size={22} /> Googleでログインする
        </>
      )}
    </button>
  );
};

export default GoogleLoginButton;
