import Button from "./Button";
import { getProductByCategory } from "@/utils/fetchData";

import useProduct from "@/hooks/useProduct";

const Categories = () => {
  const { categories, dispatch, REDUCER_ACTIONS, selectedCategory } =
    useProduct();

  const setCategory = async (category: string): Promise<void> => {
    const data = await getProductByCategory(category);

    dispatch({
      type: REDUCER_ACTIONS.SETSELECTEDCATEGORY,
      payload: {
        selectedCategory: category,
      },
    });
    dispatch({
      type: REDUCER_ACTIONS.GETPRODUCTS,
      payload: {
        products: data,
      },
    });
  };
  return (
    <div className="flex items-center gap-6 mt-10">
      <h4 className="text-4xl text-black font-medium max-w-[200px]">
        Our New Collections
      </h4>

      <div className="flex items-center gap-8 overflow-x-auto max-w-auto">
        {categories &&
          categories.map((category, idx) => (
            <Button
              text={category}
              key={idx}
              selected={selectedCategory == category}
              onClicked={() => setCategory(category)}
            />
          ))}
      </div>
    </div>
  );
};

export default Categories;
