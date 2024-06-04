"use client";

import useCart from "@/hooks/use-cart";
import usePreviewModal from "@/hooks/use-preview-modal";
import { Product } from "@/types";
import { Expand, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { Currency } from "./currency";
import { IconButton } from "./icon-button";

interface ProductCardProps {
  items: Product;
}
export const ProductCard: React.FC<ProductCardProps> = ({ items }) => {
  const previewModal = usePreviewModal();
  const onPreview: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();

    previewModal.onOpen(items);
  };

  const cart = useCart();
  const onAddToCart: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.stopPropagation();
    cart.addItem(items);
  };
  return (
    <div className="group rounded-xl cursor-pointer bg-white space-y-4 border p-3">
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          src={items?.images[0]?.url}
          fill
          alt="image"
          className="aspect-square object-cover rounded-lg "
        />
        <div className="absolute top-0 right-0 bg-black bg-opacity-40 px-2 py-1 rounded-bl-lg">
          <p className="text-white text-xs font-bold">
            {items?.category?.name}
          </p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center ">
            <IconButton
              onClick={onPreview}
              icon={<Expand size={20} className="text-zinc-900" />}
              className=""
            />
            <IconButton
              onClick={onAddToCart}
              icon={<ShoppingBag size={20} className="text-zinc-900" />}
              className=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <p className="font-bold text-lg">{items.name}</p>
      </div>
      <div className="flex items-center lg:text-lg">
        <Currency value={items?.price} />
      </div>
    </div>
  );
};
