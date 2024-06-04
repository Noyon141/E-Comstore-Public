"use client";

import { Product as productType } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./carousel";
import { Currency } from "./currency";
import { NoResult } from "./no-result";

interface ProductListProps {
  items: productType[];

  title: string;
}
export const Product: React.FC<ProductListProps> = ({ items, title }) => {
  const router = useRouter();

  return (
    <div className="space-y-4 flex flex-col items-center justify-center">
      {title && (
        <h2 className="text-2xl lg:text-3xl font-black tracking-widest">
          {title}
        </h2>
      )}
      {items.length === 0 && <NoResult />}

      {/* IMAGES AS CAROUSEL ITEMS AND ACTIONS */}

      <Carousel
        className="w-full max-w-xs lg:max-w-4xl 2xl:max-w-7xl sm:max-w-xl md:max-w-2xl overflow-hidden sm:overflow-visible "
        opts={{ loop: true, align: "center" }}
      >
        <CarouselContent className="">
          {items.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-1/2 lg:basis-1/3 xl:basis-1/4"
            >
              <div
                className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96 aspect-square cursor-pointer"
                onClick={() => {
                  router.push(`/product/${item.id}`);
                }}
              >
                <Image
                  src={item.images[0].url}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg shadow-lg hover:shadow-xl aspect-square transition"
                  objectPosition="top"
                />

                <div className="absolute top-0 right-0 bg-black bg-opacity-40 px-2 py-1 rounded-bl-lg">
                  <p className="text-white text-xs font-bold">
                    {item.category?.name}
                  </p>
                </div>
              </div>
              <div className="pt-4">
                <h3 className="sm:text-lg font-bold">{item.name}</h3>
                <div className="">
                  <Currency value={item?.price} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};
