"use client";

import ProductListSkeleton from "@/components/skeletons/product-list";
import useMounted from "@/hooks/use-mounted";

const ProductListLoading = () => {
  const isMounted = useMounted();

  if (!isMounted) return null;

  return (
    <div className="mt-6 lg:col-span-4 lg:mt-0">
      <ProductListSkeleton
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4"
        onlySkeleton
      />
    </div>
  );
};

export default ProductListLoading;
