import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchBar from "../../components/SearchBar";
import ProductGrid from "../../components/ProductGrid/ProductGrid";
import { product as products } from "../../assets/data/products";

function Products() {
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const selectedCategory = searchParams.get("category");

  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase();
    const categoryFiltered = selectedCategory
      ? products.filter((product) => product.category === selectedCategory)
      : products;

    if (!query) return categoryFiltered;

    return categoryFiltered.filter((product) => {
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
    });
  }, [search, selectedCategory]);

  return (
    <div className="mt-20">
    
      <SearchBar  value={search} onChange={setSearch} />

      <div className="mt-6 flex items-center justify-between gap-4">
        <h2 className="text-xl font-semibold text-[#111111]">
          {selectedCategory ? `Showing: ${selectedCategory}` : "All Products"}
        </h2>

        {selectedCategory && (
          <Link
            to="/products"
            className="inline-flex items-center rounded-md border border-[#e8e8e8] bg-white px-3 py-2 text-sm font-medium text-gray-700 transition hover:text-black">
            All Products
          </Link>
        )}
      </div>

      <div className="mt-8">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
}

export default Products;
