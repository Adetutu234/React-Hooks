import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";
import { getMovieDetails } from "../api/tmdb";
import Button from './Button'
import Navbar from './Navbar'

const MovieDetails = () => {
  const {id} = useParams()
  const location = useLocation()
  const [movie, setMovie] = useState(null)
  const [trailerKey, setTrailerKey] = useState(null)
  
  // Check if movie data is passed from location state (for Chinese movies)
  const passedMovie = location.state?.movie

  useEffect(() => {
    if (passedMovie) {
      // Use the passed movie data (for Chinese movies)
      setMovie(passedMovie)
      // For Chinese movies, use trailer if available
      if (passedMovie.trailer) {
        // Extract YouTube video ID from URL
        if (passedMovie.trailer.includes('/embed/')) {
          const videoId = passedMovie.trailer.split('/embed/')[1]?.split('?')[0]
          setTrailerKey(videoId)
        } else {
          setTrailerKey(passedMovie.trailer.split('v=')[1]?.split('&')[0])
        }
      }
    } else {
      // Fetch from TMDB API (for TMDB movies)
      const fetchMovie = async () => {
        try {
          const data = await getMovieDetails(id)
          setMovie(data)
          
          // Fetch trailer
          const trailerResponse = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
          const trailerData = await trailerResponse.json()
          const trailer = trailerData.results.find(video => video.type === 'Trailer' && video.site === 'YouTube')
          if (trailer) {
            setTrailerKey(trailer.key)
          }
        } catch (error) {
          console.error("Error fetching movie details:", error)
        }
      }
      fetchMovie()
    }
  }, [id, passedMovie])

  if(!movie){
    return <p className="text-center text-white mt-10">Loading...</p>
  }

  // Handle image URL for both Chinese movies and TMDB movies
  const imageUrl = movie.poster_path?.startsWith('http') 
    ? movie.poster_path 
    : `https://image.tmdb.org/t/p/w500${movie.poster_path}`

  const description = movie.overview || movie.description || 'No description available.'

  return (
    <div className='mt-25 min-h-screen bg-[#1A2533]'>
      <Navbar />
      <div className='px-10 py-8 text-white'>
        
        {/* Movie Title */}
        <div className='text-center mb-8'>
          <h1 className='uppercase font-bold text-4xl mb-4'>{movie.title}</h1>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-8'>
          {/* Movie Poster */}
          <div className='flex justify-center'>
            <img 
              src={imageUrl} 
              className='rounded-lg shadow-2xl max-w-full'
              style={{ maxHeight: '600px' }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/500x750?text=No+Image'
              }} 
            />
          </div>

          {/* Description and Trailer */}
          <div className='space-y-6'>
            {/* Long Description */}
            <div>
              <h2 className='text-2xl font-bold mb-3'>Overview</h2>
              <p className='text-gray-300 leading-relaxed text-lg mb-4'>
                {description}
              </p>
              
              {/* Rating under overview */}
              <div className='flex items-center gap-4 bg-gray-800 p-4 rounded-lg'>
                <span className='bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold text-lg'>
                  ⭐ {movie.vote_average}/10
                </span>
                <span className='text-gray-300'>
                  {movie.vote_count ? `${movie.vote_count.toLocaleString()} votes` : 'No ratings'}
                </span>
              </div>
            </div>

            {/* YouTube Trailer */}
            {trailerKey && (
              <div>
                <h2 className='text-2xl font-bold mb-3'>Trailer</h2>
                <div className='aspect-w-16 aspect-h-9'>
                  <iframe
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title={`${movie.title} Trailer`}
                    className='w-full h-64 md:h-96 rounded-lg shadow-lg'
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            )}

            {!trailerKey && (
              <div className='bg-gray-700 p-6 rounded-lg text-center'>
                <p className='text-gray-400'>Trailer not available</p>
              </div>
            )}
          </div>
        </div>

        {/* Back Button */}
        <div className='text-center'>
          <Link to="/">
            <Button
              text={'← Back to Home'}
              className={'px-6 py-3 bg-[#2C3E50] text-white rounded-lg hover:bg-[#34495E] transition-colors'}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
