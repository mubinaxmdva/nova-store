import { useDispatch, useSelector } from "react-redux";
import { FiMinus, FiPlus, FiShoppingCart, FiTrash2, FiX } from "react-icons/fi";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
  selectCartItems,
  selectCartTotalPrice,
} from "../../redux/cart/cartSlice";

const formatPrice = (value) => `${Number(value || 0).toLocaleString()} UZS`;

function CartModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const items = useSelector(selectCartItems);
  const totalPrice = useSelector(selectCartTotalPrice);

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
              Your Cart
            </h2>

            <p className="text-xs text-gray-500 sm:text-sm">
              {items.length} item{items.length === 1 ? "" : "s"}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200 sm:h-10 sm:w-10"
            aria-label="Close cart">
            <FiX size={18} />
          </button>
        </div>

        {/* Empty */}
        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-4 py-14 text-center sm:px-6 sm:py-16">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-700">
              <FiShoppingCart size={28} />
            </div>

            <h3 className="text-lg font-semibold text-gray-800 sm:text-xl">
              Your cart is empty
            </h3>

            <p className="mt-2 text-xs text-gray-500 sm:text-sm">
              Add some products to get started.
            </p>
          </div>
        ) : (
          /* Products */
          <div className="max-h-[calc(94vh-210px)] overflow-y-auto px-3 py-4 sm:px-6 sm:py-5 scrollbar-thin [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb:hover]:bg-gray-400">
            <div className="space-y-4 sm:space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 rounded-2xl border border-gray-200 p-3 sm:gap-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover sm:h-24 sm:w-24"
                  />

                  <div className="min-w-0 flex-1">
                    {/* Product title + Remove */}
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-gray-900 sm:text-base">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-red-200 text-red-600 transition hover:bg-red-50 sm:h-auto sm:w-auto sm:gap-1 sm:px-2 sm:py-1 sm:text-xs sm:font-medium"
                        aria-label="Remove from favorites">
                        <FiTrash2 size={14} />
                        <span className="hidden sm:inline">Remove</span>
                      </button>
                    </div>

                    {/* Quantity + Subtotal */}
                    <div className="mt-3 flex items-end justify-between gap-2 sm:mt-4 sm:items-center">
                      <div className="flex shrink-0 items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <button
                          type="button"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          disabled={item.quantity <= 1}
                          className="flex h-8 w-8 items-center justify-center text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40 sm:h-9 sm:w-9"
                          aria-label="Decrease quantity">
                          <FiMinus size={13} />
                        </button>

                        <span className="min-w-8 text-center text-xs font-semibold text-gray-900 sm:min-w-10 sm:text-sm">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="flex h-8 w-8 items-center justify-center text-gray-700 transition hover:bg-gray-100 sm:h-9 sm:w-9"
                          aria-label="Increase quantity">
                          <FiPlus size={13} />
                        </button>
                      </div>

                      <div className="min-w-0 text-right">
                        <p className="text-[10px] uppercase tracking-wide text-gray-400 sm:text-xs">
                          Subtotal
                        </p>

                        <p className="truncate text-xs font-bold text-gray-900 sm:text-base">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="border-t border-gray-200 px-4 py-4 sm:px-6 sm:py-5">
          <div className="flex items-center justify-between gap-3 text-sm font-medium text-gray-700 sm:text-base">
            <span>Subtotal</span>

            <span className="text-base font-bold text-gray-900 sm:text-lg">
              {formatPrice(totalPrice)}
            </span>
          </div>

          <button
            type="button"
            className="mt-4 w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 sm:mt-5">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
