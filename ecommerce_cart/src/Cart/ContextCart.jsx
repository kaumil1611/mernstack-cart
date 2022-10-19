import React, { useContext } from "react";

import Items from "./Items";
import { CartContext } from "./Cart";

const ContextCart = () => {
  const { item, totalAmount } = useContext(CartContext);

  return (
    <>
      <div className="container-fluid py-3">
        <div className="row justify-content-center">
          <h4 className="text-center py-3 text-decoration-underline">
            My Cart
          </h4>
          <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 py-4">
            <div>
              <table className="table table-light table-hover m-0">
                <tbody>
                  {item.map((curItem) => {
                    return <Items key={curItem.id} {...curItem} />;
                  })}
                </tbody>
              </table>
            </div>
            <div className="d-flex justify-content-between py-5">
              <h3>Total Price: ${totalAmount}</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContextCart;
