import React, { useState, useEffect } from 'react';
import { BsPerson } from 'react-icons/bs';
// import { Link } from 'react-scroll'
import { Link } from 'react-router-dom';

import Image from '../assets/Fardin.png'
// import {
//     FaFacebookF,
//     FaTwitter,
//     FaGooglePlusG,
//     FaInstagram,
//     FaBars,

// } from 'react-icons/fa'
// import { FaBars } from 'react-icons/fa'
// import Logo from '../assets/pLogo.png'
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineProject, AiOutlineContacts } from 'react-icons/ai'
// import { GiSkills } from 'react-icons/gi';
import Social from '../components/banner/Social';
import '../../src/components/navbar/navbar.css'
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    const [open, setNav] = useState(false)


    const handleNav = () => {
        setNav(!open)
    }
    useEffect(() => {
        window.addEventListener("scroll", () => {
            // const nav = document.querySelector("nav");
            window.scrollY > 0 ? setSticky(true) : setSticky(false);
        });
    }, []);

    return (
        <nav className={`fixed w-full left-0 top-0 z-[999] ${sticky ? "sm:bg-[#032c45]  text-gray-900" : "text-white"
            }`}>
            <div className=''>
                <div className=' flex justify-between text-white   '>
                    <div className='hidden sm:flex w-[100px] ml-4 pt-1 py-4 self-center'>
                        {/* <img className='text-white bg-cyan-800' src={Logo} /> */}
                        <h1 className='text-2xl font-bold italic  py-1 px-4'>
                            <span className='text-red-500'>F</span>
                            <span className='text-orange-500'>A</span>
                            <span className='text-cyan-500'>R</span>
                            <span className='text-lime-500'>D</span>
                            <span className='text-indigo-500'>I</span>
                            <span className='text-teal-500'>N</span>
                            {/* <span className='text-violet-500'>L</span>
                            <span className='text-purple-500'>I</span>
                            <span className='text-white'>O</span> */}
                        </h1>
                    </div>
                    <div
                        className={` ${sticky ? "sm:bg-white/0 bg-white text-white" : "bg-[#032c45]"
                            } text-white  sm:block hidden px-4 py-3 font-medium  rounded-bl-full w-[480px]`}
                    >
                        <ul className='hidden sm:flex  gap-8 py-2 cursor-pointer pl-8 '>
                            <li className="hover:text-orange-500 hover:italic">
                                <Link
                                    to='/'

                                    activeClass='active' smooth={true} spy={true} className='flex gap-1'
                                >
                                    <AiOutlineHome size={25} />
                                    Home</Link>
                            </li>
                            <li className='hover:text-orange-500 hover:italic'>
                                <Link
                                    to='/about'
                                    activeClass='active' smooth={true} spy={true} className='flex gap-1'
                                >
                                    <BsPerson size={25} />
                                    About</Link>
                            </li>
                            {/* <li>
                                <Link
                                    to='/skill'
                                    activeClass='active' smooth={true} spy={true} className='flex gap-1'
                                >
                                    <GiSkills size={25} />
                                    Skill</Link>
                            </li> */}
                            <li className='hover:text-orange-500 hover:italic'>
                                <Link
                                    to='/project'
                                    activeClass='active' smooth={true} spy={true} className='flex gap-1'
                                >
                                    <AiOutlineProject size={25} />
                                    Project</Link>
                            </li>

                            <li className='hover:text-orange-500 hover:italic'>
                                <Link
                                    to='/contact'
                                    activeClass='active' smooth={true} spy={true} className='flex gap-1'
                                >
                                    <AiOutlineContacts size={25} />
                                    Contact </Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className='flex justify-between'>
                <FaFacebookF className='mx-4' />
                <FaTwitter className='mx-4' />
                <FaGooglePlusG className='mx-4' />
                <FaInstagram className='mx-4' />
            </div> */}

                    {/* Hamburger Icon */}
                    <div onClick={handleNav} className='fixed right-0 sm:hidden z-10'>
                        <AiOutlineMenu onClick={handleNav} size={50} className={open ? 'hidden' : 'mr-4 cursor-pointer py-2 font-bold text-white'} />
                    </div>
                    {/* Mobile Menu */}

                    <div onClick={handleNav} className={open ? 'overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-[300px] h-screen bg-teal-900 px-4 py-7 flex flex-col' : 'absolute top-0 h-screen left-[-100%] ease-in duration-500'}>
                        <AiOutlineClose onClick={() => handleNav} size={30} className='absolute  top-4 cursor-pointer' />
                        <img src={Image} className="sm:hidden w-[150px] h-[150px] rounded-full mx-auto border-8 border-teal-800 shadow-2xl shadow-cyan-900" alt='description' />
                        <div className='py-4'>
                            <Social />
                        </div>

                        <ul className='h-full w-full text-center py-8'>
                            <li className='text-2xl py-4 hover:text-orange-500 hover:italic'>
                                <Link
                                    onClick={handleNav}

                                    to='/'
                                    activeClass='active' smooth={true} spy={true}
                                    className='flex gap-2'
                                >
                                    <AiOutlineHome
                                        onClick={handleNav}
                                        className=''
                                        size={30} />
                                    Home
                                </Link>
                            </li>
                            <li className='text-2xl py-4 hover:text-orange-500 hover:italic'>
                                <Link
                                    onClick={handleNav}
                                    to='/about'
                                    activeClass='active' smooth={true} spy={true}
                                    className='flex gap-2'
                                >
                                    <BsPerson size={30} />
                                    About</Link>
                            </li>
                            <li className='text-2xl py-4 hover:text-orange-500 hover:italic'>
                                <Link onClick={handleNav}
                                    to='/project'
                                    activeClass='active' smooth={true} spy={true}
                                    className='flex gap-2'
                                >
                                    <AiOutlineProject size={30} />
                                    Project</Link>
                            </li>
                            {/* <li className='text-2xl py-4'>
                                <Link
                                    onClick={handleNav}
                                    to='skill'
                                    activeClass='active' smooth={true} spy={true}
                                    className=' flex gap-2'
                                >
                                    <GiSkills size={30} />
                                    Skill</Link>
                            </li> */}
                            <li className='text-2xl py-4 hover:text-orange-500 hover:italic'>
                                <Link
                                    onClick={handleNav}
                                    to='/contact'
                                    activeClass='active' smooth={true} spy={true}
                                    className='flex gap-2'
                                >
                                    <AiOutlineContacts size={30} />
                                    Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar