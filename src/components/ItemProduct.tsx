import { ProductItemType } from "@/contexts/ProductProvider";

const ItemProduct = ({ title, price, image }: ProductItemType) => {
  return (
    <div className="min-w-[250px] flex flex-col space-y-4 items-center py-8 ">
      <div className="bg-[#EBEBEB] py-10 px-8 rounded-[5px]">
        <img src={image} alt={title} className="mix-blend-multiply w-56 h-56" />
      </div>

      <div className="text-center text-black text-xl font-medium">
        <p className="min-h-[170px]">{title}</p>
        <h4 className="text-2xl font-semibold">
          {new Intl.NumberFormat("en-US", {
            currency: "USD",
            style: "currency",
          }).format(price)}
        </h4>
      </div>
    </div>
  );
};

export default ItemProduct;
