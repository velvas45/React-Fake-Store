import useProduct from "@/hooks/useProduct";
import ItemProduct from "./ItemProduct";

const ListProduct = () => {
  const { selectedCategory, products } = useProduct();

  return (
    <div className="mt-6">
      <h4 className="text-black text-2xl font-bold">{selectedCategory}</h4>
      <div className="mt-4 flex items-center gap-6 overflow-x-auto max-w-[82vw]">
        {products &&
          products.map((product) => (
            <ItemProduct
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))}
      </div>
    </div>
  );
};

export default ListProduct;
