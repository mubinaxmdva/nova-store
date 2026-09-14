import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { product as products } from "../../assets/data/products";

const categoryPreview = [
  {
    name: "Smartphone",
    count: 3,
    image:
      "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Laptop",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Headphones",
    count: 1,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Power Bank",
    count: 2,
    image:
      "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=900&q=80",
  },
];

function Home() {
  const [search, setSearch] = useState("");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return products.slice(0, 4);

    return products
      .filter((product) => {
        const haystack = [
          product.title,
          product.brand,
          product.category,
          product.shortDescription,
          product.description,
          ...(product.tags || []),
        ]
          .filter(Boolean)
          .join(" ")
          .toLowerCase();

        return haystack.includes(query);
      })
      .slice(0, 4);
  }, [search]);

  return (
    <div>
      <SearchBar value={search} onChange={setSearch} />

      <section className="mb-10 pt-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#111111]">
            Featured products
          </h2>
          <Link
            to="/products"
            className="text-sm font-medium text-gray-600 hover:text-black">
            View all
          </Link>
        </div>

        <ProductGrid products={filteredProducts} />
      </section>

      <section className="pb-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-[#111111]">
            Shop by category
          </h2>
          <Link
            to="/categories"
            className="text-sm font-medium text-gray-600 hover:text-black">
            See all categories
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {categoryPreview.map((category) => (
            <Link
              key={category.name}
              to={`/products?category=${encodeURIComponent(category.name)}`}
              className="group overflow-hidden rounded-[20px] border border-[#e8e8e8] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="h-44 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <div className="flex items-center justify-between px-4 py-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#111111]">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {category.count} items
                  </p>
                </div>
                <span className="text-lg text-gray-400">→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
