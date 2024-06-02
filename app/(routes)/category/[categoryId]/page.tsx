import { getCategory } from "@/actions/get-category";
import { getColors } from "@/actions/get-colors";
import { getProducts } from "@/actions/get-products";
import { getSizes } from "@/actions/get-sizes";
import { Billboard } from "@/components/ui/billboard";
import { Container } from "@/components/ui/container";
import { NoResult } from "@/components/ui/no-result";
import { ProductCard } from "@/components/ui/product-card";
import { Filter } from "./components/filter";

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    sizeId: string;
    colorId: string;
  };
}
const CategoryPage: React.FC<CategoryPageProps> = async ({
  params,
  searchParams,
}) => {
  const products = await getProducts({
    categoryId: params.categoryId,
    sizeId: searchParams.sizeId,
    colorId: searchParams.colorId,
  });

  const size = await getSizes();
  const color = await getColors();
  const category = await getCategory(params.categoryId);
  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 lg:px-6 2xl:px-8 pb-24">
          <div className="md:grid md:grid-cols-5 md:gap-x-8">
            {/* MOBILE FILTER*/}
            <div className="hidden md:block">
              <Filter valueKey="sizeId" name="Sizes" data={size} />
              <Filter valueKey="colorId" name="Colors" data={color} />
            </div>
            <div className="md:mt-0 md:col-span-4 mt-6">
              {products.length === 0 && <NoResult />}
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
                {products.map((product) => (
                  <div key={product.id} className="">
                    <ProductCard items={product} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CategoryPage;
