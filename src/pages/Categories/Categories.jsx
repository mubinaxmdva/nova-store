import { Link } from "react-router-dom";
import { product as products } from "../../assets/data/products";

const categories = [...new Set(products.map((product) => product.category))];

function Categories() {
  return (
    <div className="mt-10 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#111111]">Categories</h1>
        <p className="mt-2 text-sm text-gray-600">
          Explore products by category and find what fits your lifestyle.
        </p>
      </div>

      <div className="mb-6">
        <Link
          to="/products"
          className="inline-flex items-center rounded-md border border-[#e8e8e8] bg-white px-4 py-2 text-sm font-medium text-gray-700 transition hover:text-black">
          All Products
        </Link>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => {
          const categoryProducts = products.filter(
            (product) => product.category === category,
          );
          const previewProduct = categoryProducts[0];

          return (
            <Link
              key={category}
              to={`/products?category=${encodeURIComponent(category)}`}
              className="group overflow-hidden rounded-[22px] border border-[#e8e8e8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="h-52 overflow-hidden bg-[#f3f4f6]">
                <img
                  src={previewProduct?.image}
                  alt={category}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <h2 className="text-xl font-semibold text-[#111111]">
                    {category}
                  </h2>
                  <p className="text-sm text-gray-500">
                    {categoryProducts.length} items
                  </p>
                </div>
                <span className="text-xl text-gray-400">→</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Categories;
