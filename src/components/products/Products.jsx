import { useState } from "react";
import { ProductCard } from "./productCard/ProductCard";
import "./Products.css";

export const Products = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 120000, quantity: 10, cart: 0 },
    { id: 2, name: "Computer", price: 90000, quantity: 5, cart: 0 },
    { id: 3, name: "Monitor", price: 20000, quantity: 15, cart: 0 },
  ]);

  const totalCart = products.reduce((sum, p) => sum + p.cart, 0);

  const handleCart = (id, type) => {
    const updated = products.map((p) => {
      if (p.id === id) {
        if (type === "inc" && p.cart < p.quantity) {
          return { ...p, cart: p.cart + 1 };
        }
        if (type === "dec" && p.cart > 0) {
          return { ...p, cart: p.cart - 1 };
        }
      }
      return p;
    });

    setProducts(updated);
  };

  return (
    <div className="products">
      <h2>In Cart: {totalCart}</h2>

      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            handleCart={handleCart}
          />
        ))}
      </div>
    </div>
  );
};
