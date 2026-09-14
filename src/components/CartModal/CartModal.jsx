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
      className="fixed inset-0 z-2000 flex items-center justify-center bg-black/50 p-4"
      onClick={onClose}>
      <div
        className="w-full max-w-2xl max-h-[92vh] overflow-hidden rounded-3xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-gray-200 px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
            <p className="text-sm text-gray-500">
              {items.length} item{items.length === 1 ? "" : "s"}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition hover:bg-gray-200"
            aria-label="Close cart">
            <FiX size={18} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center px-6 py-16 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 text-gray-700">
              <FiShoppingCart size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              Your cart is empty
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              Add some products to get started.
            </p>
          </div>
        ) : (
          <div className="max-h-[calc(92vh-220px)] overflow-y-auto px-6 py-5 scrollbar-thin [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb:hover]:bg-gray-400">
            <div className="space-y-5">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 rounded-2xl border border-gray-200 p-3">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-24 w-24 rounded-xl object-cover"
                  />

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h3 className="text-base font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-gray-500">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="inline-flex items-center gap-1 rounded-md border border-red-200 px-2 py-1 text-xs font-medium text-red-600 transition hover:bg-red-50">
                        <FiTrash2 size={12} />
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center overflow-hidden rounded-lg border border-gray-200 bg-white">
                        <button
                          type="button"
                          onClick={() => dispatch(decreaseQuantity(item.id))}
                          disabled={item.quantity <= 1}
                          className="flex h-9 w-9 items-center justify-center text-lg text-gray-700 transition hover:bg-gray-100 disabled:cursor-not-allowed disabled:opacity-40"
                          aria-label="Decrease quantity">
                          <FiMinus size={14} />
                        </button>

                        <span className="min-w-10 text-center text-sm font-semibold text-gray-900">
                          {item.quantity}
                        </span>

                        <button
                          type="button"
                          onClick={() => dispatch(increaseQuantity(item.id))}
                          className="flex h-9 w-9 items-center justify-center text-lg text-gray-700 transition hover:bg-gray-100"
                          aria-label="Increase quantity">
                          <FiPlus size={14} />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-xs uppercase tracking-wide text-gray-400">
                          Subtotal
                        </p>
                        <p className="text-base font-bold text-gray-900">
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

        <div className="border-t border-gray-200 px-6 py-5">
          <div className="flex items-center justify-between text-base font-medium text-gray-700">
            <span>Subtotal</span>
            <span className="text-lg font-bold text-gray-900">
              {formatPrice(totalPrice)}
            </span>
          </div>

          <button
            type="button"
            className="mt-5 w-full rounded-xl bg-black px-4 py-3 text-sm font-semibold text-white transition hover:bg-gray-800">
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
