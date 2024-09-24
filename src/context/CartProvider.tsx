import { ReactNode, useEffect, useReducer } from "react";
import { CartContext, cartReducer, initialState } from "./CartContext";

const getInitialCartState = () => {
  const cart = localStorage.getItem("cart");
  return cart ? { cartItems: JSON.parse(cart) } : initialState;
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(
    cartReducer,
    initialState,
    getInitialCartState
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cartItems));
  }, [state.cartItems]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
