import getCategory from "@/actions/get-category";
import getColors from "@/actions/get-colors";

import getSizes from "@/actions/get-sizes";
import Billboard from "@/components/billboard";
import Container from "@/components/ui/container";
import BillboardSkeleton from "@/components/skeletons/billboard";

import MobileFilters from "./components/mobile-filters";
import Filter from "./components/filter";
import { Suspense } from "react";
import FiltersSkeleton from "@/components/skeletons/filters";
import { ProductsPage } from "./components/list";
import ProductListLoading from "./components/preloader";

export const revalidate = 0;

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId?: string;
    sizeId?: string;
  };
}

const FilterPage = async () => {
  const sizes = await getSizes();
  const colors = await getColors();

  return (
    <>
      <MobileFilters sizes={sizes} colors={colors} />
      <div className="hidden lg:block">
        <Filter valueKey="sizeId" name="Sizes" data={sizes} />
        <Filter valueKey="colorId" name="Colors" data={colors} />
      </div>
    </>
  );
};

const CategoryBillboard = async ({
  params,
}: {
  params: CategoryPageProps["params"];
}) => {
  const category = await getCategory(params.categoryId);

  return <Billboard data={category.billboard} />;
};

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  return (
    <div className="bg-white">
      <Container>
        <Suspense fallback={<BillboardSkeleton />}>
          <CategoryBillboard params={params} />
        </Suspense>
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            <Suspense fallback={<FiltersSkeleton />}>
              <FilterPage />
            </Suspense>

            <Suspense fallback={<ProductListLoading />}>
              <ProductsPage
                categoryId={params.categoryId}
                colorId={searchParams.colorId}
                sizeId={searchParams.sizeId}
              />
            </Suspense>
          </div>
        </div>
      </Container>
    </div>
  );
}
