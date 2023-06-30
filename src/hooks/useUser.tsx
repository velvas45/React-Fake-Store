import { useContext } from "react";
import UserContext, { UseUserContextType } from "@/contexts/UserProvider";

const useProduct = (): UseUserContextType => {
  return useContext(UserContext);
};

export default useProduct;
