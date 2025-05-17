import React from 'react' 
import Button from './Button'
import {List} from "@phosphor-icons/react";

const Navbar = ({ titleFilter, setTitleFilter }) => {
  return (
    <div className='bg-[#2C3E50] text-white flex justify-between p-4 w-full text-center fixed z-10 top-0'>
        <p className="lg:text-2xl text-lg font-bold">🎥 Movie App</p>
      <div className="flex gap-1 ">
          <input
            type="text"
            placeholder="Search by title"
            className="p-1 border w-30 rounded-lg lg:w-100 outline-0"
            value={titleFilter}
            onChange={(e) => setTitleFilter(e.target.value)}
          />
          {/* <Button text={'search'} className={'px-4 py-2 bg-[#2C3E50] text-white rounded-lg hover:bg-[#1A2533] shadow-lg drop-shadow-2xl border-[[#2C3E50]] hover:border-[#1A2533]'}  /> */}
      </div>

      <p className='lg:hidden '><List size={32} /></p>
      <div className='my-auto lg:block hidden'>
        <ul className='flex gap-10 text-sm'>
            <li className='hover:scale-105 hover:border-b-1'>Home</li>
            <li className='hover:scale-105 hover:border-b-1'>About</li>
            <li className='hover:scale-105 hover:border-b-1'>Contact</li>
            <li className='hover:scale-105 hover:border-b-1'>Services</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
