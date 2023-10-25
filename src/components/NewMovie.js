import { useState, useRef } from "react";
import "./NewMovie.css";

export default function NewMovie(props) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [genre, setGenre] = useState("action");

  //   const title = useRef();
  //   const date = useRef();
  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const resetForm = () => {
    setTitle("");
    setDate("");
    setGenre("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const event = {
      title: title,
      date: date,
      genre: genre,
      id: Math.floor(Math.random() * 10000),
    };
    props.addMovie(event);
    resetForm();
  };

  return (
    <form
      className="new-event-form"
      onSubmit={handleSubmit}>
      <label>
        <span>Movie title</span>
        <input
          type="trxt"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label>
        <span>Movie Date</span>
        <input
          type="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </label>
      <label>
        <span>Movie Genre</span>
        <select onChange={(e) => setGenre(e.target.value)}>
          <option value="Action">Action</option>
          <option value="horror">Horror</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="thriller">Thriller</option>
          <option value="adventure">Adventure</option>
          <option value="romantic">Romantic</option>
          <option value="fantasy">Fantasy</option>
          <option value="western">Western</option>
        </select>
      </label>
      <button>submit</button>

      <p onClick={resetForm}>Reset Form</p>
    </form>
  );
}
