import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import {
  FiArrowLeft,
  FiHeart,
  FiMinus,
  FiPlus,
  FiShoppingCart,
} from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { product as products } from "../../assets/data/products";
import { addToCart, selectIsInCart } from "../../redux/cart/cartSlice";
import {
  selectIsFavorite,
  toggleFavorite,
} from "../../redux/favorites/favoritesSlice";

function ProductDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = products.find((item) => item.id === Number(id));
  const [quantity, setQuantity] = useState(1);

  const inCart = useSelector((state) => selectIsInCart(state, Number(id)));
  const isFavorite = useSelector((state) =>
    selectIsFavorite(state, Number(id)),
  );

  if (!product) {
    return (
      <div className="flex min-h-[50vh] flex-col items-center justify-center px-6 py-16 text-center">
        <p className="text-2xl font-semibold text-[#111111]">
          Product not found
        </p>
        <p className="mt-2 text-sm text-gray-500">
          We couldn&apos;t find the product you were looking for.
        </p>
        <Link
          to="/products"
          className="mt-6 inline-flex items-center rounded-full bg-[#111111] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#222222]">
          Back to products
        </Link>
      </div>
    );
  }

  const specsEntries = Object.entries(product.specifications || {});

  return (
    <div className="mx-auto max-w-6xl py-8">
      <Link
        to="/products"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-black">
        <FiArrowLeft size={16} />
        Back to products
      </Link>

      <div className="overflow-hidden rounded-[22px] border border-[#e8e8e8] bg-white shadow-sm">
        <div className="grid gap-8 p-6 md:grid-cols-2 md:p-8">
          <div className="flex items-center justify-center rounded-[18px] bg-[#f3f4f6] p-4">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-130 w-full rounded-[14px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-center">
            <div className="mb-4 flex items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {product.brand}
                </p>
                <h1 className="mt-2 text-3xl font-bold text-[#111111]">
                  {product.title}
                </h1>
              </div>

              <button
                type="button"
                aria-label="Toggle favorite"
                onClick={() => dispatch(toggleFavorite(product))}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e8e8e8] bg-white shadow-sm transition hover:shadow-md">
                {isFavorite ? (
                  <FaHeart size={18} color="#111111" />
                ) : (
                  <FiHeart size={18} />
                )}
              </button>
            </div>

            <div className="mb-3 flex items-center gap-3">
              <span className="text-2xl font-bold text-[#111111] sm:text-3xl">
                {Number(product.price).toLocaleString()} UZS
              </span>
              {product.oldPrice && (
                <span className="text-base text-[#999999] line-through">
                  {Number(product.oldPrice).toLocaleString()} UZS
                </span>
              )}
            </div>

            <div className="mb-4 flex items-center gap-2">
              <span className="rounded-full bg-[#111111] px-2.5 py-1 text-xs font-semibold text-white">
                -{product.discount}%
              </span>
              <span className="text-sm text-gray-500">
                {product.stock} in stock
              </span>
            </div>

            <div className="mb-5 flex items-center gap-3">
              <span className="text-sm font-medium text-[#111111]">
                Rating:
              </span>
              <span className="text-sm font-semibold text-[#111111]">
                {product.rating}
              </span>
              <span className="text-sm text-gray-500">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="mb-5 text-sm leading-6 text-gray-600">
              {product.shortDescription || product.description}
            </p>

            <div className="mb-6 flex items-center gap-3">
              <span className="text-sm font-medium text-[#111111]">
                Quantity
              </span>
              <div className="flex items-center overflow-hidden rounded-lg border border-[#e8e8e8] bg-white">
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="flex h-10 w-10 items-center justify-center text-lg text-gray-700 transition hover:bg-[#f3f4f6]"
                  aria-label="Decrease quantity">
                  <FiMinus size={16} />
                </button>
                <span className="flex h-10 min-w-12 items-center justify-center text-sm font-medium text-[#111111]">
                  {quantity}
                </span>
                <button
                  type="button"
                  onClick={() => setQuantity((current) => current + 1)}
                  className="flex h-10 w-10 items-center justify-center text-lg text-gray-700 transition hover:bg-[#f3f4f6]"
                  aria-label="Increase quantity">
                  <FiPlus size={16} />
                </button>
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => dispatch(addToCart(product))}
                className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#111111] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#222222]">
                <FiShoppingCart size={16} />
                {inCart ? "Added to cart" : "Add to cart"}
              </button>

              <button
                type="button"
                onClick={() => dispatch(toggleFavorite(product))}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#e8e8e8] bg-white px-4 py-3 text-sm font-medium text-[#111111] transition hover:bg-[#f3f4f6]">
                {isFavorite ? (
                  <FaHeart size={16} color="#111111" />
                ) : (
                  <FiHeart size={16} />
                )}
                Favorite
              </button>
            </div>

            <div className="mb-6 flex flex-wrap gap-2 text-xs text-gray-600">
              {(product.tags || []).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-[#f3f4f6] px-2.5 py-1.5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#e8e8e8] bg-white px-6 py-8 md:px-8">
          <div className="grid gap-8 lg:grid-cols-2">
            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#111111]">
                Description
              </h2>
              <p className="text-sm leading-7 text-gray-600">
                {product.description}
              </p>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-semibold text-[#111111]">
                Features
              </h2>
              <ul className="space-y-3 text-sm text-gray-600">
                {(product.features || []).map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#111111]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mt-10">
            <h2 className="mb-5 text-xl font-semibold text-[#111111]">
              Specifications
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {specsEntries.map(([key, value]) => (
                <div
                  key={key}
                  className="rounded-xl border border-[#e8e8e8] bg-[#f9fafb] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                    {key}
                  </p>
                  <p className="mt-2 text-sm font-medium text-[#111111]">
                    {value || "-"}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="mb-5 text-xl font-semibold text-[#111111]">
              Product information
            </h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl border border-[#e8e8e8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                  SKU
                </p>
                <p className="mt-2 text-sm text-[#111111]">
                  {product.sku || "-"}
                </p>
              </div>
              <div className="rounded-xl border border-[#e8e8e8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Warranty
                </p>
                <p className="mt-2 text-sm text-[#111111]">
                  {product.warranty || "1 year"}
                </p>
              </div>
              <div className="rounded-xl border border-[#e8e8e8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Delivery
                </p>
                <p className="mt-2 text-sm text-[#111111]">
                  {product.delivery || "1-2 business days"}
                </p>
              </div>
              <div className="rounded-xl border border-[#e8e8e8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Brand
                </p>
                <p className="mt-2 text-sm text-[#111111]">
                  {product.brand || "-"}
                </p>
              </div>
              <div className="rounded-xl border border-[#e8e8e8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Category
                </p>
                <p className="mt-2 text-sm text-[#111111]">
                  {product.category || "-"}
                </p>
              </div>
              <div className="rounded-xl border border-[#e8e8e8] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                  Colors
                </p>
                <p className="mt-2 text-sm text-[#111111]">
                  {(product.colors || []).join(", ") || "-"}
                </p>
              </div>
              {(product.storage || []).length > 0 && (
                <div className="rounded-xl border border-[#e8e8e8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                    Storage
                  </p>
                  <p className="mt-2 text-sm text-[#111111]">
                    {(product.storage || []).join(", ")}
                  </p>
                </div>
              )}
              {product.ram && (
                <div className="rounded-xl border border-[#e8e8e8] p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.12em] text-gray-500">
                    RAM
                  </p>
                  <p className="mt-2 text-sm text-[#111111]">{product.ram}</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
