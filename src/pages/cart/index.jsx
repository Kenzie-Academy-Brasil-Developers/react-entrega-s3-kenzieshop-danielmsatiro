import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Container } from "./style";

export const Cart = () => {
  const { cart } = useSelector((store) => store);
  const dispatch = useDispatch();

  return (
    <Container>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt="" />
            <h2>{product.name}</h2>
            <p>Quant: {product.quantity}</p>
            <button>+</button>
            <button>-</button>
            <span> Total {product.price * product.quantity}</span>
            <button>Remover produto</button>
          </li>
        ))}
      </ul>
      <div>Resumo</div>
    </Container>
  );
};
