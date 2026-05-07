import { useState } from "react";
import { productServices } from "../../../services";

export const useProducts = () => {
  const [cart, setCart] = useState([]);

  const products = productServices.getProduct();

  const productExistInCart = (productId) => {
    return cart.some((product) => product.id === productId);
  };

  const addProductToCart = (product) => {
    if (productExistInCart(product.id)) {
      alert("Already added.");
      return;
    }
    setCart([...cart, product]);
  };
  const RemoveProductCart = (productId) => {
    setCart(cart.filter((cartItem) => cartItem.id !== productId));
    return;
  };
  return {
    cart,
    products,
    productExistInCart,
    addProductToCart,
    RemoveProductCart,
  };
};