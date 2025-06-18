import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext';
import close_icon from "../assets/close_icon.svg";

const JobListing = () => {

    const { searchFilter, isSearched, setSearchFilter } = useContext(AppContext);
    return (
        <div className='container 2xl:px-20 mx-auto flex flex-col lg:flex-row max-lg:space-y-8 py-8'>
            {/* Sidebar */}
            <div className='w-full lg:w-1/4 bg-white px-4'>
                {/* Search filter from Hero Component */}
                {
                    isSearched && (searchFilter.title !== "" || searchFilter.location !== "") && (
                        <>
                            <h3 className='font-medium text-lg mb-4'>Current Search</h3>
                            <div className='mb-4 text-gray-600'>
                                {searchFilter.title && (
                                    <span className='inline-flex items-center gap-2.5 bg-blue-50 border border-blue-200 px-4 py-1.5 rounded'>
                                        {searchFilter.title}
                                        <img onClick={ e => setSearchFilter(prev => ({...prev, title:""})) } className='cursor-pointer' src={close_icon} alt='' />
                                    </span>
                                )}
                                {searchFilter.location && (
                                    <span className='ml-2 inline-flex items-center gap-2.5 bg-red-50 border border-red-200 px-4 py-1.5 rounded'>
                                        {searchFilter.location}
                                        <img onClick={ e => setSearchFilter(prev => ({...prev,location:""})) } className='cursor-pointer' src={close_icon} alt='' />
                                    </span>
                                )}
                            </div>
                        </>
                    )
                }
            </div>
        </div>
    )
}

export default JobListing
