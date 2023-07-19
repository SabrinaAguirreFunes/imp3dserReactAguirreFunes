import { createContext, useContext, useState } from "react";
import pricePerml from "../components/PricePerml/PricePerml";

const CartContext = createContext();

export const useCartContext = () => useContext(CartContext);

const initialState = () => [];

export const CartProvider = ({ children }) => {
  const [cartList, setCartList] = useState(initialState);

  const addCart = (newProduct) => {
    const idProductCart = cartList.findIndex(
      (product) => product.id === newProduct.id
    );
    if (idProductCart !== -1) {
      cartList[idProductCart].quantity += newProduct.quantity;
      setCartList([...cartList]);
      return;
    }
    setCartList([...cartList, newProduct]);
  };

  const totalPrice = () =>
    cartList.reduce(
      (count, product) =>
        (count += product.quantity * product.cost * pricePerml),
      0
    );
  const totalQuantity = () =>
    cartList.reduce((count, product) => (count += product.quantity), 0);
  const deleteProduct = (id) =>
    setCartList(cartList.filter((prod) => prod.id !== id));
  const clearCart = () => setCartList(initialState);

  return (
    <CartContext.Provider
      value={{
        cartList,
        addCart,
        clearCart,
        totalPrice,
        totalQuantity,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
