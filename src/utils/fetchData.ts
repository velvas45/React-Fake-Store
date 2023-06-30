import { client } from "./axios";
import { ProductItemType, CategoryItemType } from "@/contexts/ProductProvider";

export const getProducts = async () => {
  const res = await client.get<ProductItemType[]>("/products");
  return res.data;
};
export const getCategories = async () => {
  const res = await client.get<CategoryItemType[]>("/products/categories");
  return res.data;
};
export const getProductByCategory = async (typeCategory: string) => {
  const res = await client.get<ProductItemType[]>(
    `/products/category/${typeCategory}`
  );
  return res.data;
};
export const postLogin = async (dtLogin: {
  email: string;
  password: string;
}) => {
  const res = await client.post<{ token: string }>(`/auth/login`, {
    username: dtLogin.email,
    password: dtLogin.password,
  });
  return res.data;
};
