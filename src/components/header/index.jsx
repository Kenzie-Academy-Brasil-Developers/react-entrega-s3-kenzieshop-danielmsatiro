import { Badge, IconButton } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export const Header = () => {
  const { cart } = useSelector((store) => store);
  const history = useHistory();

  return (
    <div>
      <span>Logo</span>
      <div>
        <IconButton aria-label="cart" onClick={() => history.push("/cart")}>
          <Badge badgeContent={cart.length} color="primary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <IconButton>Ícone do login</IconButton>
      </div>
    </div>
  );
};
