"use client";

import { Image as ImageType } from "@/types";
import { TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import { GalleryTab } from "./gallery-tab";

interface GalleryProps {
  images: ImageType[];
}

export const Gallery: React.FC<GalleryProps> = ({ images }) => {
  return (
    <TabGroup as="div" className={"flex flex-col-reverse"}>
      <div className="mt-6 w-full max-w-xl xl:max-w-2xl mx-auto">
        <TabList className={"grid grid-cols-4 gap-4"}>
          {images.map((image) => (
            <GalleryTab key={image.id} image={image} />
          ))}
        </TabList>
      </div>
      <TabPanels className={"aspect-square w-full lg:max-w-2xl  mx-auto"}>
        {images.map((image) => (
          <TabPanel key={image.id} className={""}>
            <div className="aspect-square relative w-full h-full sm:rounded-lg overflow-hidden">
              <Image
                src={image.url}
                alt={"image"}
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg aspect-square"
                objectPosition="top"
              />
            </div>
          </TabPanel>
        ))}
      </TabPanels>
    </TabGroup>
  );
};
