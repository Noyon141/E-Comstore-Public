"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4 mx-1">
      <Button
        className="rounded-full bg-black px-6 flex items-center gap-x-2"
        size={"lg"}
        variant={"outline"}
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-white text-sm lg:text-base">0</span>
      </Button>
    </div>
  );
};
