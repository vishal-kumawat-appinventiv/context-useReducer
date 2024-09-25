import React, { createContext, useContext } from "react";
import { ActionType, CartState } from "../types/type";
import {
  ADD_ITEM,
  CLEAR_CART,
  REMOVE_ITEM,
  UPDATE_QUANTITY,
} from "../utils/constant";

export const initialState: CartState = {
  cartItems: [],
};

export const cartReducer = (
  state: CartState,
  action: ActionType
): CartState => {
  switch (action.type) {
    case ADD_ITEM: {
      const itemIdx = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIdx !== -1) {
        const item = state.cartItems[itemIdx];
        const newCartItems = [...state.cartItems];
        newCartItems[itemIdx] = { ...item, quantity: item.quantity + 1 };
        return { ...state, cartItems: newCartItems };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    }
    case REMOVE_ITEM: {
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload),
      };
    }
    case UPDATE_QUANTITY: {
      // const itemIdx = state.cartItems.findIndex(
      //   (item) => item.id === action.payload.id
      // );
      // const newCartItems = [...state.cartItems];
      // newCartItems[itemIdx].quantity = action.payload.quantity;
      // return { ...state, cartItems: newCartItems };
      const temp = state.cartItems.slice();
      temp[action.payload.index].quantity = action.payload.quantity;
      return { ...state, cartItems: temp };
    }
    case CLEAR_CART: {
      return { ...state, cartItems: [] };
    }
    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<ActionType>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const useCart = () => {
  return useContext(CartContext);
};
