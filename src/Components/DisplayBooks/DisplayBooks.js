import React from "react";
import "./DisplayBooks.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";

const DisplayBooks = (props) => {
  const { id, name, bookCover, author, authorImg, category, readTime } =
    props.book;
  const addToCompletedReading = props.addToCompletedReading;

  return (
    <div className="book-container">
      <div className="cover-img">
        <img src={bookCover} alt="" />
      </div>

      <div className="info">
        <h2>{name}</h2>

        <div className="author">
          <div className="author-img">
            <img src={authorImg} alt="" />
          </div>
          <p>{author}</p>
        </div>

        <p>
          <span className="category"> Category: </span> {category}
        </p>
        <div className="read-status">
          <p>
            <FontAwesomeIcon
              className="bookmark"
              icon={faBookmark}
            ></FontAwesomeIcon>
            {readTime} to read
          </p>
          <p
            onClick={() => addToCompletedReading(props.book)}
            className="mark-btn"
          >
            Mark as read
          </p>
        </div>
      </div>
    </div>
  );
};

export default DisplayBooks;

/* <div className="row">
<div className="author">
  <div className="author-img">
    <img src={authorImg} alt="" />
  </div>
  <p>{author}</p>
</div>
<div className="read-status">
  <p>
    {readTime} to read
    <FontAwesomeIcon icon={faBookmark}></FontAwesomeIcon>
  </p>
  <a href="/">Mark as read</a>
</div>
</div> */
