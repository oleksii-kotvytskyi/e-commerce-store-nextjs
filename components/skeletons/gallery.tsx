import { MainSkeleton } from ".";

const GallerySkeleton = () => {
  return (
    <div className="flex flex-col-reverse">
      <div className="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none">
        <div className="grid grid-cols-4 gap-6">
          {[0, 1, 2].map((image) => (
            <div
              key={image}
              className="relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white"
            >
              <MainSkeleton className="w-full" />
            </div>
          ))}
        </div>
      </div>
      <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
        <MainSkeleton />
      </div>
    </div>
  );
};

export default GallerySkeleton;
