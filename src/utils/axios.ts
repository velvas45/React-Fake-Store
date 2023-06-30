import axios from "axios";

export const client = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export interface ResponseAPI {
  userId: number;
  id: number;
  title: string;
  body: string;
}
