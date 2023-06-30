import { useContext } from "react";
import ProductContext, {
  UseProductContextType,
} from "@/contexts/ProductProvider";

const useProduct = (): UseProductContextType => {
  return useContext(ProductContext);
};

export default useProduct;
