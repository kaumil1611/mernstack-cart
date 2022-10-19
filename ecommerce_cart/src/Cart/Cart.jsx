import React, { createContext, useReducer, useEffect } from "react";
import "./Cart.css";
import { Product } from "./Product";
import ContextCart from "./ContextCart";
import { reducer } from "./Reducer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

export const CartContext = createContext();

const initialState = {
  item: Product,
  totalAmount: 0,
  totalItem: 0,
};

const Cart = () => {
  const navigate = useNavigate();

  useEffect(() => {
    cartPage();
  }, []);

  const cartPage = async () => {
    axios
      .get("/cart", {
        headers: headers,
        withCredentials: true,
      })
      .then((res) => {
        if (!res.status === 200) {
          const error = new Error(res.error);

          throw error;
        }
      })
      .catch((err) => {
        navigate("/login");
      });
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  const increment = (id) => {
    return dispatch({
      type: "INCREMENT",
      payload: id,
    });
  };

  const decrement = (id) => {
    return dispatch({
      type: "DECREMENT",
      payload: id,
    });
  };

  // I will use the useEffect to update the data
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.item]);

  return (
    <CartContext.Provider value={{ ...state, increment, decrement }}>
      <ContextCart />
    </CartContext.Provider>
  );
};

export default Cart;
