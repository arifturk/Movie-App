import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditMovie() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovieDetails();
  }, []);

  const fetchMovieDetails = async () => {
    const response = await axios.get(`http://localhost:8800/movies/${id}`);
    setName(response.data.name);
    setGenre(response.data.genre);
    setYear(response.data.year);
  };

  const updateMovie = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8800/movies/${id}`, { name, genre, year });
    navigate("/movies");
  };

  return (
    <div className="container mx-auto mt-10">
      <h2>Edit Movie</h2>
      <form onSubmit={updateMovie}>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Genre</label>
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 text-sm font-medium">Year</label>
          <input
            type="text"
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
          Update Movie
        </button>
      </form>
    </div>
  );
}

export default EditMovie;
