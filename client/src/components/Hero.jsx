import React from 'react'
import search_icon from '../assets/search_icon.svg';
import location_icon from '../assets/location_icon.svg';
import microsoft_logo from '../assets/microsoft_logo.svg';
import walmart_logo from '../assets/walmart_logo.svg';
import samsung_logo from '../assets/samsung_logo.png';
import amazon_logo from '../assets/amazon_logo.png';
import netflix_logo from '../assets/netflix_logo.svg';
import accenture_logo from '../assets/accenture_logo.png';

const Hero = () => {
  return (
    <div className='container 2xl:px-20 mx-auto my-10'>
      <div className='bg-gradient-to-r from-purple-800 to-purple-950 text-white py-16 text-center mx-2 rounded-xl'>
        <h2 className='text-2xl md:text-3xl lg:text-4xl font-medium mb-4'>Over 10,000+ jobs to apply</h2>
        <p className='mb-8 max-w-xl mx-auto text-sm font-light px-5'>Your Next Big Career Move Starts Right Here - Explore The Best Job Opportunities And Take The First Step Toward Your Future</p>
        <div className='flex items-center justify-between bg-white rounded text-gray-600 max-w-2xl mx-auto px-4 py-2 gap-4'>
            <div className='flex items-center'>
                <img className='h-4 sm:h-5' src={search_icon} alt='' />
                <input type="text" placeholder='Search for jobs' className='max-sm:text-xs p-2 rounded outline-none w-full' />
            </div>
            <div className='flex items-center'>
                <img className='h-4 sm:h-5' src={location_icon} alt='' />
                <input type="text" placeholder='Location' className='max-sm:text-xs p-2 rounded outline-none w-full' />
            </div>
            <button className='bg-blue-600 px-6 py-2 rounded text-white m-1'>Search</button>
        </div>
      </div>
      <div className='border border-gray-300 shadow-md mx-2 mt-5 p-6 rounded-md flex'>
        <div className='flex justify-center gap-10 lg:gap-16 flex-wrap'>
            <p className='font-medium'>Trusted By</p>
            <img className='h-6' src={microsoft_logo} alt="" />
            <img className='h-6' src={walmart_logo} alt="" />
            <img className='h-6' src={samsung_logo} alt="" />
            <img className='h-6' src={amazon_logo} alt="" />
            <img className='h-6' src={netflix_logo} alt="" />
            <img className='h-6' src={accenture_logo} alt="" />
            
        </div>
      </div>
    </div>
  )
}

export default Hero
