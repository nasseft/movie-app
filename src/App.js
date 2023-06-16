import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  const [movies, setMovies] = useState([
    {
      title: 'el camino',
      description: 'best movie to wartch',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/4/4e/El_camino_bb_film_poster.jpg',
      rating: 7.5,
    },
    {
      title: 'mission impossible',
      description: 'recommended to watch',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_FMjpg_UX1000_.jpg',
      rating: 8.2,
    },
  ]);

  const [filteredMovies, setFilteredMovies] = useState(movies);

  const handleAddMovie = (movie) => {
    setMovies([...movies, movie]);
    setFilteredMovies([...movies, movie]);
  };

  const handleFilter = ({ title, rating }) => {
    let filtered = movies;

    if (title) {
      filtered = filtered.filter((movie) =>
        movie.title.toLowerCase().includes(title.toLowerCase())
      );
    }

    if (rating) {
      filtered = filtered.filter((movie) => movie.rating >= rating);
    }

    setFilteredMovies(filtered);
  };

  return (
    <div className="app">
      <h1>Movie App</h1>
      <Filter onFilter={handleFilter} />
      <MovieList movies={filteredMovies} />
      {/* Add a form or any other way to add new movies */}
    </div>
  );
};

export default App;
