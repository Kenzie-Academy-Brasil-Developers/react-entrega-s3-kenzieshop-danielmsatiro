import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  decrementToProductThunk,
  incrementToProductThunk,
  removeToCartThunk,
} from "../../store/modules/cart/thunks";
import { Container } from "./style";

export const Cart = () => {
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  const removeProduct = (product) => {
    dispatch(removeToCartThunk(product));
  };

  return (
    <Container>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <p>
              Quant:{" "}
              {product.quantity === 0
                ? removeProduct(product)
                : product.quantity}
            </p>
            <button onClick={() => dispatch(incrementToProductThunk(product))}>
              +
            </button>
            <button onClick={() => dispatch(decrementToProductThunk(product))}>
              -
            </button>
            <span> Total {product.price * product.quantity}</span>
            <button onClick={() => removeProduct(product)}>
              Remover produto
            </button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Resumo</h2>
        <p>{cart.length === 1 ? `1 produto` : `${cart.length} produtos`}</p>
        <p>
          R$ {cart.reduce((acc, item) => acc + item.quantity * item.price, 0)}
        </p>
        <button>Finalizar Pedido</button>
      </div>
    </Container>
  );
};
