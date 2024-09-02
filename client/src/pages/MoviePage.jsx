import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MoviePage() {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const response = await axios.get("http://localhost:8800/movies");
    setMovies(response.data);
  };

  const deleteMovie = async (id) => {
    await axios.delete(`http://localhost:8800/movies/${id}`);
    fetchMovies();
  };

  const navigateToAddMovie = () => {
    navigate("/add-movie");
  };

  const navigateToEditMovie = (id) => {
    navigate(`/edit-movie/${id}`);
  };

  return (
    <div className="container mx-auto mt-10">
      <button
        onClick={navigateToAddMovie}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded">
        Add Movie
      </button>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full border border-neutral-200 text-center text-sm font-light text-surface dark:border-white/10 dark:text-white">
          <thead className="border-b border-neutral-200 font-medium dark:border-white/10">
            <tr>
              <th className="border-e border-neutral-200 px-6 py-4 dark:border-white/10">#</th>
              <th className="border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                Movie Name
              </th>
              <th className="border-e border-neutral-200 px-6 py-4 dark:border-white/10">Genre</th>
              <th className="border-e border-neutral-200 px-6 py-4 dark:border-white/10">Year</th>
              <th className="border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id} className="border-b border-neutral-200 dark:border-white/10">
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  {movie.id}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  {movie.name}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  {movie.genre}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  {movie.year}
                </td>
                <td className="whitespace-nowrap border-e border-neutral-200 px-6 py-4 dark:border-white/10">
                  <button
                    onClick={() => navigateToEditMovie(movie.id)}
                    className="mr-2 px-3 py-1 bg-yellow-500 text-white rounded">
                    Update
                  </button>
                  <button
                    onClick={() => deleteMovie(movie.id)}
                    className="px-3 py-1 bg-red-600 text-white rounded">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MoviePage;
