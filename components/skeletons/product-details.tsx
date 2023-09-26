import { MainSkeleton } from ".";
import GallerySkeleton from "./gallery";

const ProductDetailsSkeleton = () => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
      <GallerySkeleton />
      <div className="space-y-3 mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
        <MainSkeleton className="h-7 w-2/3" />
        <MainSkeleton className="h-7 w-2/4" />
        <MainSkeleton className="h-7 w-1/4" />
        <MainSkeleton className="h-7 w-1/4" />
      </div>
    </div>
  );
};

export default ProductDetailsSkeleton;
