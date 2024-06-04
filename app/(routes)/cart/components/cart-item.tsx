"use client";

import { Currency } from "@/components/ui/currency";
import { IconButton } from "@/components/ui/icon-button";
import useCart from "@/hooks/use-cart";
import { Product } from "@/types";
import { X } from "lucide-react";
import Image from "next/image";

interface CartItemProps {
  data: Product;
}
export const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemoveItem = () => {
    cart.removeItem(data.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div className="relative h-28 w-28 rounded-md overflow-hidden md:h-40 md:w-40">
        <Image
          src={data.images[0].url}
          fill
          alt="image"
          className="object-cover object-center"
        />
        <div className="absolute top-0 right-0 bg-black bg-opacity-40 px-2 py-1 rounded-bl-lg">
          <p className="text-white text-xs font-bold">{data?.category?.name}</p>
        </div>
      </div>
      <div className="relative ml-4 flex flex-1 flex-col justify-between lg:ml-6">
        <div className="absolute top-0 right-0 z-10">
          <IconButton icon={<X size={16} />} onClick={onRemoveItem} />
        </div>
        <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-6 pr-0">
          <div className="flex justify-between">
            <h3 className="md:text-xl text-base font-bold">{data.name}</h3>
          </div>
          <div className="flex mt-1 text-sm my-4 md:text-base tracking-wider">
            <p className="text-muted-foreground">{data.size.name}</p>
            <p className="text-muted-foreground border-l ml-4 border-gray-500 pl-4">
              {data.color.name}
            </p>
          </div>
          <Currency value={data.price} />
        </div>
      </div>
    </li>
  );
};
