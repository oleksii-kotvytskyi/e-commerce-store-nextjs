import getProduct from "@/actions/get-product";
import getProducts from "@/actions/get-products";
import Gallery from "@/components/gallery";
import Info from "@/components/info";
import ProductList from "@/components/product-list";
import GallerySkeleton from "@/components/skeletons/gallery";
import ProductDetailsSkeleton from "@/components/skeletons/product-details";
import Container from "@/components/ui/container";
import { Suspense } from "react";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

export const revalidate = 0;

const RelatedItems = async ({ productId }: { productId: string }) => {
  const product = await getProduct(productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });

  const relatedItems = suggestedProducts?.filter(
    (item) => item.id !== productId
  );

  if (relatedItems?.length === 0) return <div />;

  return (
    <>
      <hr className="my-10" />
      <ProductList title="Related items" items={relatedItems} />
    </>
  );
};

const ProductPart = async ({ productId }: { productId: string }) => {
  const product = await getProduct(productId);

  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      <Gallery images={product.images} />
      <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <Info data={product} />
      </div>
    </div>
  );
};

const ProductPage = async ({ params }: ProductPageProps) => {
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <Suspense fallback={<ProductDetailsSkeleton />}>
            {/* <ProductDetailsSkeleton /> */}
            <ProductPart productId={params.productId} />
          </Suspense>

          {/* No need Skeleton for this element, because user will see the product first and just after that scroll down */}
          <Suspense fallback={<></>}>
            <RelatedItems productId={params.productId} />
          </Suspense>
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
