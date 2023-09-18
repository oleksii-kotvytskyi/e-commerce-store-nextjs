import { MainSkeleton } from "./index";

const FiltersSkeleton = () => {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold h-4 w-1/2">
        <MainSkeleton />
      </h3>
      <hr className="my-4" />
      <div className="flex items-center flex-wrap gap-2">
        {[0, 1, 2, 3, 4].map((el) => {
          return (
            <div className="h-12 w-[calc(50%-0.25rem)] " key={el}>
              <MainSkeleton />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FiltersSkeleton;
