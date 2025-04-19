import React, { useState } from 'react'
import MovieList from './components/MovieList'

const App = () => {

    const [movies ,setMovies] = useState([
      {
        id:1,
        title: 'the perfect match',
        description: 'A drama about a mother and her five daughters navigating love, family, and empowerment while starting a new life in a different city.',
        posterURL: 'https://m.media-amazon.com/images/M/MV5BODhlNDc1OWMtNmM2NC00OTFlLTllNjUtNDhjMDQ5MzRjODhmXkEyXkFqcGc@._V1_.jpg', 
        rating: 10/10,
    },{
      id:2,
      title: 'who rules the world',
      description: 'Love blooms between a beloved prince and a fearless princess as they venture through the war-ridden martial arts world in a fight for justice.',
      posterURL: 'https://i.pinimg.com/736x/3c/3c/7a/3c3c7a59ef2e8e77d8a63499283722e5.jpg', 
      rating: 10/10,
    },{
      id:3,
      title: 'The Princess Weiyoung',
      description: 'A Northern Liang princess assumes a new identity to avenge her family and survive the dangerous intrigues of the Northern Wei court.',
      posterURL: 'https://upload.wikimedia.org/wikipedia/en/c/c3/The_Princess_Weiyoung.jpg', 
      rating: 8.5/10,
    },{
      id:4,
      title: 'the story of the pearl girl',
      description: 'After narrowly escaping an abusive pearl farm, a young woman with unmatched talent carves out her own fate as treachery meets the world of jewelry.',
      posterURL: 'https://i.pinimg.com/736x/13/56/4d/13564d9041ec8e8d16056019a111ca9d.jpg', 
      rating: 10/10,
    },{
      id:5,
      title: 'when i fly towards you',
      description: 'On her first day of high school, Su Zaizais rainy encounter sparks a romantic mix-up, as she keeps mistaking Zhang Lurang for someone else.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZThhMzJiZDQtMGE3Yi00NDc1LWFhZDgtOWUwYTAyNDJlNTNlXkEyXkFqcGc@._V1_.jpg', 
      rating: 8/10,
    },{
      id:6,
      title: 'love 020',
      description: 'In Love 020, a virtual marriage between two college gamers sparks a real-life romance as they navigate love both online and off.',
      posterURL: 'https://melcrashesdramaland.home.blog/wp-content/uploads/2020/04/aaaabbgx_doiyigpfri_k_fims1ldcybmtkomuhgrr6zuhik_8dn9fwwgd79nafzeyprvhcxs_ensvqonxe1qdsntvok6s04.jpg?w=1280', 
      rating: 10/10,
    },{
      id:7,
      title: 'falling Into Your Smile',
      description: 'Falling Into Your Smile is a Chinese drama about Tong Yao, a female gamer, who joins the all-male e-sports team ZGDX after graduating college',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BZDQxNDIxOTctNjcwOC00ZDFhLTk4ZTEtNjQ1ZTVmMDk5YmZmXkEyXkFqcGc@._V1_.jpg', 
      rating: 7/10,
    },{
      id:8,
      title: 'ski Into Love',
      description: 'A drama C-Drama that follows Wei Zhi, a manga artist, and Shan Chong, a retired snowboarder and coach, as they find love on the slopes.',
      posterURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTp-nbOxDeCY7FsNtbp9ehpNnaoblxSVDcw&s', 
      rating: 9.5/10,
    },{
      id:9,
      title: 'everyone Loves Me',
      description: 'A Chinese romantic drama following Yue Qianling, a game artist, as she tries to win over her classmate and crush, Gu Xun.',
      posterURL: 'https://m.media-amazon.com/images/M/MV5BYWRiZjJiYzgtNzk3Mi00OThhLTk2YjctMGMxMjQyNThmM2IyXkEyXkFqcGc@._V1_.jpg', 
      rating: 9/10,
    },
    ])
    const [titleFilter, setTitleFilter] = useState('')
    const [ratingFilter, setRatingFilter] = useState('')
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
  
    const filteredMovies = movies.filter((movie) => {
      const matchesTitle = movie.title.toLowerCase().trim().includes(titleFilter.toLowerCase().trim())
      const matchesRating = parseFloat(movie.rating) >= parseFloat(ratingFilter || 0)
      return matchesTitle && matchesRating
    })

  return (
    <div className="p-6 space-y-10">
      <MovieList movies={filteredMovies} />
      
      <h1 className="text-3xl font-bold">🎥 My Movie App</h1>
      {/* Filter Section */}
      <div className="flex flex-col md:flex-row gap-4">
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
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Add Movie
        </button>
      </form>

      {/* Movie List */}
    </div>
  )
}

export default App
