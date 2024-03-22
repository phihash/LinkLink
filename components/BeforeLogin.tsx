import { noto_sans_jp } from "@/app/fonts";

const BeforeLogin = () => {
  //ゲストビュー
  return (
    <>
       <div className="w-11/12 pt-10 text-slate-700 mx-auto">
          <h1 className={`${noto_sans_jp.className} text-2xl font-semibold`}>ログイン前</h1>
        </div>
    </>
  );
};

export default BeforeLogin;
