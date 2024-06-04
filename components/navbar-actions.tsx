"use client";

import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const NavbarActions = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const cart = useCart();
  const router = useRouter();

  const onCart = () => {
    router.push("/cart");
  };
  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4 mx-1">
      <Button
        className="rounded-full bg-black hover:bg-zinc-800 hover:dark:bg-gray-200 dark:bg-white px-6 flex items-center gap-x-2"
        size={"lg"}
        variant={"outline"}
        onClick={onCart}
      >
        <ShoppingBag size={20} color="white" />
        <span className="text-white text-sm lg:text-base">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};
