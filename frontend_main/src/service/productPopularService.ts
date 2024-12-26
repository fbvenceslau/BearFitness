import api from "./api";

export type SizeType = {
  id: number;
  size: string;
}

export type ProductPopularType = {
  id: number;
  name: string;
  thumbnailurl: string;
  description: string;
  sizes: SizeType[];
  link: string;
};


const productPopularService = {
  getPopularProducts: async () => {
    const res = await api.get("/products/popular").catch((error) => {
      console.log(error.response.data.message);

      return error.response;
    });

    return res;
  },
};

export default productPopularService;