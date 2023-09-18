"use client";

import Button from "@/components/ui/button";

import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useState } from "react";

interface FilterProps {
  data: (Size | Color)[];
  name: string;
  valueKey: string;
}

const Filter = ({ data, name, valueKey }: FilterProps) => {
  const searchParams = useSearchParams();
  const [activeFilter, setActive] = useState<string | null>(
    searchParams.get(valueKey)
  );
  const router = useRouter();

  const onClick = (id: string) => {
    const current = qs.parse(searchParams.toString());

    console.log(searchParams.get(valueKey));
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
      setActive(null);
    } else {
      setActive(id);
    }

    const url = qs.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url, { scroll: false });
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold">{name}</h3>
      <hr className="my-4" />
      <div className="flex flex-wrap gap-2">
        {data.map((filter) => (
          <div key={filter.id} className="flex items-center">
            <Button
              className={cn(
                "rounded-md text-sm text-gray-800 bg-white border border-gray-300",
                filter.id === activeFilter && "bg-black text-white"
              )}
              onClick={() => onClick(filter.id)}
            >
              {filter.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
