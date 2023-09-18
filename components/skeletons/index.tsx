import { cn } from "@/lib/utils";

export const MainSkeleton = ({ className }: { className?: string }) => {
  return (
    <div className={cn("h-full bg-slate-300 rounded-md", className)}>
      <div
        className={cn(
          className,
          "h-full w-full bg-slate-100 animate-pulse rounded-md"
        )}
      />
    </div>
  );
};
