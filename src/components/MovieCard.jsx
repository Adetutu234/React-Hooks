import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'; 


const MovieCard = ({title , posterURL}) => {
  // adding animation
  useEffect(()=>{
    AOS.init();
  })
  return (
    // Designing the card
    <div className='space-y-3'>
        <div className='p-5 space-y-3' data-aos='fade-left' data-aos-duration='3000'>
          <img src={posterURL} className='shadow-lg drop-shadow-lg w-80 h-100 object-fill mx-auto' alt="" />
          <p className='uppercase font-bold text-center text-lg'>{title} </p>
        </div>
    </div>
  )
}

export default MovieCard
