"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import Header from "@/components/Header";
import { noto_sans_jp } from "@/app/fonts";
import BeforeLogin from "@/components/BeforeLogin";
import Loading from "@/components/Loading";
import CategoryItem from "@/components/CategoryItem";


const Home = () => {
  const [user, loading] = useAuthState(auth);
  const categories = ["業務ミス","コミュニケーション","ビジネスマナー","自己管理","入社後","その他",]
  if (loading) {
    return <Loading/>;
  }
  return (
    <div>
      <Header></Header>
      {user ? (
        <>
        <div className="w-5/6 pt-10 text-slate-700 mx-auto">
         <h1 className={`${noto_sans_jp.className}  text-2xl font-semibold`}>新しく投稿する</h1>
         <h1 className={`${noto_sans_jp.className} pt-6 text-2xl font-semibold`}>お気に入り</h1>

          <h1 className={`${noto_sans_jp.className} pt-6 text-2xl font-semibold`}>カテゴリ</h1>
         {/* <h2>Welcome, {user.displayName}!</h2> */}
         <div className="pt-12 flex flex-wrap"> {/* カテゴリアイテム一覧 */}
          {
            categories.map((category,index) => {
              return (
                <CategoryItem key={index} categoryName={category} />
              )
            })

          }
         </div>

        </div>
        </>
      ) : (
        <BeforeLogin/>
      )}
    </div>
  );
};

export default Home;
