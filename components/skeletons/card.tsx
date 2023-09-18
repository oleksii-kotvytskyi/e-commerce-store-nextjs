import { cn } from "@/lib/utils";
import { MainSkeleton } from "./index";

const CardSkeleton = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "flex flex-col border rounded-md p-3 gap-y-4 relative",
        className
      )}
    >
      <MainSkeleton className="aspect-square" />
      <MainSkeleton className="h-4 w-3/4" />
      <MainSkeleton className="h-4 w-2/4" />
    </div>
  );
};

export default CardSkeleton;
