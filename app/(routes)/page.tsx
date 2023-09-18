import Container from "@/components/ui/container";
import Billboard from "@/components/billboard";
import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import { Suspense } from "react";
import BillboardSkeleton from "@/components/skeletons/billboard";
import ProductListSkeleton from "@/components/skeletons/product-list";

export const revalidate = 0;

const BillBoardPart = async () => {
  const billboard = await getBillboard(process.env.MAIN_BILLBOARD_ID!);

  return <Billboard data={billboard} />;
};

const ProductListPart = async ({ title }: { title: string }) => {
  const products = await getProducts({
    isFeatured: true,
  });

  return <ProductList title={title} items={products} />;
};

const HomePage = () => {
  const productTitle = "Featured Products";

  return (
    <Container>
      <div className="space-y-4 pb-10">
        <Suspense fallback={<BillboardSkeleton />}>
          <BillBoardPart />
        </Suspense>

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<ProductListSkeleton title={productTitle} />}>
            <ProductListPart title={productTitle} />
          </Suspense>
        </div>
      </div>
    </Container>
  );
};

export default HomePage;
