import api from "./api";

export type SizeType = {
  id: number;
  size: string;
}

export type ProductType = {
  id: number;
  name: string;
  thumbnailurl: string;
  description: string;
  sizes: SizeType[];
  link: string;
};


const productService = {
  getProducts: async () => {
    const res = await api.get("/products").catch((error) => {
      console.log(error.response.data.message);

      return error.response;
    });

    return res;
  },
};

export default productService;