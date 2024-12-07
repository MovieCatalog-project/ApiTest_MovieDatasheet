import { createContext, useEffect, useState } from "react";
import { TMDBBaseAxios, TMDBPosterAxios } from "./TMDBAxios";


export const ApiContext = createContext("")

export const ApiProvider = ({children}) => {

    const [movieData, setMovieData] = useState({})
    const apiKey = "d9ea67ec4284bd39326bb9b2ae5fd590"

    function GetFilmData(id) {
        if (!id) {
          console.error("No movie ID provided!");
          return;
        }
    
        TMDBBaseAxios.get(`/${id}?api_key=${apiKey}`)
          .then((response) => {
            setMovieData(response.data); // Update movie data
          })
          .catch((error) => {
            console.error("Error fetching movie data:", error);
          });
    }

   

    useEffect (()=>{

    },[])

    return(
        <ApiContext.Provider value={{GetFilmData, movieData, apiKey}}>{children}</ApiContext.Provider>
    );
}