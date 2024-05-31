import { Product } from "@/types";
import { ShoppingCart } from "lucide-react";
import { Button } from "./button";
import { Currency } from "./currency";

interface InfoProps {
  data: Product;
}
export const Info: React.FC<InfoProps> = ({ data }) => {
  return (
    <div className="">
      <h1 className="font-bold text-3xl text-zinc-900">{data.name}</h1>
      <div className="mt-3 flex items-end justify-between">
        <p className="lg:text-xl text-lg">
          <Currency value={data?.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-6">
        <div className="flex items-center gap-x-2">
          <p className="text-lg lg:text-xl text-zinc-900 font-semibold">
            Size:
          </p>
          <div className="">{data?.size?.name}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <p className="text-lg lg:text-xl text-zinc-900 font-semibold">
            Color:
          </p>
          <div
            className="w-6 h-6 rounded-full border border-gray-800 shadow-md"
            style={{ backgroundColor: data?.color?.value }}
          />
        </div>
      </div>
      <div className="flex items-center gap-x-3 mt-10">
        <Button className="flex items-center gap-x-2 bg-black text-white rounded-xl text-lg">
          Add To Cart
          <ShoppingCart size={25} color="white" />
        </Button>
      </div>
    </div>
  );
};
