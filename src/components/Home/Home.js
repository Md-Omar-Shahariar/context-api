import React, { useState } from "react";
import useTshirts from "../../hooks/useTshirts";
import Cart from "../Cart/Cart";
import TShirt from "../TShirt/TShirt";
import "./Home.css";

const Home = () => {
  const [tShirts, setTShirts] = useTshirts();
  const [cart, setCart] = useState([]);
  const handleAddToCart = (selectedItem) => {
    const exist = cart.find((tShirt) => tShirt._id === selectedItem._id);
    if (!exist) {
      const newCart = [...cart, selectedItem];
      setCart(newCart);
    } else {
      alert("Item Added");
    }
  };
  const handleRemove = (removeItem) => {
    const rest = cart.filter((tShirt) => tShirt._id !== removeItem._id);
    setCart(rest);
  };

  return (
    <div className="home-container">
      <div className="tshirt-container">
        {tShirts.map((tShirt) => (
          <TShirt
            tShirt={tShirt}
            key={tShirt._id}
            handleAddToCart={handleAddToCart}
          ></TShirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} handleRemove={handleRemove}></Cart>
      </div>
    </div>
  );
};

export default Home;
