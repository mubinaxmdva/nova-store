import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import { addToCart } from "../../redux/cart/cartSlice";
import {
  toggleFavorite,
  selectIsFavorite,
} from "../../redux/favorites/favoritesSlice";
import "./ProductGrid.css";

function ProductGrid({ products = [] }) {
  const dispatch = useDispatch();
  const cartIds = useSelector((state) =>
    state.cart.items.map((item) => item.id),
  );
  const favoriteIds = useSelector((state) =>
    state.favorites.items.map((item) => item.id),
  );
  const cartIdSet = new Set(cartIds);
  const favoriteIdSet = new Set(favoriteIds);

  if (!products.length) {
    return (
      <div className="mt-12 flex min-h-55 flex-col items-center justify-center text-center">
        <p className="text-xl font-semibold text-[#111111]">
          No products found
        </p>
        <p className="mt-2 text-sm text-gray-500">
          Try searching for something else.
        </p>
      </div>
    );
  }

  return (
    <section className="product-grid">
      {products.map((product, index) => {
        const inCart = cartIdSet.has(product.id);
        const isFavorite = favoriteIdSet.has(product.id);

        return (
          <ProductCard
            key={product.id}
            product={product}
            inCart={inCart}
            isFavorite={isFavorite}
            onAddToCart={() => dispatch(addToCart(product))}
            onToggleFavorite={() => dispatch(toggleFavorite(product))}
            style={{
              animationDelay: `${0.3 + index * 0.1}s`,
            }}
          />
        );
      })}
    </section>
  );
}

export default ProductGrid;
