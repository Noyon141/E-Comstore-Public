import { getCategories } from "@/actions/get-categories";
import Link from "next/link";
import { MainNav } from "./main-nav";
import { NavbarActions } from "./navbar-actions";
import { Container } from "./ui/container";

export const Navbar = async () => {
  const categories = await getCategories();
  return (
    <div className="border-b">
      <Container>
        <div className="h-16 relative flex items-center sm:px-6 lg:px-8">
          <Link href={"/"} className="ml-4 lg:ml-0 flex gap-x-2">
            <p className="text-xl font-extrabold tracking-tighter">
              E-ComStore
            </p>
          </Link>
          <MainNav data={categories} />
          <NavbarActions />
        </div>
      </Container>
    </div>
  );
};
