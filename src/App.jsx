import React, { useState, useEffect } from 'react'
import { getPopularMovies } from "../src/api/tmdb";
import { Routes ,Route } from 'react-router-dom'
import MovieList from './components/MovieList'
import MovieDetails from './components/MovieDetails'
import Navbar from './components/Navbar'
import Button from './components/Button'

const chineseMovies = [
  {
    id: 1001,
    title: 'kill me love me',
    description: '"Kill Me Love Me" (Chinese: 春花焰 / Chun Hua Yan) is a 2024 Chinese historical romance and revenge drama starring Liu Xueyi and Wu Jinyan. Set against the backdrop of warring kingdoms, the series delves into themes of betrayal, identity, and the complexities of love born from vengeance.',
    poster_path: 'https://m.media-amazon.com/images/M/MV5BMjUzZGEyYWEtZDc0Mi00ZTNmLTkyNDctZDhjMjRlNjlmMTY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg', 
    vote_average: 6,
    backdrop_path: 'https://m.media-amazon.com/images/M/MV5BMjUzZGEyYWEtZDc0Mi00ZTNmLTkyNDctZDhjMjRlNjlmMTY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg',
    trailer: 'https://www.youtube.com/embed/SXnYl2tU6AY'
  },
  {
    id: 1002,
    title: 'who rules the world',
    description: '"Who Rules the World" is a wuxia romance drama that follows the epic journey of two skilled martial artists — Hei Fengxi, a refined and intelligent prince, and Bai Fengxi, a fierce and independent princess.',
    poster_path: 'https://i.pinimg.com/736x/3c/3c/7a/3c3c7a59ef2e8e77d8a63499283722e5.jpg', 
    vote_average: 10,
    backdrop_path: 'https://i.pinimg.com/736x/3c/3c/7a/3c3c7a59ef2e8e77d8a63499283722e5.jpg',
    trailer: 'https://www.youtube.com/embed/KqXabRfHvOI'
  },
  {
    id: 1003,
    title: 'The Princess Weiyoung',
    description: '"The Princess Weiyoung" tells the story of Li Weiyoung, a princess of the Northern Liang kingdom who survives a brutal betrayal that destroys her family.',
    poster_path: 'https://xingsings.wordpress.com/wp-content/uploads/2016/12/20160328115455748.jpg', 
    vote_average: 9,
    backdrop_path: 'https://xingsings.wordpress.com/wp-content/uploads/2016/12/20160328115455748.jpg',
    trailer: 'https://www.youtube.com/embed/w1VQCbAglvQ'
  },
  {
    id: 1004,
    title: 'the story of the pearl girl',
    description: '"The Story of the Pearl Girl" follows the journey of a resilient young woman who escapes the brutal conditions of a pearl harvesting farm.',
    poster_path: 'https://i.pinimg.com/736x/13/56/4d/13564d9041ec8e8d16056019a111ca9d.jpg', 
    vote_average: 10,
    backdrop_path: 'https://i.pinimg.com/736x/13/56/4d/13564d9041ec8e8d16056019a111ca9d.jpg',
    trailer: 'https://www.youtube.com/embed/JfUDfYR-3KM'
  },
  {
    id: 1005,
    title: 'when i fly towards you',
    description: '"When I Fly Towards You" is a heartwarming youth romance drama that centers on Su Zaizai, a lively and cheerful high school student.',
    poster_path: 'https://m.media-amazon.com/images/M/MV5BZThhMzJiZDQtMGE3Yi00NDc1LWFhZDgtOWUwYTAyNDJlNTNlXkEyXkFqcGc@._V1_.jpg', 
    vote_average: 8,
    backdrop_path: 'https://m.media-amazon.com/images/M/V5BZThhMzJiZDQtMGE3Yi00NDc1LWFhZDgtOWUwYTAyNDJlNTNlXkEyXkFqcGc@._V1_.jpg',
    trailer: 'https://www.youtube.com/embed/gtXj5fhacUw'
  },
  {
    id: 1006,
    title: 'love 020',
    description: '"Love 020" follows Bei Weiwei, a beautiful and intelligent computer science major, and Xiao Nai, a top student who is also the campus heartthrob.',
    poster_path: 'https://images.justwatch.com/poster/143406290/s718/love-o2o.jpg', 
    vote_average: 10,
    backdrop_path: 'https://images.justwatch.com/poster/143406290/s718/love-o2o.jpg',
    trailer: 'https://www.youtube.com/embed/tiiN4rDwa8g'
  },
  {
    id: 1007,
    title: 'falling Into Your Smile',
    description: 'Falling Into Your Smile (你微笑时很美) is a 2021 Chinese romantic comedy drama set in the high-stakes world of professional e-sports.',
    poster_path: 'https://image.tmdb.org/t/p/original/ka19734c2ENU74uykVqt1tVTjJI.jpg', 
    vote_average: 7,
    backdrop_path: 'https://image.tmdb.org/t/p/original/ka19734c2ENU74uykVqt1tVTjJI.jpg',
    trailer: 'https://www.youtube.com/embed/T-3WjYwL5-I'
  },
  {
    id: 1008,
    title: 'ski Into Love',
    description: 'Ski Into Love is a 2025 Chinese romantic drama that intertwines themes of personal growth, resilience, and the pursuit of passion.',
    poster_path: 'https://images.justwatch.com/poster/322898722/s718/ski-into-love.jpg', 
    vote_average: 9.5,
    backdrop_path: 'https://images.justwatch.com/poster/322898722/s718/ski-into-love.jpg',
    trailer: 'https://www.youtube.com/embed/YOoA03TpZU8'
  },
  {
    id: 1009,
    title: 'everyone Loves Me',
    description: '"Everyone Loves Me" (Chinese title: 别对我动心 / Bie Dui Wo Dong Xin) is a 2024 Chinese romantic comedy drama.',
    poster_path: 'https://m.media-amazon.com/images/M/MV5BZjNiY2ZhMmUtN2YyOS00NTYxLTk5OGYtYTc2ZmZjZmRhZDZkXkEyXkFqcGc@._V1_.jpg', 
    vote_average: 7,
    backdrop_path: 'https://m.media-amazon.com/images/M/MV5BZjNiY2ZhMmUtN2YyOS00NTYxLTk5OGYtYTc2ZmZjZmRhZDZkXkEyXkFqcGc@._V1_.jpg',
    trailer: 'https://www.youtube.com/embed/8HK2eyUTgVY'
  },
  {
    id: 1010,
    title: 'first frost',
    description: '"The First Frost" is a 2025 Chinese romantic drama that delves into themes of love, trauma, and healing.',
    poster_path: 'https://i.mydramalist.com/VXzRyz_4f.jpg', 
    vote_average: 10,
    backdrop_path: 'https://i.mydramalist.com/VXzRyz_4f.jpg',
    trailer: 'https://www.youtube.com/embed/am6kaxykZlE'
  },
  {
    id: 1011,
    title: 'admist a snowstorm of love',
    description: '"Amidst a Snowstorm of Love" (在暴雪时分) is a 2024 Chinese romance drama that intertwines themes of love, redemption, and billiards.',
    poster_path: 'https://image.tmdb.org/t/p/original/1v5ABzgSMlVJG2acb6S6JAkEM2S.jpg', 
    vote_average: 8,
    backdrop_path: 'https://image.tmdb.org/t/p/original/1v5ABzgSMlVJG2acb6S6JAkEM2S.jpg',
    trailer: 'https://www.youtube.com/embed/rw7QePvBLgY'
  },
  {
    id: 1012,
    title: 'hidden love',
    description: '"Hidden Love" is a 2023 Chinese romantic drama that follows the story of Sang Zhi and her secret crush.',
    poster_path: 'https://image.tmdb.org/t/p/original/8LqPbN3Vm8Xiaum4BwnbB0cHVZZ.jpg', 
    vote_average: 8,
    backdrop_path: 'https://image.tmdb.org/t/p/original/8LqPbN3Vm8Xiaum4BwnbB0cHVZZ.jpg',
    trailer: 'https://www.youtube.com/embed/tiwcMjH1dRw'
  },
  {
    id: 1013,
    title: 'love game in eastern fantasy',
    description: '"Love Game in Eastern Fantasy" (永夜星河) is a 2024 Chinese fantasy romance drama that blends elements of xianxia, comedy, and adventure.',
    poster_path: 'https://image.tmdb.org/t/p/original/pv1ulQkz5w0s9EH8dV3mjW6SABf.jpg', 
    vote_average: 10,
    backdrop_path: 'https://image.tmdb.org/t/p/original/pv1ulQkz5w0s9EH8dV3mjW6SABf.jpg',
    trailer: 'https://www.youtube.com/embed/-2Tb4DwY6Mg'
  },
  {
    id: 1014,
    title: 'use for my talent',
    description: '"Use for My Talent" (我亲爱的小洁癖) is a 2021 Chinese romantic comedy drama starring Jasper Liu and Shen Yue.',
    poster_path: 'https://i.pinimg.com/736x/37/82/f4/3782f49f6270daf8cc469bc2b5d462b7.jpg', 
    vote_average: 6,
    backdrop_path: 'https://i.pinimg.com/736x/37/82/f4/3782f49f6270daf8cc469bc2b5d462b7.jpg',
    trailer: 'https://www.youtube.com/embed/kOlhVxsQVs8'
  },
  {
    id: 1015,
    title: 'put your head on my shoulder',
    description: '"Put Your Head on My Shoulder" (致我们暖暖的小时光) is a 2019 Chinese romantic comedy drama.',
    poster_path: 'https://image.tmdb.org/t/p/original/iuX0TRkczgbkd1tcJD01lvTWQRl.jpg', 
    vote_average: 6,
    backdrop_path: 'https://image.tmdb.org/t/p/original/iuX0TRkczgbkd1tcJD01lvTWQRl.jpg',
    trailer: 'https://www.youtube.com/embed/qSruSMJACmg'
  },
  {
    id: 1016,
    title: 'love between fairy and devil',
    description: '"Love Between Fairy and Devil" is a 2022 Chinese fantasy romance drama that intertwines themes of destiny, transformation, and forbidden love.',
    poster_path: 'https://m.media-amazon.com/images/M/MV5BYTlhYWU3YTctNjMyYy00NWM0LTkzMDQtOTA5ZDRiMTUxNzhhXkEyXkFqcGc@._V1_.jpg', 
    vote_average: 10,
    backdrop_path: 'https://m.media-amazon.com/images/M/MV5BYTlhYWU3YTctNjMyYy00NWM0LTkzMDQtOTA5ZDRiMTUxNzhhXkEyXkFqcGc@._V1_.jpg',
    trailer: 'https://www.youtube.com/embed/HrUeOw7zL40'
  },
  {
    id: 1018,
    title: 'The Notebook',
    description: 'The Notebook is a 2004 American romantic drama film based on the 1996 novel of the same name by Nicholas Sparks.',
    poster_path: 'https://picsum.photos/seed/notebook/500/750.jpg', 
    vote_average: 7.8,
    backdrop_path: 'https://picsum.photos/seed/notebook/1280/720.jpg',
    trailer: 'https://www.youtube.com/embed/kyLxDT3k3cM'
  },
  {
    id: 1019,
    title: 'The Proposal',
    description: 'The Proposal is a 2009 American romantic comedy film starring Sandra Bullock and Ryan Reynolds.',
    poster_path: 'https://picsum.photos/seed/proposal/500/750.jpg', 
    vote_average: 6.7,
    backdrop_path: 'https://picsum.photos/seed/proposal/1280/720.jpg',
    trailer: 'https://www.youtube.com/embed/V2qiqhI8gW0'
  },
  {
    id: 1020,
    title: 'After',
    description: 'After is a 2019 American romantic drama film based on the novel of the same name by Anna Todd.',
    poster_path: 'https://picsum.photos/seed/after-movie/500/750.jpg', 
    vote_average: 5.5,
    backdrop_path: 'https://picsum.photos/seed/after-movie/1280/720.jpg',
    trailer: 'https://www.youtube.com/embed/9bZkp7q19f0'
  },
  {
    id: 1021,
    title: 'A Walk to Remember',
    description: 'A Walk to Remember is a 2002 American romantic drama film based on the 1999 novel of the same name by Nicholas Sparks.',
    poster_path: 'https://picsum.photos/seed/walk-remember/500/750.jpg', 
    vote_average: 7.4,
    backdrop_path: 'https://picsum.photos/seed/walk-remember/1280/720.jpg',
    trailer: 'https://www.youtube.com/embed/k16aqQJ-5pA'
  },
  {
    id: 1022,
    title: 'Titanic',
    description: 'Titanic is a 1997 American epic romance and disaster film directed and written by James Cameron.',
    poster_path: 'https://picsum.photos/seed/titanic/500/750.jpg', 
    vote_average: 7.9,
    backdrop_path: 'https://picsum.photos/seed/titanic/1280/720.jpg',
    trailer: 'https://www.youtube.com/embed/2e-eXJ6Gg4E'
  },
  {
    id: 1018,
    title: 'the princess royal',
    description: '"The Princess Royal" (度华年) is a 2024 Chinese historical romance drama that intertwines themes of political intrigue and second chances.',
    poster_path: 'https://m.media-amazon.com/images/M/V5BYTJhMDI4NGYtNzdkYS00MjEzLWFiOWEtZjBmMzJlMmUxM2JkXkEyXkFqcGc@._V1_.jpg', 
    vote_average: 6,
    backdrop_path: 'https://m.media-amazon.com/images/M/V5BYTJhMDI4NGYtNzdkYS00MjEzLWFiOWEtZjBmMzJlMmUxM2JkXkEyXkFqcGc@._V1_.jpg',
    trailer: 'https://www.youtube.com/embed/ikFvxPqcc2U'
  }
];

const App = () => {
  const [movies, setMovies] = useState(chineseMovies);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [displayedMovies, setDisplayedMovies] = useState(chineseMovies.slice(0, 16));
  const [allMovies, setAllMovies] = useState(chineseMovies);
  const [isLoading, setIsLoading] = useState(false);
  const [moviesPerPage] = useState(16);

  useEffect(() => {
    const fetchMovies = async () => {
      setIsLoading(true);
      try {
        const tmdbMovies = await getPopularMovies(20); // Fetch 20 pages (400 movies) for better genre variety
        const allMoviesData = [...chineseMovies, ...tmdbMovies];
        setAllMovies(allMoviesData);
        setMovies(allMoviesData);
        // Initially show only first 16 movies
        setDisplayedMovies(allMoviesData.slice(0, 16));
      } catch (error) {
        console.error("Error fetching movies:", error);
        setMovies(chineseMovies);
        setAllMovies(chineseMovies);
        setDisplayedMovies(chineseMovies.slice(0, 16));
      }
      setIsLoading(false);
    };

    fetchMovies();
  }, []);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 5);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get 5 latest movies for slideshow
  const heroMovies = movies.slice(0, 5);

  // Load more movies function
  const loadMoreMovies = () => {
    const currentLength = displayedMovies.length;
    const nextMovies = allMovies.slice(currentLength, currentLength + moviesPerPage);
    setDisplayedMovies([...displayedMovies, ...nextMovies]);
  };

  // Check if there are more movies to load
  const hasMoreMovies = displayedMovies.length < allMovies.length;
    
    const [titleFilter, setTitleFilter] = useState('')
    const [ratingFilter, setRatingFilter] = useState('')
    const [genreFilter, setGenreFilter] = useState('all')
    const [form, setForm] = useState({
      title: '',
      description: '',
      posterURL: '',
      rating: '',
    })
  
    const handleAddMovie = (e) => {
      e.preventDefault()
      const { title, description, posterURL, rating } = form
      if (!title || !description || !posterURL || !rating) return
  
      const newMovie = {
        ...form,
        id: movies.length + 1,
      }
  
      setMovies([...movies, newMovie])
      setForm({ title: '', description: '', posterURL: '', rating: '' })
    }
  
    // Get filtered movies from allMovies, then paginate
    const allFilteredMovies = allMovies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().trim().includes(titleFilter.toLowerCase().trim())
      const matchesRating = movie.vote_average >= (ratingFilter || 0)
      
      // Genre filtering
      let matchesGenre = true
      if (genreFilter !== 'all') {
        if (genreFilter === 'cdrama') {
          matchesGenre = movie.id >= 1000 // Chinese movies have IDs 1000+
        } else if (genreFilter === 'action') {
          // Check TMDB genres first, then title keywords
          const hasActionGenre = movie.genres && movie.genres.some(g => 
            g.name.toLowerCase() === 'action' || 
            g.name.toLowerCase() === 'adventure' ||
            g.name.toLowerCase() === 'thriller'
          )
          const hasActionKeyword = movie.title.toLowerCase().includes('action') || 
                                  movie.title.toLowerCase().includes('war') ||
                                  movie.title.toLowerCase().includes('battle')
          matchesGenre = hasActionGenre || hasActionKeyword
        } else if (genreFilter === 'romance') {
          // Check TMDB genres first, then title keywords
          const hasRomanceGenre = movie.genres && movie.genres.some(g => 
            g.name.toLowerCase() === 'romance' || 
            g.name.toLowerCase() === 'love'
          )
          const hasRomanceKeyword = movie.title.toLowerCase().includes('love') || 
                                   movie.title.toLowerCase().includes('romance') ||
                                   movie.title.toLowerCase().includes('heart') ||
                                   movie.title.toLowerCase().includes('notebook') ||
                                   movie.title.toLowerCase().includes('proposal')
          matchesGenre = hasRomanceGenre || hasRomanceKeyword
        } else if (genreFilter === 'drama') {
          // Check TMDB genres first, then title keywords
          const hasDramaGenre = movie.genres && movie.genres.some(g => 
            g.name.toLowerCase() === 'drama' || 
            g.name.toLowerCase() === 'family'
          )
          const hasDramaKeyword = movie.title.toLowerCase().includes('drama') || 
                                 movie.title.toLowerCase().includes('story')
          matchesGenre = hasDramaGenre || hasDramaKeyword
        }
      }
      
      return matchesTitle && matchesRating && matchesGenre
    })

    // Filter displayed movies based on filtered results
    const filteredMovies = allFilteredMovies.slice(0, displayedMovies.length)

                
    return (
      <div className='min-h-screen bg-black'>
          {/* Navbar appears after hero */}
              <Navbar titleFilter={titleFilter} setTitleFilter={setTitleFilter} />
        <Routes>
          <Route path="/" element={
          <div className="space-y-0 overflow-x-hidden">
              {/* Hero Slideshow Section */}
              <div className='relative h-96 bg-gradient-to-b from-black to-gray-900 overflow-hidden'>
                {heroMovies.map((movie, index) => (
                  <div 
                    key={movie.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                  >
                    <img 
                      src={
                        movie.poster_path?.startsWith('http') 
                          ? movie.poster_path 
                          : `https://image.tmdb.org/t/p/w1280${movie.poster_path}`
                      }
                      className='w-full h-220 object-cover opacity-90'
                      alt={movie.title}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/1280x720?text=No+Image'
                      }}
                    />
                    <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-60'></div>
                    <div className='absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80'></div>
                    
                    {/* Movie Content Overlay */}
                    <div className='absolute bottom-0 left-0 right-0 p-8 text-white'>
                      <h2 className='text-3xl md:text-4xl font-bold mb-3 drop-shadow-lg'>
                        {movie.title}
                      </h2>
                      <p className='text-sm md:text-base text-gray-300 mb-4 max-w-2xl line-clamp-3'>
                        {movie.overview || movie.description || 'No description available'}
                      </p>
                      <div className='flex items-center gap-4'>
                        <span className='bg-red-600 text-white px-3 py-1 rounded font-bold text-sm'>
                          ⭐ {movie.vote_average}/10
                        </span>
                        <span className='text-gray-300 text-sm'>
                          {movie.vote_count ? `${movie.vote_count.toLocaleString()} votes` : 'No ratings'}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
                
                {/* Slider Cursor/Indicators */}
                <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-20'>
                  {heroMovies.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-white w-8' 
                          : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                      }`}
                    />
                  ))}
                </div>
              </div>

              
              {/* Genre Filter Buttons */}
              <div className='px-4 py-6 '>
                <div className='flex flex-wrap gap-3 '>
                  <button
                    onClick={() => setGenreFilter('all')}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      genreFilter === 'all' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    All Movies
                  </button>
                  <button
                    onClick={() => setGenreFilter('cdrama')}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      genreFilter === 'cdrama' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    CDrama
                  </button>
                  <button
                    onClick={() => setGenreFilter('action')}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      genreFilter === 'action' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    🎬 Action
                  </button>
                  <button
                    onClick={() => setGenreFilter('romance')}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      genreFilter === 'romance' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    💕 Romance
                  </button>
                  <button
                    onClick={() => setGenreFilter('drama')}
                    className={`px-6 py-2 rounded-full font-medium transition-colors ${
                      genreFilter === 'drama' 
                        ? 'bg-red-600 text-white' 
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    🎭 Drama
                  </button>
                </div>
              </div>
              
              {/* Movie List section*/}
              {
                filteredMovies.length === 0 ? (
                  <div className="text-center text-[#2C3E50] font-bold text-2xl mt-8">
                    Movie Not Found..... 😞
                  </div>
                ) : (
                  <>
                    <MovieList movies={filteredMovies} />
                    
                    {/* Load More Button */}
                    {hasMoreMovies && (
                      <div className="text-center mt-8 mb-8">
                        <button
                          onClick={loadMoreMovies}
                          className="px-8 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold text-lg"
                        >
                          Load More
                        </button>
                      </div>
                    )}
                    
                    {/* End of movies message */}
                    {!hasMoreMovies && displayedMovies.length > 0 && (
                      <div className="text-center text-gray-400 mt-8 mb-8">
                        <p className="text-lg">🎬 You've reached the end! That's all {displayedMovies.length} movies.</p>
                      </div>
                    )}
                  </>
                )
              }
              
              {/* Filter Section */}
              <div className='p-10 bg-black text-white'>
                <h1 className="text-3xl font-bold py-5">🎥 My Movie App</h1>
                <div className="flex flex-col md:flex-row gap-4 mb-5">
                  <input
                    type="text"
                    placeholder="Search by title"
                    className="p-2 border rounded w-full"
                    value={titleFilter}
                    onChange={(e) => setTitleFilter(e.target.value)}
                  />
                  <input
                    type="number"
                    placeholder="Minimum rating"
                    className="p-2 border rounded w-full"
                    value={ratingFilter}
                    onChange={(e) => setRatingFilter(e.target.value)}
                  />
                </div>
                {/* Add Movie Form */}
                <form onSubmit={handleAddMovie} className="space-y-3">
                  <input
                    type="text"
                    placeholder="Title"
                    className="block w-full p-2 border rounded"
                    value={form.title}
                    onChange={(e) => setForm({ ...form, title: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Description"
                    className="block w-full p-2 border rounded"
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Poster URL"
                    className="block w-full p-2 border rounded"
                    value={form.posterURL}
                    onChange={(e) => setForm({ ...form, posterURL: e.target.value })}
                  />
                  <input
                    type="text"
                    placeholder="Rating (e.g., 9.5)"
                    className="block w-full p-2 border rounded"
                    value={form.rating}
                    onChange={(e) => setForm({ ...form, rating: e.target.value })}
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#1A2533] text-white rounded-lg hover:bg-[#2C3E50] hover:border-2 hover:border-[#1A2533]"
                  >
                    Add Movie
                  </button>
                </form>
                <footer className='text-center mt-3'>
                  <div> &copy; 2025 My Movie App. All rights reserved. </div>
                </footer>
              </div>
          </div>
            }/>
            <Route path="/movie/:id" element={<MovieDetails movies={movies} />} />
        </Routes>
   </div>
  )
}

export default App
