import { CART_ADD, CART_INCREMENT } from "./actionTypes";

export const addToCart = (product) => ({
  type: CART_ADD,
  product,
});

export const incrementToProduct = (product) => ({
  type: CART_INCREMENT,
  id: product.id,
});
