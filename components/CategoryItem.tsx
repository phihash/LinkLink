import { noto_sans_jp } from "@/app/fonts";

const CategoryItem : React.FC<CategoryItemProps>  = ({categoryName}) => {
  return (
    <div className="md:w-1/5 w-1/2 px-2 mb-4">
      <div className="bg-stone-300 text-slate-700 rounded-xl p-4">
        <h2 className={`${noto_sans_jp.className} text-center text-base font-semibold`}>{categoryName}</h2>
      </div>
    </div>
  );
};

interface CategoryItemProps {
  categoryName: string;
}

export default CategoryItem;
