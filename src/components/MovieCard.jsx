import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-router-dom"

const MovieCard = ({ movie }) => {
  const { id, title, poster_path, vote_average } = movie

  // Handle image URL for both Chinese movies and TMDB movies
  const imageUrl = poster_path?.startsWith('http') 
    ? poster_path 
    : `https://image.tmdb.org/t/p/w500${poster_path}`

  useEffect(()=>{
    AOS.init()
  },[])

  // For Chinese movies (id >= 1000), pass the movie data in state
  // For TMDB movies, let the details component fetch from API
  const isChineseMovie = id >= 1000

  return (
    <Link 
      to={`/movie/${id}`} 
      state={isChineseMovie ? { movie } : undefined}
    >
      <div className='space-y-3'>
        <div className='p-5 space-y-3' data-aos='fade-left' data-aos-duration='800'>
          <img
            src={imageUrl}
            className='shadow-lg drop-shadow-lg w-80 h-80 object-cover mx-auto'
            alt={title}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/500x750?text=No+Image'
            }}
          />
          <div className='capitalize font-bold text-center text-md text-white'>
            {movie.title}
          <p className="text-gray-400 text-sm text-center">
            Rating: {vote_average}
          </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default MovieCard