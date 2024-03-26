import { noto_sans_jp } from "@/app/fonts";

const FavoriteItem = () => {
  return (
    <div className="md:w-1/3 w-11/12  md:px-3 md:mx-0 mx-auto mb-6">
      <div className="items-center rounded-xl border-2 p-4">
        <h3
          className={`${noto_sans_jp.className} text-xs font-semibold bg-sky-400 w-max rounded-lg py-1 px-3 mb-3 text-white`}
        >
          カテゴリ名
        </h3>
        <h2 className={`${noto_sans_jp.className} text-lg font-semibold`}>
          投稿タイトル
        </h2>
      </div>
    </div>
  );
};

export default FavoriteItem;
