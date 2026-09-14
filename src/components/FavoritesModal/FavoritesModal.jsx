import { useDispatch, useSelector } from "react-redux";
import { FiHeart, FiShoppingCart, FiTrash2, FiX } from "react-icons/fi";
import { addToCart } from "../../redux/cart/cartSlice";
import {
  removeFavorite,
  selectFavorites,
} from "../../redux/favorites/favoritesSlice";

const formatPrice = (value) => `${Number(value || 0).toLocaleString()} UZS`;

function FavoritesModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/50 p-3 sm:p-4"
      onClick={onClose}>
      <div
        className="w-full max-w-2xl max-h-[94vh] overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-200 px-4 py-3 sm:px-6 sm:py-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
              Favorites
            </h2>

            <p className="text-xs text-gray-500 sm:text-sm">
              {favorites.length} item{favorites.length === 1 ? "" : "s"}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 sm:h-10 sm:w-10"
            aria-label="Close favorites">
            <FiX size={18} />
          </button>
        </div>

        {/* Empty */}
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-4 py-14 text-center sm:px-6 sm:py-16">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-700">
              <FiHeart size={28} />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
              No favorites yet
            </h3>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Save products you love and find them here later.
            </p>
          </div>
        ) : (
          /* Products */
          <div className="max-h-[calc(94vh-170px)] overflow-y-auto px-3 py-4 sm:px-6 sm:py-5 scrollbar-thin [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb:hover]:bg-gray-400">
            <div className="space-y-4 sm:space-y-5">
              {favorites.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-3 rounded-2xl border border-gray-200 p-3 sm:gap-4">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-24 sm:w-24"
                  />

                  <div className="min-w-0 flex-1">
                    {/* Product info + Remove */}
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-gray-900 sm:text-base">
                          {product.title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => dispatch(removeFavorite(product.id))}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-red-200 text-red-600 transition hover:bg-red-50 sm:h-auto sm:w-auto sm:gap-1 sm:px-2 sm:py-1 sm:text-xs sm:font-medium"
                        aria-label="Remove from favorites">
                        <FiTrash2 size={14} />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>

                    {/* Add to Cart */}
                    <div className="mt-3 flex justify-end sm:mt-4">
                      <button
                        type="button"
                        onClick={() => dispatch(addToCart(product))}
                        className="inline-flex items-center gap-1.5 rounded-xl bg-black px-3 py-2 text-xs font-medium text-white transition hover:bg-gray-800 sm:gap-2 sm:px-4 sm:text-sm">
                        <FiShoppingCart size={14} />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default FavoritesModal;
