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
      const itemExists = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (itemExists) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
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
      return {
        ...state,
        cartItems: state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
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
