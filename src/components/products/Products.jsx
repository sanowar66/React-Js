import { useState } from "react";
import { ProductCard } from "./productCard/ProductCard";
import "./Products.css";

export const Products = () => {
  const [cart, setCart] = useState([]);
  const products = [
    { id: 1, name: "Laptop", price: 120000, quantity: 10 },
    { id: 2, name: "Computer", price: 90000, quantity: 5 },
    { id: 3, name: "Monitor", price: 20000, quantity: 15 },
  ];
  const productExistInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  const addProductToCart = (product) => {
    if (productExistInCart(product.id)) {
      return alert("Already added.");
    }
    setCart([...cart, product]);
  };
  const RemoveProductCart = (productId) => {
  setCart(cart.filter((cartItem) => cartItem.id !== productId))
  };
  

  return (
    <div className="products">
      <h2>In Cart: ${cart.length}</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isAddedtoCart={productExistInCart(product.id)}
            addToCart={addProductToCart}
            removeFromCart={RemoveProductCart}
          />
        ))}
      </div>
    </div>
  );
};