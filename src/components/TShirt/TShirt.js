import React from "react";
import "./TShirt.css";

const TShirt = (props) => {
  const { handleAddToCart } = props;

  const { name, price, picture } = props.tShirt;
  return (
    <div className="t-shirt">
      <img src={picture} alt="" />
      <h4>Name: {name}</h4>
      <p>Price: ${price}</p>
      <button onClick={() => handleAddToCart(props.tShirt)}>Add to Cart</button>
    </div>
  );
};

export default TShirt;
