import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateMovie = () => {
  const [title, setTitle] = useState("");
  const [director, setDirector] = useState("");
  const [rating, setRating] = useState(0);
  const [genre, setGenre] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("https://crudcrud.com/api/e6df3548c2bd4e0d925c9d788f20a0c5/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        director,
        rating,
        genre,
        releaseDate,
      }),
    }).then(() => {
      setTitle("");
      setDirector("");
      setRating(0);
      setGenre("");
      setReleaseDate("");
      navigate("/list");
    });
  };

  return (
    <div>
      <h1>Create Movie</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(parseInt(e.target.value))}
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Release Date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
        />
        <button type="submit">Create</button>
      </form>
    </div>
  );
};

export default CreateMovie;
