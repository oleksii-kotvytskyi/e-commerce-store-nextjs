import { MainSkeleton } from "./index";

const BillboardSkeleton = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden">
      <div className="rounded-xl relative aspect-[2/1] md:aspect-[4/1] overflow-hidden bg-cover">
        <MainSkeleton />
      </div>
    </div>
  );
};

export default BillboardSkeleton;
