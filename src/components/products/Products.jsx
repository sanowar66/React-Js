import { ProductCard } from "./productCard/ProductCard";
import { useProducts } from "./hooks/useProducts";
import "./Products.css";
export const Products = () => {
  const {
    cart,
    products,
    productExistInCart,
    addProductToCart,
    RemoveProductCart,
  } = useProducts();
  return (
    <div className="products">
      <h2>In Cart: {cart.length}</h2>

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
