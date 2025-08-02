import { ProductGrid, Title } from "@/components";
import { Category, Product } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

const seedProducts = initialData.products;

interface CategoryPageProps {
  params: {
    id: Category;
  };
}

const CategoryPage = ({ params }: CategoryPageProps) => {
  const { id } = params;
  // Filter products based on the category id
  const products = seedProducts.filter(
    (product: Product) => product.gender === id
  );

  const labels: Record<Category, string> = {
    men: "for Men",
    women: "for Women",
    kid: "for Kids",
    unisex: "for everyone",
  };

  if (id !== "kid" && id !== "men" && id !== "women" && id !== "unisex") {
    notFound();
  }

  return (
    <>
      <Title
        title={`Artícles ${labels[id]}`}
        subtitle="All our products are made with the best quality and care."
        className="mb-2"
      />

      <ProductGrid products={products} />
    </>
  );
};

export default CategoryPage;
