
import './RowPost.css'
import React, { useEffect, useState } from 'react';
import instance from '../axios';
import {  imageUrl } from '../constants/constants';
function RowPost(props) {
  const[movies,setMovies]=useState([]);
  useEffect(()=>{
    instance.get(props.url).then(response=>{
      console.log(response.data)
      setMovies(response.data.results);
    })
    
  })
  
  return (
    <div className='row'>
      <h2 className='title'>{props.title}</h2>
      <div className="posters">
        {movies.map(obj=>
      <img className={props.isSmall ?'smallPoster' :'poster'} src={`${imageUrl}/${obj.backdrop_path}`} alt="card_post"></img>
        )}
      </div>
    </div>
  )
}

export default RowPost
