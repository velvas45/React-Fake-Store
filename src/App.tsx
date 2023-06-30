import { useEffect } from "react";

import { client } from "@/utils/axios";
import useProduct from "@/hooks/useProduct";

function App() {
  const { dispatch, REDUCER_ACTIONS, products } = useProduct();

  useEffect(() => {
    async function fetchProducts() {
      const res = await client.get("/products");

      dispatch({
        type: REDUCER_ACTIONS.GETPRODUCTS,
        payload: {
          products: res.data || [],
        },
      });
    }

    fetchProducts();
  }, []);

  return (
    <>
      <div>
        <h1>React Ecommerce</h1>
        {products && products.map((product) => <div>{product.title}</div>)}
      </div>
    </>
  );
}

export default App;
