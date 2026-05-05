import "./ProductCard.css";

export const ProductCard = ({
  product,
  isAddedtoCart,
  addToCart,
  removeFromCart,
}) => {
  const handleAddToCart = () => addToCart(product);

  const handleRemoveCart = () => removeFromCart(product.id);

  return (
    <div className="product-card">
      <p>{`Product Name: ${product.name}`}</p>
      <p>{`Price: ${product.price}`}</p>
      <p>{`Quantity: ${product.quantity}`}</p>

      <button className="cart-btn1" onClick={handleAddToCart}>
        Add to Cart
      </button>

      {isAddedtoCart && (
        <button className="cart-btn2" onClick={handleRemoveCart}>
          Remove From Cart
        </button>
      )}
    </div>
  );
};
