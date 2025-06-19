import React from 'react'
import play_store from '../assets/play_store.svg';
import app_store from '../assets/app_store.svg';
import footer_img from '../assets/footer_img.png';

const AppDownload = () => {
    return (
        <div className='container px-4 2xl:px-20 mx-auto my-20'>
            <div className='relative bg-gradient-to-r from-violet-50 to-purple-50 p-12 sm:p-24 lg:p-32 rounded-lg'>
                <div>
                    <h1 className='text-2xl sm:text-4xl font-bold mb-8 max-w-md'>Download Mobile App For Better Experience</h1>
                    <div className='flex gap-4 items-center'>
                        <a href="#" className='inline-block'>
                            <img className='h-12' src={play_store} alt="" />
                        </a>
                        <a href="#" className='inline-block'>
                            <img className='h-12' src={app_store} alt="" />
                        </a>
                    </div>
                </div>
                <img className='absolute w-80 right-0 bottom-0 mr-32 max-lg:hidden' src={footer_img} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
