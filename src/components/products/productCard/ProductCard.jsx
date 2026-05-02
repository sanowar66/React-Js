import "./ProductCard.css";

export const ProductCard = ({ product, handleCart }) => {
  return (
    <div className="product-card">
      <p>{`Product Name: ${product.name}`}</p>
      <p>{`Price: ${product.price}`}</p>
      <p>{`Quantity: ${product.quantity}`}</p>

      <button
        className="cart-btn1"
        onClick={() => handleCart(product.id, "dec")}
      >
        -1
      </button>

      <span className="text">{`Add to Cart: ${product.cart}`}</span>

      <button
        className="cart-btn2"
        onClick={() => handleCart(product.id, "inc")}
      >
        +1
      </button>
    </div>
  );
};
