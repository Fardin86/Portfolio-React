import React from 'react'
import Image from '../assets/about1.JPG'

import Cv from '../assets/Fardincv.pdf'
import { motion } from 'framer-motion'
// import Education from '../components/about/Education'

import EducationFull from '../components/about/EducationFull'

const About = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div id="about" className='max-w-[1260px] mx-auto py-20 px-4'>


                <h1 className='text-5xl font-bold text-center text-orange-500 py-4 '>About Me</h1>
                <div className='grid md:grid-cols-2  '>
                    <div className=' mx-auto'>
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.9 }}
                            variants={{
                                hidden: { opacity: 0, x: 80 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <img className='w-[450px] lg:w-[400px] md:w-[360px] h-[580px]  py-4 md:py-0 rounded-2xl mt-8' src={Image} alt='description' />
                        </motion.div>
                    </div>
                    <div className='  '>
                        {/* Social */}
                        <EducationFull />
                        {/* end social */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.9 }}
                            variants={{
                                hidden: { opacity: 0, x: -80 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <div className='text-center sm:text-left'>
                                <a href={Cv} download>
                                    <button className='btn btn-lg bg-[#009fa8] hover:bg-orange-500 rounded-full px-4 py-2 w-[60%] shadow-2xl   mt-4 lg:ml-24'>
                                        Download CV
                                    </button>
                                </a>
                            </div></motion.div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default About