import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ movies }) => {
  return (
    // Mapping the cards
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} {...movie} />
      ))}
    </div>
  )
}

export default MovieList
