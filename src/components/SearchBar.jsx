import React, { useContext, useState } from 'react'
import { ApiContext } from '../context/ApiContext'

const SearchBar = () => {
    const {GetFilmData, movieData} = useContext(ApiContext)
    const [inputID, setInputID] = useState("")

    const handleInputChange = (e) => {
        setInputID(e.target.value);
      };

      const getMovieData = () => {
        if (inputID.trim() === "") {
          alert("Please enter a valid movie ID!");
          return;
        }
        GetFilmData(inputID); // Call the context function
      };

  return (
    <div>
        <input type="text" placeholder='Enter a movie id here' value={inputID} onChange={handleInputChange}/>
        <button onClick={getMovieData}>Search</button>
    </div>
  )
}

export default SearchBar