"use client";

import { Button } from "@/components/ui/button";
import { Currency } from "@/components/ui/currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export const Summary = () => {
  const items = useCart((state) => state.items);
  const searchParams = useSearchParams();
  const removeAll = useCart((state) => state.removeAll);

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment successful. Thank you for your order.");
      removeAll();
    }
    if (searchParams.get("canceled")) {
      toast.error("Order canceled. Something went wrong.");
    }
  }, [searchParams, removeAll]);

  const totalPrice = items.reduce((total, item) => {
    return total + Number(item.price);
  }, 0);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-gray-100 rounded-lg mt-16 px-4 py-6 lg:col-span-5 md:p-6 lg:p-8 lg:mt-0">
      <h2 className="lg:text-lg text-base font-bold">Order Summary</h2>

      <div className="mt-6 space-y-4">
        <div className="flex border-t border-gray-200 items-center p-2  justify-between">
          <div className="text-base font-medium">Order Total</div>
          <Currency value={totalPrice} />
        </div>

        <Button
          onClick={onCheckout}
          className="rounded-full bg-black hover:bg-zinc-800 dark:bg-white dark:hover:bg-slate-300 font-bold text-lg tracking-widest mt-6 w-full py-6"
        >
          Checkout
        </Button>
      </div>
    </div>
  );
};
