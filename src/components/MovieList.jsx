import React from 'react'
import MovieCard from './MovieCard'
import { Link } from 'react-router-dom'

const MovieList = ({ movies }) => {
  return (
    // Mapping the cards
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {movies.map((movie) => (
        <Link to={`/movie/${movie.id}`} key={movie.id}>
          <MovieCard {...movie} />
        </Link>
      ))}
    </div>
  )
}

export default MovieList
