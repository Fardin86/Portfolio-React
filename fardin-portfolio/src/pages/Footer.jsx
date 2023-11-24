import React from 'react';
// import { motion } from 'framer-motion';
import { FaTwitter } from 'react-icons/fa';
// import { Link } from 'react-scroll';
import Social from '../components/banner/Social';
import { Link } from 'react-router-dom';



const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        // <motion.footer
        //     className='flex justify-center items-center  bg-gray-900 text-white py-4 pt-10 '
        //     initial={{ y: 100, opacity: 0 }}
        //     animate={{ y: 0, opacity: 1 }}
        //     transition={{ duration: 0.5 }}
        // >
        <div className='py-4 bg-gray-900 w-screen-lg mx-auto text-white'>
            <ul className='flex  justify-center gap-5 py-8 font-bold md:text-xl cursor-pointer'>
                <li>
                    <Link activeClass='active' smooth={true} to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about' activeClass='active' smooth={true}> About</Link>
                </li>
                <li>
                    <Link to='/project' activeClass='active' smooth={true}> Project</Link>
                </li>
                {/* <li>
                    <Link to='skill' activeClass='active' smooth={true}> Skill</Link>
                </li> */}
                <li>
                    <Link to='/contact' activeClass='active' smooth={true}> Contact</Link>
                </li>
            </ul>

            <div className='flex justify-center space-x-4 '>
                <Social className='' />
                <a href='https://twitter.com/hossen_fardin' target='_blank' rel='noopener noreferrer'>
                    <FaTwitter size={30} className='hover:text-blue-600' />
                </a>
                {/* <a href='#' target='_blank' rel='noopener noreferrer'>
                    <FaWhatsapp size={30} className='' />
                </a> */}
            </div>
            <p className='text-center py-4 text-[11px] md:text-[15px]'>&copy;{currentYear} Fardin Hosen. All Rights Reserved.</p>

        </div>
        // </motion.footer>
    );
};

export default Footer;