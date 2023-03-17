import React, { useState } from 'react'
import Image from 'next/image'
import {SearchIcon, GlobeAltIcon, UserCircleIcon, MenuIcon, UsersIcon} from '@heroicons/react/solid'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/router';

const Header = () => {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router = useRouter();

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  };

  const resetInput = () =>{
    setSearchInput("");
  }

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },

    });
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key:'selection'
  };




  return (
    <header className='sticky top-0 z-50 bg-white shadow-md grid grid-cols-3 py-3 px-2 md:px-2'>
  {/* left */}
  <div onClick={()=>{router.push("/")}} className='relative flex items-center h-15 cursor-pointer w-[60px]'>
    <Image src="https://static.vecteezy.com/system/resources/thumbnails/006/961/272/small_2x/circle-shape-with-two-simple-house-inside-free-vector.jpg" 
   width={60} 
   height={60}/>
   <div className='font-bold text-blue-900 font-righteous text-lg'>Rentals</div>
  </div> 

  {/* middle  search box*/}
  <div className='flex items-center rounded-full md:border-1 h-[40px] mt-1 md:shadow-md'>
    <input 
    value={searchInput}
    onChange ={(e)=>setSearchInput(e.target.value)}
     className='pl-5 bg-transparent outline-none flex-grow text-gray-600' type="text" placeholder='start searching'/>
    <SearchIcon className=" hidden md:mx-2  md:inline-flex h-8 bg-blue-900 text-white rounded-full p-2 cursor-pointer"/>
  </div>

  {/* right */}
  <div className='flex space-x-4 items-center justify-end text-blue-900'>
    <p className='text-blue-900 font-semibold text-sm hidden md:inline cursor-pointer'>Want to become a host?</p>
    <GlobeAltIcon className='h-6 text-blue-900 font-semibold text-base'/>
    <div className='flex    text-blue-900 font-semibold text-base items-center space-x-2 border-2 p-2 rounded-full'>
        <MenuIcon className='h-6'/>
        <UserCircleIcon className='h-6'/>
    </div>
  </div>

  {searchInput && (
  <div className='flex flex-col col-span-3 mx-auto pt-3'>
    <DateRangePicker ranges={[selectionRange]}
    minDate={new Date()}
    rangeColors={["#1e3a8a"]}
    onChange={handleSelect}
    />

    <div className='flex items-center border-b mb-4'>
      <h2 className='text-2xl flex-grow font-semibold'>Number of Guests</h2>
      <UsersIcon className='h-5'/>
      <input 
      value={noOfGuests} 
      onChange = {(e)=>setNoOfGuests(e.target.value)}
      min = {1}
      type="number" className='w-12 pl-2 text-lg outline-none text-blue-800'/>
    </div>
    <div className='flex'>
      <button onClick={resetInput} className='flex-grow text-gray-600 font-semibold'>Cancel</button>
      <button onClick={search} className='flex-grow text-blue-900 font-semibold'>Search</button>
      </div>
  </div>
  )}

  </header>
  )
}

export default Header