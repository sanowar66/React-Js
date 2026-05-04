import "./ProductCard.css";

export const ProductCard = ({ product, addToCart }) => {
  const handleAddToCart = () => {
    addToCart(product);
  };
  //const handleRemoveToCart = () => {};
  return (
    <div className="product-card">
      <p>{`Product Name: ${product.name}`}</p>
      <p>{`Price: ${product.price}`}</p>
      <p>{`Quantity: ${product.quantity}`}</p>

      <button className="cart-btn1" onClick={() => handleAddToCart(product.id)}>
        Add to Cart
      </button>

      {/* <button className="cart-btn2" onClick={() => handleAddToCart(product.id)}>
        Remove Add to Cart
      </button> */}
    </div>
  );
};
