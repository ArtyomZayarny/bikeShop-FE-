import { Filter } from "../filter";
import { ProductMiniCard } from "../product/product-mini-card";
import { products } from "./mocks";
import { TopSection } from "./top-section";

export const CategoryContent = () => {
  return (
    <>
      <TopSection />
      {/* Main content section */}
      <div className="grid grid grid-cols-[300px_minmax(900px,_1fr)] gap-5">
        {/* Filter */}
        <aside className="">
          <Filter />
        </aside>

        {/* Product listing */}
        <div className="grid w-full">
          <ul className="grid grid-cols-3 gap-6">
            {products.map((product) => (
              <li className="relative" key={product.id}>
                <ProductMiniCard product={product} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
