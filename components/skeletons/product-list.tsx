"use client";

import { ViewportContext } from "@/context/breakpoints";
import CardSkeleton from "@/components/skeletons/card";
import { useContext } from "react";
import { cn } from "@/lib/utils";

type Props = {
  title?: string;
  className?: string;
  onlySkeleton?: boolean;
};

export default function ProductListSkeleton({
  title,
  className,
  onlySkeleton,
}: Props) {
  let skeletonSize = [0, 1, 2];

  const skeleton = (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4",
        className
      )}
    >
      {skeletonSize.map((el) => (
        <CardSkeleton key={`${el}+sk`} />
      ))}
    </div>
  );

  if (onlySkeleton) return skeleton;

  return (
    <div className="space-y-4">
      <h2>{title}</h2>
      {skeleton}
    </div>
  );
}
