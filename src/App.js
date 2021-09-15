import React from "react";
import "./styles.css";
import { useState } from "react";

const bookDB = {
  javascript: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
    { name: "JavaScript: The Good Parts", rating: "4.5/5" },
    { name: "A Smarter Way to Learn JavaScript", rating:"4.6/5" },
    { name: "JavaScript for Kids: A Playful Introduction to Programming", rating:"4.5/5"  }
  ],

  fiction: [
    { name: "Shiva Trilogy",rating: "5/5" },
    { name: "Harry Potter and the Sorcerer's Stone", rating: "4.5/5" },
    { name: "A Thousand Splendid Suns", rating: "4.4/5" },
    { name: "The Secret of the Nagas", rating: "4.1/5"  }

    
  ],
  business: [
    {
      name: "Never Split the Difference",
      rating: "3.5/5"
    },
    {
      name: "Loonshots",
      rating: "5/5"
    },
    {name: "How to win friends and influence people.", rating: "4.5/5"},
    {name: "The 4-Hour Workweek", rating: "4/5"}
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> 📚📚📚 Good-Books </h1>
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