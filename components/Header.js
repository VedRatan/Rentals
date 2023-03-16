import React from 'react'
import Image from 'next/image'
import {SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon, UsersIcon} from '@heroicons/react/solid'
const Header = () => {
  return (
    <header className='sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 py-3 px-2 md:px-2'>
  {/* left */}
  <div className='relative flex items-center h-15 cursor-pointer w-[60px]'>
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/006/961/272/small_2x/circle-shape-with-two-simple-house-inside-free-vector.jpg" 
   width={60} 
   height={60}/>
   <div className='font-bold text-blue-900 font-righteous text-lg'>Rentals</div>
  </div> 

  {/* middle  search box*/}
  <div className='flex items-center rounded-full md:border-1 h-[40px] mt-1 md:shadow-md'>
    <input className='pl-5 bg-transparent outline-none flex-grow text-gray-600' type="text" placeholder='start searching'/>
    <SearchIcon className=" hidden md:mx-2  md:inline-flex h-8 bg-blue-900 text-white rounded-full p-2 cursor-pointer"/>
  </div>

  {/* right */}
  <div className='flex space-x-4 items-center justify-end'>
    <p className='text-blue-900 font-semibold text-sm hidden md:inline cursor-pointer'>Want to become a host?</p>
    <GlobeAltIcon className='h-6 text-blue-900 font-semibold text-base'/>
    <div className='flex    text-blue-900 font-semibold text-base items-center space-x-2 border-2 p-2 rounded-full'>
        <MenuIcon className='h-6'/>
        <UserCircleIcon className='h-6'/>
    </div>
  </div>

  </header>
  )
}

export default Header