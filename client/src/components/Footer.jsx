import React from 'react'
import logo from '../assets/logo.svg'
import facebook_icon from '../assets/facebook_icon.svg'
import instagram_icon from '../assets/instagram_icon.svg'

const Footer = () => {
    return (
        <div className='container px-4 2xl:px-20 mx-auto flex items-center justify-between gap-4 py-3 mt-20'>
            <img width={160} src={logo} alt="" />
            <p className='flex-1 border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden'>Copyright @testerweb.dev | All right reserved.</p>
            <div className='flex gap-2.5'>
                <img width={38} src={facebook_icon} alt="" />
                <img width={38} src={instagram_icon} alt="" />
            </div>
        </div>
    )
}

export default Footer
