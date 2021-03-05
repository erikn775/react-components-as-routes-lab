import React from 'react';
import { movies } from '../data';

let movieGenre = () => {
  
    for(let i = 0; i < movie.genres.length; i++){
      return <li>movie.genres[i]</li>
    }

}

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map(movie => <div>movie.title movie.time </div>)}
    </div>
  );
};

export default Movies;
