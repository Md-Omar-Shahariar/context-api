import React from "react";

const Cart = ({ cart, handleRemove }) => {
  return (
    <div>
      <h2>Item Selected : {cart.length}</h2>
      {cart.map((tShirt) => (
        <p>
          {tShirt.name}
          <button onClick={() => handleRemove(tShirt)}>x</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
