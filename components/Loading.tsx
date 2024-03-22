import { noto_sans_jp } from "@/app/fonts";

const Loading = () => {
  return (
    <>
       <div className=" flex justify-center items-center h-screen">
          <p className={`${noto_sans_jp.className} text-4xl font-semibold`}>Loading.....</p>
          {/* 厳密には認証状態の確認をしている */}
        </div>
    </>
  );
};

export default Loading;
