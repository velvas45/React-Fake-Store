import { useEffect } from "react";
import useProduct from "@/hooks/useProduct";
import { getProducts, getCategories } from "@/utils/fetchData";
import Hero from "@/components/Hero";
import Categories from "@/components/Categories";
import ListProduct from "@/components/ListProduct";
import { CategoryItemType } from "@/contexts/ProductProvider";

function Dashboard() {
  const { dispatch, REDUCER_ACTIONS } = useProduct();

  useEffect(() => {
    const getData = async () => {
      const [products, categories] = await Promise.all([
        getProducts(),
        getCategories(),
      ]);

      const newCategories = ["All Categories", ...categories];

      dispatch({
        type: REDUCER_ACTIONS.GETCATEGORIES,
        payload: {
          categories: newCategories as CategoryItemType,
        },
      });
      dispatch({
        type: REDUCER_ACTIONS.GETPRODUCTS,
        payload: {
          products: products,
        },
      });
    };
    getData();
  }, []);

  return (
    <>
      <div>
        <Hero />
        <Categories />
        <ListProduct />
      </div>
    </>
  );
}

export default Dashboard;
