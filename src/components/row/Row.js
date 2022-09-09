import React,{useState,useEffect} from 'react'
import axios from '../../axios'
import requests from '../../requests'
import './Row.css'

export default function Row({title,fetchUrl}) {
  const [movies,setMovies]=useState([]);


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results
      ); 
    }
    fetchData();
  }, [fetchUrl]);

console.log(movies)
const base_url = "https://image.tmdb.org/t/p/original/";
  return (
    <div className='row'>

      <h2>{title}</h2>

      <div className='row_posters'>
          {
            movies.map(movie=>(
              <img
              className='row_poster'
              key={movie.id}
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.name}
              
              />

            ))
          }
      </div>


    </div>
  )
}
