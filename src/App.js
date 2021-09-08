import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" }
  ],

  fiction: [
    { name: "Shiva Trilogy",rating: "5/5" },
    { name: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5" }
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚 goodbooks </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            className="bookGener"
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div className="books-container" >
        <ul className="list" >
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              className="list-item"
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}