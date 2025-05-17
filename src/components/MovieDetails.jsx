import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Button from './Button'
import Navbar from './Navbar'

const MovieDetails = ({movies}) => {
    const {id} = useParams()
    const movie = movies.find((movie)=>movie.id === parseInt(id))
    if(!movie){
      return <p>Movie not found.......</p>
    }
  return (
    <div className='mt-25'>
      <Navbar />
    <div className='px-10'>
        <div className="mt-5">
          <iframe
            src={movie.trailer}
            title="Movie Trailer"
            frameBorder="0"
            allowFullScreen
            className='lg:max-w-screen lg:h-115 w-full h-100'
          ></iframe>
        </div>
            {/* <p>{movie.trailer}</p> */}
            <div className='mt-5 space-y-4'>
              <p className='uppercase font-bold text-2xl'>{movie.title} </p>
              {/* <p>
                Genre: Romantic Comedy, Food, Family
                Episodes: 22
                Language: Mandarin
                Release Year: 2017
              </p> */}
              <p className='font-medium text-sm'>{movie.description} </p>
              <p className='font-semibold'>Rating: {movie.rating} </p>
              <Link to="/">
                <Button text={'← Back to Home'} className={' px-4 py-2 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1A2533]'}/>
              </Link>
            </div>
      </div>
    </div>
  )
}

export default MovieDetails
