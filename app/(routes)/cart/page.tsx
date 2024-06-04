"use client";

import { Container } from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useEffect, useState } from "react";
import { CartItem } from "./components/cart-item";
import { Summary } from "./components/summary";

const Cart = () => {
  const cart = useCart();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 md:px-6 xl:px-8">
          <h1 className="font-black text-3xl">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12 ">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-lg text-muted-foreground ">
                  No items added to cart
                </p>
              )}
              <ul>
                {cart.items.map((item) => (
                  <CartItem key={item.id} data={item} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Cart;
