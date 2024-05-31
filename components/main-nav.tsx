"use client";

import { cn } from "@/lib/utils";
import { Category } from "@/types";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";

interface MainNavProps {
  data: Category[];
  className?: React.HtmlHTMLAttributes<HTMLElement>;
}

export const MainNav: React.FC<MainNavProps> = ({ data, className }) => {
  const pathname = usePathname();

  const routes = data.map((route) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: `/category/${route.id}` === pathname,
  }));
  return (
    <>
      <nav
        className={cn(
          "md:flex mx-6 items-center space-x-4 lg:space-x-6 hidden",
          className
        )}
      >
        {routes.map((route) => (
          <Link
            href={route.href}
            key={route.href}
            className={cn(
              "text-base font-semibold transition-colors hover:text-black",
              route.active ? "text-black " : "text-neutral-500"
            )}
          >
            {route.label}
          </Link>
        ))}
      </nav>

      {/* FOR MOBILE VIEW */}

      <div className="md:hidden p-0 mx-3 mt-1.5 ">
        <Sheet>
          <SheetTrigger asChild className="">
            <Button className="h-8 w-8 p-0 ">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className={"p-0 w-[65%] bg-white "}>
            <div className="transition ease-in-out duration-300">
              <SheetHeader className="mt-3">
                <SheetTitle className="font-black text-xl tracking-tighter">
                  E-ComStore
                </SheetTitle>
              </SheetHeader>

              <nav
                className={cn("space-y-4 flex flex-col ml-8 mt-6", className)}
              >
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                      "text-base font-semibold transition-colors hover:text-black",
                      route.active ? "text-black " : "text-neutral-500"
                    )}
                  >
                    {route.label}
                  </Link>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};
