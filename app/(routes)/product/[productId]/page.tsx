import { getProduct } from "@/actions/get-product";
import { getProducts } from "@/actions/get-products";
import { Gallery } from "@/components/gallery";
import { Container } from "@/components/ui/container";
import { Info } from "@/components/ui/info";
import { Product } from "@/components/ui/product-list";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage: React.FC<ProductPageProps> = async ({ params }) => {
  const product = await getProduct(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 xl:px-8 ">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-4">
            <Gallery images={product.images} />
            <div className="mt-10 sm:px-0 sm:mt-16 lg:mt-0">
              <Info data={product} key={product.id} />
            </div>
          </div>
          <hr className="my-10" />
          <Product title="You might also like" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
};

export default ProductPage;
