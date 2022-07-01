import React from 'react';
import '../App.css';
import { data } from './data.js';
import { Link } from 'react-router-dom';

const Favorite = () => {
  return (
    <div className='FavoriteList'>
      {data.filter((item) => item.is_fav).map((movie) => {return (
          <Link to={`/movies/${movie.id}`}>
            <div className='Movie'>
              <img style={{width: '100px', height:'100px', marginRight:'5px', cursor:'pointer'}} src={movie.avator} alt='img' />
              <h3 style={{marginTop:'50px', cursor:'pointer'}} key={movie.id}>{movie.movie_name }</h3>
            </div>
          </Link>
        )})}
    </div>
  )
}

export default Favorite