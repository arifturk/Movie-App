import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.listen(8800, () => {
  console.log("Connected to backend!");
});

let movies = [
  { id: 1, name: "Interstellar", genre: "Sci-Fi", year: 2014 },
  { id: 2, name: "Horizon: An American Saga", genre: "Western", year: 2024 },
];

app.get("/movies", (req, res) => {
  res.json(movies);
});

app.get("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id == req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send("Movie not found");
  }
});

app.post("/movies", (req, res) => {
  const newMovie = {
    id: movies.length + 1,
    name: req.body.name,
    genre: req.body.genre,
    year: req.body.year,
  };
  movies.push(newMovie);
  res.status(201).json(newMovie);
});

app.put("/movies/:id", (req, res) => {
  const movie = movies.find((m) => m.id == req.params.id);
  if (movie) {
    movie.name = req.body.name;
    movie.genre = req.body.genre;
    movie.year = req.body.year;
    res.json(movie);
  } else {
    res.status(404).send("Movie not found");
  }
});

app.delete("/movies/:id", (req, res) => {
  const index = movies.findIndex((m) => m.id == req.params.id);
  if (index !== -1) {
    movies.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).send("Movie not found");
  }
});
