import React, { useState } from 'react';
import './App.scss';
import { MoviesList } from './components/MoviesList';
import { FindMovie } from './components/FindMovie';
import data from './api/movies.json';

export const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>(data);

  const addNewMovie = (newMovie: Movie) => {
    if (newMovie && !movies.find((movie: Movie) => movie.imdbId === newMovie.imdbId)) {
      setMovies(() => [...movies, newMovie]);
    }
  };

  return (
    <div className="page">
      <div className="page-content">
        <MoviesList movies={movies} />
      </div>
      <div className="sidebar">
        <FindMovie onAdd={addNewMovie} />
      </div>
    </div>
  );
};
