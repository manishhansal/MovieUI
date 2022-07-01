import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { data } from './data.js';

const Movies = () => {
  return (
    <div className='MovieList'>
      {data.map((movie) => {
        return (
          <Link to={`/movies/${movie.id}`}>
            <div className='Movie'>
              <img style={{width: '100px', height:'100px', marginRight:'5px', cursor:'pointer'}} src={movie.avator} alt='img' />
              <h3 style={{marginTop:'50px', cursor:'pointer'}} key={movie.id}>{movie.movie_name }</h3>
            </div>
          </Link>
        )
      }) }
    </div>
  )
}

export default Movies