"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Color, Size } from "@/types";
import { useRouter, useSearchParams } from "next/navigation";
import queryString from "query-string";

interface FilterProps {
  valueKey: string;
  name: string;
  data: (Color | Size)[];
}
export const Filter: React.FC<FilterProps> = ({ valueKey, name, data }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedValue = searchParams.get(valueKey);

  const onClick = (id: string) => {
    const current = queryString.parse(searchParams.toString());
    const query = {
      ...current,
      [valueKey]: id,
    };

    if (current[valueKey] === id) {
      query[valueKey] = null;
    }

    const url = queryString.stringifyUrl(
      {
        url: window.location.href,
        query,
      },
      { skipNull: true }
    );

    router.push(url);
  };

  return (
    <div className="mb-8">
      <h3 className="font-semibold text-lg">{name}</h3>
      <hr className="my-5" />
      <div className="flex gap-2 flex-wrap  ">
        {data.map((filter) => (
          <div className="flex items-center" key={filter.id}>
            <Button
              className={cn(
                "rounded-full px-4 flex items-center gap-x-2 text-sm",
                selectedValue === filter.id && "bg-black text-white"
              )}
              variant={"outline"}
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
