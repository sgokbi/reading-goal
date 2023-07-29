import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import DisplayBooks from "../../DisplayBooks/DisplayBooks";

const Home = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);

  return (
    <div className="container">
      <div className="home-container">
        <div className="books-container">
          {books.map((book) => (
            <DisplayBooks key={book.id} book={book}></DisplayBooks>
          ))}
        </div>

        <div className="cart-container">
          <Cart></Cart>
        </div>
      </div>
    </div>
  );
};

export default Home;
