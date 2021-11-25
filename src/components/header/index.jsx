import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Container } from "./style";
import { MdLogin } from "react-icons/md";

export const Header = () => {
  const { cart } = useSelector((store) => store);
  const history = useHistory();

  return (
    <Container>
      <h1>Baby's Kenzie Shop</h1>
      <div>
        <IconButton aria-label="cart" onClick={() => history.push("/cart")}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <IconButton>
          <MdLogin />
        </IconButton>
      </div>
    </Container>
  );
};
