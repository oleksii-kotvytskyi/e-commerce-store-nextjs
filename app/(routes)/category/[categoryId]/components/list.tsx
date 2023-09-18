"use client";
import getProducts from "@/actions/get-products";
import NoResults from "@/components/ui/no-results";
import ProductCard from "@/components/ui/product-card";
import { Product } from "@/types";
import { useEffect, useState } from "react";
import ProductListLoading from "./preloader";
import useMounted from "@/hooks/use-mounted";

export const ProductsPage = ({
  categoryId,
  colorId,
  sizeId,
}: {
  categoryId: string;
  colorId?: string;
  sizeId?: string;
}) => {
  const isMounted = useMounted();

  const [data, setData] = useState<Product[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getProducts({
      categoryId,
      colorId,
      sizeId,
    })
      .then((res) => {
        setData(res);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [categoryId, colorId, sizeId]);

  if (!isMounted) return null;

  if (isLoading) {
    return <ProductListLoading />;
  }

  return (
    <div className="mt-6 lg:col-span-4 lg:mt-0">
      {(!data || data?.length === 0) && <NoResults />}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4">
        {data?.map((item) => (
          <ProductCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
};
