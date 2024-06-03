"use client";

import { Button } from "@/components/ui/button";
import { IconButton } from "@/components/ui/icon-button";
import { Color, Size } from "@/types";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Plus, X } from "lucide-react";
import { useState } from "react";
import { Filter } from "./filter";

interface MobileFiltersProps {
  colors: Color[];
  sizes: Size[];
}
export const MobileFilters: React.FC<MobileFiltersProps> = ({
  colors,
  sizes,
}) => {
  const [open, setOpen] = useState(false);

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  return (
    <>
      <Button
        onClick={onOpen}
        className="flex ring-1 rounded-lg ring-black items-center md:hidden gap-x-2 font-semibold"
        variant={"outline"}
      >
        Filters
        <Plus size={20} />
      </Button>
      <Dialog
        as="div"
        open={open}
        className="relative z-40 md:hidden"
        onClose={onClose}
      >
        {/* BACKGROUND */}
        <div className="fixed inset-0 bg-black bg-opacity-25 " />

        {/* DIALOG CONTENT */}

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel className="relative ml-auto h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
            {/* ONCLOSE BUTTON AND TITLE */}

            <div className="flex items-center justify-between">
              <div className="px-4">
                <h2 className="text-lg font-semibold">Filters</h2>
              </div>
              <div className="flex items-center justify-end px-4">
                <IconButton icon={<X size={17} />} onClick={onClose} />
              </div>
            </div>

            {/* FILTERS */}

            <div className="px-4 mt-4">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
};
