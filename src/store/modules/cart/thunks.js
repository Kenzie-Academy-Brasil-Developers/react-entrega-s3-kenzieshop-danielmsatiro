import { addToCart, incrementToProduct } from "./actions";

export const addToCartThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = [...list, product];

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(addToCart(product));
};

export const incrementToProductThunk = (product) => (dispatch) => {
  const list = JSON.parse(localStorage.getItem("cart")) || [];

  const newList = list.map((item) =>
    item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
  );

  localStorage.setItem("cart", JSON.stringify(newList));

  dispatch(incrementToProduct(product));
};
