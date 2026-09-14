import "./ProductCard.css";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function ProductCard({
  product,
  style,
  onAddToCart,
  inCart = false,
  isFavorite = false,
  onToggleFavorite,
}) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/products/${product.id}`);
  };

  const handleFavoriteClick = (event) => {
    event.stopPropagation();
    onToggleFavorite();
  };

  const handleAddToCartClick = (event) => {
    event.stopPropagation();
    onAddToCart();
  };

  return (
    <article
      className="product-card"
      key={product.id}
      style={style}
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleCardClick();
        }
      }}>
      <div className="product-image-wrapper">
        <span className="discount-badge">-{product.discount}%</span>

        <button
          className="favorite-btn flex items-center justify-center"
          type="button"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          onClick={handleFavoriteClick}>
          {isFavorite ? (
            <FaHeart size={18} color="#111111" />
          ) : (
            <FiHeart size={18} color="#111111" />
          )}
        </button>

        <img
          src={product.image}
          alt={product.title}
          className="product-image"
        />
      </div>

      <div className="product-info">
        <h2>{product.title}</h2>

        <div className="price">
          <strong>{product.price.toLocaleString()} UZS</strong>
          <del>{product.oldPrice.toLocaleString()} UZS</del>
        </div>

        <p className="monthly-price">
          {(product.price / 12).toLocaleString()} so'm/oyiga
        </p>

        <div className="rating">
          <span>⭐</span>
          <strong>{product.rating}</strong>
          <span>({product.reviews} reviews)</span>
        </div>

        <button
          type="button"
          onClick={handleAddToCartClick}
          className="add-cart"
          disabled={inCart}
          style={inCart ? { opacity: 0.7, cursor: "not-allowed" } : undefined}>
          {inCart ? "Added" : "Add to cart"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
