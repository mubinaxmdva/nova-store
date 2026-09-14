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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}>
      <div
        className="w-full max-w-2xl max-h-[92vh] overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Favorites</h2>
            <p className="text-sm text-gray-500">
              {favorites.length} item{favorites.length === 1 ? "" : "s"}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
            aria-label="Close favorites">
            <FiX size={18} />
          </button>
        </div>

        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-700">
              <FiHeart size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              No favorites yet
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Save products you love and find them here later.
            </p>
          </div>
        ) : (
          <div className="max-h-[calc(92vh-190px)] overflow-y-auto px-6 py-5 scrollbar-thin [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb:hover]:bg-gray-400">
            <div className="space-y-5">
              {favorites.map((product) => (
                <div
                  key={product.id}
                  className="flex gap-4 rounded-2xl border border-gray-200 p-3">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-24 w-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">
                          {product.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {formatPrice(product.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => dispatch(removeFavorite(product.id))}
                        className="inline-flex items-center gap-1 rounded-md border border-red-200 px-2 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50">
                        <FiTrash2 size={12} />
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button
                        type="button"
                        onClick={() => dispatch(addToCart(product))}
                        className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800">
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
