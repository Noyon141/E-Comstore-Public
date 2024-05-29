import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";
import { Billboard } from "@/components/ui/billboard";
import { Container } from "@/components/ui/container";
import { Product } from "@/components/ui/product-list";

const Home = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("7720c09a-e2da-4818-bf7b-0be0b728ec13");

  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />

        <div className="flex flex-col gap-y-8 px-4 sm:px-6 xl:px-8">
          <Product title={"Featured products"} items={products} />
        </div>
      </div>
    </Container>
  );
};

export default Home;
