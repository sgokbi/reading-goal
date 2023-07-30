import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import DisplayBooks from "../../DisplayBooks/DisplayBooks";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [completedReadingCart, setCompletedReadingCart] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
      });
  }, []);

  const addToCompletedReading = (book) => {
    const newCart = [...completedReadingCart, book];

    setCompletedReadingCart(newCart);
  };

  return (
    <div className="container">
      <div className="home-container">
        <div className="books-container">
          {books.map((book) => (
            <DisplayBooks
              key={book.id}
              book={book}
              addToCompletedReading={addToCompletedReading}
            ></DisplayBooks>
          ))}
        </div>

        <div className="cart-container">
          <Cart completedReadingCart={completedReadingCart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
