import Link from "next/link";
import { MainNav } from "./main-nav";
import { Container } from "./ui/container";

export const Navbar = () => {
  return (
    <div className="border-b">
      <Container>
        <div className="h-16 relative flex items-center sm:px-6 lg:px-8">
          <Link href={"/"} className="ml-4 lg:ml-0 flex gap-x-2">
            <p className="text-xl font-extrabold tracking-tighter uppercase">
              E-comstore
            </p>
          </Link>
          <MainNav data={[]} />
        </div>
      </Container>
    </div>
  );
};
