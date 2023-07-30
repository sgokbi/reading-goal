import React, { useEffect, useState } from "react";
import "./Home.css";
import Cart from "../Cart/Cart";
import DisplayBooks from "../DisplayBooks/DisplayBooks";
import { addBookToDB, getBookFromDB } from "../Utilitis/localStorage";

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
    addBookToDB(book.id);
  };

  useEffect(() => {
    const storedBookInDB = getBookFromDB();
    const savedBookList = [];

    // get id from the added books in DB
    for (const id in storedBookInDB) {
      // get book from the books state by using id
      const addedBook = books.find((product) => product.id === id);

      if (addedBook) {
        savedBookList.push(addedBook);
      }
    }

    // add the books to the saved book list
    setCompletedReadingCart(savedBookList);
  }, [books]);

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
