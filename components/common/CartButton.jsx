import { Button } from "react-bootstrap";
import { useCartContext } from "../../contexts/CartProvider";

const CartButton = (props) => {
  const { handleCart } = useCartContext();
  const { id } = props;

  return (
    <Button
      className="btn-block"
      variant="danger"
      onClick={() => handleCart(id)}
    >
      <i className="fa fa-cart-plus"></i>&nbsp;Add to Cart
    </Button>
  );
};

export default CartButton;
