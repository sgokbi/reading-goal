import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-heading">
        <h3>Spent time on read: 177 min</h3>
      </div>
      <div className="read-list-books">
        <h3>Completed books: 50</h3>
        <div>
          <h5>The book Thief</h5>
        </div>
      </div>
    </div>
  );
};

export default Cart;
