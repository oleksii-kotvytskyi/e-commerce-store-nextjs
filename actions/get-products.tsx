import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizedId?: string;
  isFeatured?: boolean;
}

const getProducts = async ({
  colorId,
  categoryId,
  sizedId,
  isFeatured,
}: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId,
      categoryId,
      sizedId,
      isFeatured,
    },
  });

  const res = await fetch(url);

  return res.json();
};

export default getProducts;
