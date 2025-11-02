import React, { useEffect, useState } from "react";

const Cart = ({ cartItems, onRemoveFromCartClicked }) => {
  const [cartItemsCount, setCartItemsCount] = useState({});

  useEffect(() => {
    cartItems.map((ele) => {});
  }, [cartItems]);

  return <div></div>;
};

export default Cart;
