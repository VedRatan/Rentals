import React from 'react'
import Image from 'next/image'
const Banner = () => {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
        <Image src="https://images.unsplash.com/photo-1596748174250-b52b89c0578f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1084&q=80"
        
        layout="fill"
        objectFit="cover"
        />

        <div className='   absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg font-semibold text-white '>Don't know where to go? Alright.</p>
        <button className='text-purple-700 font-bold bg-white px-8 py-4 my-3 rounded-full shadow-md hover:shadow-2xl active:scale-90 transition duration-150'>I'm Button</button>
        </div>
       
    </div>
  )
}

export default Banner