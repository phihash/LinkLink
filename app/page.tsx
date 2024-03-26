"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../lib/firebase";
import Header from "@/components/Header";
import { noto_sans_jp } from "@/app/fonts";
import BeforeLogin from "@/components/BeforeLogin";
import Loading from "@/components/Loading";
import CategoryItem from "@/components/CategoryItem";
import FavoriteItem from "@/components/favoriteItem";
import HeroIcon from "../public/hero.svg";
import Image from "next/image";

const Home = () => {
  const [user, loading] = useAuthState(auth);
  const categories = [
    "業務ミス",
    "コミュニケーション",
    "ビジネスマナー",
    "自己管理",
    "セカンドキャリア",
    "セクハラ",
    "パワハラ",
    "入社後",
    "その他",
  ];
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <Header></Header>
      {user ? (
        <>
          <div className="w-5/6 pt-14 text-slate-700 mx-auto">
            <h1 className={`${noto_sans_jp.className}  text-2xl font-semibold`}>
            {user.displayName}の投稿
            </h1>
            <div className="w-max mx-auto py-6">
              <Image
                src={HeroIcon}
                alt="ヒーローアイコン"
                width={240}
                height={240}
              />
            </div>
            <div className={`${noto_sans_jp.className}   text-center `}>
              <p className="text-lg font-bold ">
                まだ投稿された文章がありません
              </p>
              <p className="text-sm pt-3 font-semibold ">
                あなたの体験談を投稿してみましょう!
              </p>
              <button className="block mx-auto w-max px-12 py-3 border-2 border-sky-400 rounded-xl text-sky-400 mt-10 text-lg font-semibold">
                新しく投稿する
              </button>
            </div>

            <h1
              className={`${noto_sans_jp.className} pt-6 text-2xl font-semibold`}
            >
              お気に入り
            </h1>
            <div className="pt-12 flex flex-wrap ">
              {" "}
              {/* お気に入りアイテム一覧 */} <FavoriteItem /> <FavoriteItem />{" "}
              <FavoriteItem /> <FavoriteItem /> <FavoriteItem />{" "}
              <FavoriteItem />{" "}
            </div>
            <h1
              className={`${noto_sans_jp.className} pt-6 text-2xl font-semibold`}
            >
              カテゴリ
            </h1>
            {/* <h2>Welcome, {user.displayName}!</h2> */}
            <div className="pt-12 pb-36 flex flex-wrap">
              {" "}
              {/* カテゴリアイテム一覧 */}
              {categories.map((category, index) => {
                return <CategoryItem key={index} categoryName={category} />;
              })}
            </div>
          </div>
        </>
      ) : (
        <BeforeLogin />
      )}
    </div>
  );
};

export default Home;
