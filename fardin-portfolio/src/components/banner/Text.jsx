import React from 'react'
import { TypeAnimation } from 'react-type-animation'
// import { motion } from 'framer-motion'
import Cv from '../../assets/Fardincv.pdf'
import { Link } from 'react-router-dom';


const Text = () => {
    return (
        <div>
            <h1 className='text-[40px] font-bold leading-[0.8] lg:text-5xl text-white '>
                Hi, I<span className='font-normal'>'</span>am Fardin <span>Hosen</span>
            </h1>
            <div className='mb-6 pt-4 text-[24px] md:text-[25px] lg:text-[30px] font-secondary font-extrabold uppercase leading-[1]'>
                <span className='mr-4  text-white'>I am a</span>
                <TypeAnimation sequence={[

                    'Network Engineer',
                    2000,
                    'Web Developer',
                    2000,
                    'Web Designer',
                    2000,
                ]}
                    speed={50}
                    className='text-orange-500 '
                    wrapper='span'
                    repeat={Infinity} />
            </div>
            {/* <p className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem</p> */}
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
                <a href={Cv} download><button className='btn btn-lg bg-orange-500 text-white shadow-lg shadow-black rounded-full px-5 py-3 hover:bg-cyan-500 font-bold'>Download CV</button></a>

                <Link to='/contact' className='text-gradient btn-link bg-amber-500 shadow-lg shadow-black  text-white  rounded-full px-10 font-bold py-3 hover:bg-teal-500'>Hire Me
                </Link>

            </div>
        </div>
    )
}

export default Text