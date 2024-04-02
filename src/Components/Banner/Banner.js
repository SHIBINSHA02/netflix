import React, { useEffect, useState } from 'react';
import './Banner.css';
import { orginals, imageUrl } from '../constants/constants';
import instance from '../axios';

function Banner() {
  // State variable to store the fetched movie data
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetching movie data from TMDb API when component mounts
    instance.get(orginals)
      .then(response => {
        // Setting the fetched movie data in the state
        setMovies(response.data.results);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className='banner' style={{backgroundImage: `url(${imageUrl}/${movies.length > 0 && movies[0].backdrop_path})`}}>
      <div className='content'>
    
        <h1 className='title'>{movies.length > 0 && movies[0].name}</h1>
        <div className='banner_button'>
          <button className='button'>Play</button>
          <button className='button'>My List</button>
          </div>
          
          <h1 className='description'>{movies.length > 0 && movies[0].overview}</h1>
          </div>
      <div className="fade_bottom"></div>
    </div>
  );
  }

export default Banner;
