import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const MovieCard = ({title , description, posterURL , rating}) => {
  // adding animation
  useEffect(()=>{
    AOS.init();
  })
  return (
    // Designing the card
    <div className='space-y-3'>
        <div className='p-5 space-y-3' data-aos='zoom-out-up' data-aos-duration='3000'>
          <img src={posterURL} className='w-60 h-80 object-cover' alt="" />
          <p className='uppercase font-bold'>{title} </p>
          <p>{description} </p>
          <p className='font-semibold'>Rating: {rating} </p>
        </div>
    </div>
  )
}

export default MovieCard
