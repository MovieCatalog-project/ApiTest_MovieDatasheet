import React, { useContext } from 'react'
import { ApiContext } from '../context/ApiContext'
import './Poster.css'

const Poster = () => {

  const {movieData} = useContext(ApiContext)

  return (
    <div>
        <img src={`https://image.tmdb.org/t/p/original${movieData.poster_path}`} 
        alt={movieData.title || 'Movie Poster'}  />
    </div>
  )
}

export default Poster