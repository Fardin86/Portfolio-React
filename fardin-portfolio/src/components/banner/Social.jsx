import React from 'react'
import { FaGithub, FaInstagram, FaFacebook, FaLinkedin, } from 'react-icons/fa'
// import { Link } from 'react-scroll'
const Social = () => {
    return (
        <div>
            <div className='flex text-[20px] gap-x-5 max-w-max mx-auto lg:mx-0 text-white  cursor-pointer'>

                <a href='https://github.com/Fardin86' target="_blank"
                    rel="noopener noreferrer">
                    <FaGithub size={30} className='font-bold hover:text-black hover:bg-white' />
                </a>
                <a href='https://www.linkedin.com/in/fardin-hosen-51465b25a/' target="_blank"
                    rel="noopener noreferrer">
                    <FaLinkedin size={30} className='font-bold hover:text-blue-600' />
                </a>
                <a href='https://www.instagram.com/' target="_blank"
                    rel="noopener noreferrer">
                    <FaInstagram size={30} className='font-bold hover:text-red-600' />
                </a>
                <a href='https://www.facebook.com/fardin.hossain.545/' target="_blank"
                    rel="noopener noreferrer">
                    <FaFacebook size={30} className='font-bold hover:text-sky-500' />
                </a>
            </div>
        </div>
    )
}

export default Social