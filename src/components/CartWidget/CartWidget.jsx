import { useCartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { totalQuantity } = useCartContext();

  return <div>🛒 {totalQuantity() !== 0 && totalQuantity()}</div>;
};

export default CartWidget;
