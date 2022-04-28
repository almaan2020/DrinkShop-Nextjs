import { createContext, useContext, useState, useCallback } from "react";
import { pull } from "lodash";

export const CartContext = createContext();

const CartProvider = (props) => {
  const [cartIds, setCartIds] = useState([]);

  const fillCartIds = useCallback(() => {
    let cartIds = localStorage.getItem("cartProducts");
    //convert localStorage to array of numbers:
    cartIds = cartIds ? cartIds.split(",").map((item) => parseInt(item)) : [];
    setCartIds([...cartIds]);
  }, [setCartIds]);

  const handleCart = (id) => {
    if (!cartIds.includes(id)) cartIds.push(id);
    localStorage.removeItem("cartProducts");
    localStorage.setItem("cartProducts", cartIds);
    setCartIds([...cartIds]);
  };

  const handleRemoveCart = (id) => {
    if (cartIds.includes(id)) pull(cartIds, id);
    localStorage.removeItem("cartProducts");
    localStorage.setItem("cartProducts", cartIds);
    setCartIds([...cartIds]);
  };

  return (
    <CartContext.Provider
      value={{
        cartIds,
        fillCartIds,
        handleCart,
        handleRemoveCart,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;

// Export useContext Hook.
export function useCartContext() {
  return useContext(CartContext);
}
