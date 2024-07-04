import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Book from "./Book";
import books from "./books";

const BookList = () => {
  return (
    <>
    <h1>The Best Selling Books</h1>
    <section className="booklist">
      {books.map((book, index) => {
          return <Book {...book} key={book.id} index={index}/>;
        })}
    </section>
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
