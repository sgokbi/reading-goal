import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const completedReadingBooks = props.completedReadingCart;

  let time = 0;
  let bookNames = [];

  for (const books of completedReadingBooks) {
    const readTime = books.readTime;
    const firstNumber = parseInt(readTime.slice(0, 1));
    time = time + firstNumber;

    bookNames.push(books.name);
  }

  const removeSameBookListed = [...new Set(bookNames)];

  return (
    <div className="cart">
      <div className="cart-heading">
        <h3>Spent time on read: {time} hours</h3>
      </div>
      <div className="read-list-books">
        <h3>Completed books: {removeSameBookListed.length}</h3>
        {removeSameBookListed.map((name) => (
          <div>
            <h5>{name}</h5>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
