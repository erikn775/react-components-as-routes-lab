import React from 'react';
import { directors } from '../data';

const listItems = directors.map(director => <li>director.movies</li>)
const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map(director => 
        <div>director.name
          <ul>{listItems}</ul>
        </div>
      )}
    </div>
  );
}

export default Directors
