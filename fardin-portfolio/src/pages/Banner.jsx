import React from 'react';
// import Image from '../assets/Fardin.png'
import Image from '../assets/Fardinpro1.jpg'
// import { FaGithub, FaYoutube, FaDribbble, FaInstagram, FaFacebook, FaLinkedin, } from 'react-icons/fa'
// import { TypeAnimation } from 'react-type-animation'
import { motion } from 'framer-motion'
// import { fadeIn } from '../variants'
// import Cv from '../assets/Fardincv.pdf'
import Text from '../components/banner/Text';
import Social from '../components/banner/Social';
// import Cisco2 from '../assets/cisco6.jpg';
// style={{ backgroundImage: `url(${Cisco2})` }}

const Banner = () => {
    return (
        <div className=' min-h-screen w-full ' >
            <section className=' py-14 lg:py-44 px-4 pt-24 max-w-screen-lg mx-auto' id="home">
                <div className='flex-col-reverse flex sm:flex-col gap-y-8 lg:flex-row lg:items-center  justify-between lg:gap-52'>


                    {/* text */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <div className='flex-1 text-center font-secondary lg:text-left self-items-center'>
                            <Text />
                            {/* socials */}
                            <Social />
                        </div>
                    </motion.div>
                    {/* images */}
                    <div className=''>
                        <img className='w-[250px] h-[280px] md:w-[300px] lg:h-[400px] mx-auto rounded-2xl   sm:shadow-2xl sm:shadow-gray-900' src={Image} alt='description' />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;
