import Footer from '@/components/Footer'
import Header from '@/components/Header'
import InfoCard from '@/components/InfoCard'
import { SearchData } from '@/data/SearchData'
import { useRouter } from 'next/router'
import React from 'react'

function parseISOString(d) {
    if(d!=null)
    {
        function pad(n) {return (n<10? '0' :  '') + n}
        return pad(d.getUTCDate()) + '-' + pad(d.getUTCMonth() + 1) + '-' + d.getUTCFullYear();
    }
    return null;
  }

const search = () => {
    const router  = useRouter();
    const {location, startDate, endDate, noOfGuests} = router.query;
    const formattedStartDate = parseISOString(new Date(startDate));
    const formattedEndDate = parseISOString(new Date(endDate));
    const range = `${formattedStartDate} - ${formattedEndDate}`;
    return (
    <div>
        <Header/>
        <main className='flex'>
         <section className='flex-grow pt-14 px-6'>
            <p>300+ stays - {range} - for {noOfGuests} people</p>
            <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
            <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-600 whitespace-nowrap'>
                <p className='button'>Cancellation Flexibility</p>
                <p className='button'>Type of Place</p>
                <p className='button'>Price</p>
                <p className='button'>Rooms and Beds</p>
                <p className='button'>More Filters</p>
            </div>
            <div className="flex-col flex">
                {SearchData.map(item => (
                    <InfoCard 
                        img = {item.img}
                        location = {item.location}
                        title = {item.title}
                        description = {item.description}
                        star = {item.star}
                        price = {item.price}
                        total = {item.total}
                    />
                ))}
                </div>
         </section>
        </main>
        <Footer/>
    </div>
  )
}

export default search