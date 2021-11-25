import { useDispatch, useSelector } from "react-redux";
import { Container } from "./style";
import {
  addToCartThunk,
  incrementToProductThunk,
} from "../../store/modules/cart/thunks";

export const Shop = () => {
  const { products, cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const addNewProduct = (product) => {
    dispatch(addToCartThunk(product));
  };

  console.log(cart);

  const incrementQuantity = (product) => {
    dispatch(incrementToProductThunk(product));
  };

  const handleShop = (product) => {
    if (cart.every((item) => item.id !== product.id)) {
      return addNewProduct({ ...product, quantity: 1 });
    }
    return incrementQuantity(product);
  };

  return (
    <Container>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <span>{product.price}</span>
            <button onClick={() => handleShop(product)}>
              Adicionar ao Carrinho
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
};
