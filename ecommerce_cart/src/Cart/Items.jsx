import "./Cart.css";
import React, { useContext } from "react";
import { CartContext } from "./Cart";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { increment, decrement } = useContext(CartContext);
  return (
    <>
      <tr className="align-middle">
        <td>
          <img src={img} className="img-cart" alt={title} />
        </td>
        <td>{title}</td>
        <td>{description}</td>
        <td>${price}</td>
        <td>Quantity: {quantity}</td>
        <td>
          <button
            onClick={() => decrement(id)}
            className="btn btn-outline-dark ms-1"
          >
            -
          </button>
          <button
            onClick={() => increment(id)}
            className="btn btn-outline-dark ms-1"
          >
            +
          </button>
        </td>
      </tr>
    </>
  );
};

export default Items;
