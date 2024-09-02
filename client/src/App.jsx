import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MoviePage from "./pages/MoviePage";
import AddMovie from "./pages/AddMovie";
import EditMovie from "./pages/EditMovie";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/add-movie" element={<AddMovie />} />
          <Route path="/edit-movie/:id" element={<EditMovie />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
