import { CartContainer } from "../../components/CartContainer/CartContainer";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import { useCartContext } from "../../context/CartContext";

const CheckoutPage = () => {
  // const { cartList } = useCartContext();

  // if (cartList[0] === undefined) {
  //   return (
  //     <div>
  //       <CartContainer />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <CartContainer />
  //       <CheckoutForm />
  //     </div>
  //   );
  // }

  return (
    <div>
      <CartContainer />
      <CheckoutForm />
    </div>
  );
};

export default CheckoutPage;
