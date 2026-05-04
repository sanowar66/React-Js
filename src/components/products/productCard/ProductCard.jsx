import "./ProductCard.css";

export const ProductCard = ({ product, isAddedtoCart, addToCart, removeFromCart}) => {
  const handleAddToCart = () => {
    addToCart(product);
  };
   const handleRemoveCart = () => {
    removeFromCart(product);
  };
  
  return (
    <div className="product-card">
      <p>{`Product Name: ${product.name}`}</p>
      <p>{`Price: ${product.price}`}</p>
      <p>{`Quantity: ${product.quantity}`}</p>

      <button className="cart-btn1" onClick={() => handleAddToCart(product.id)}>
        Add to Cart
      </button>

      {isAddedtoCart && (
        <button className="cart-btn2" onClick={() => handleRemoveCart(product.id)}>
        Remove From Cart
      </button>
      )}
    </div>
  );
};
