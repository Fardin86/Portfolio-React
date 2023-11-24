import React from 'react'
import { motion } from 'framer-motion'
import { CgMail } from 'react-icons/cg'
// import { AiOutlinePhone } from 'react-icons/ai'
import { FaGraduationCap, FaWhatsapp } from 'react-icons/fa'
import { MdLocationOn } from 'react-icons/md'
const EducationFull = () => {
    return (
        <div className=' '>
            <motion.div
                initial="hidden"
                whileInView="visible"

                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                    hidden: { opacity: 0, x: 20 },
                    visible: { opacity: 1, x: 0 },
                }}
            >
                <h1 className='text-4xl font-bold text-teal-500 py-2'>About Me</h1>
                {/* <p className='font-[poppins] text-white text-justify'>
                    I'm a front-end web developer. I spend my whole day, practically every day, experimenting with JavaScript, ES6, React.js, Tailwind css, Bootstrap, CSS, HTML,  React Router, React Bootstrap, Font Awesome,framer motion.. I build websites that delight and inform. I do it well. I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.
                </p> */}
                <p className='font-[poppins] text-white text-justify '>
                    Hey there! 👋 I'm Fardin Hosen, a determined CCNA Engineer with an enthusiastic about creating strong, secure networks that serve as a foundation for easy communication in the interconnected world of this day.
                    <br /><br />
                    I've prepared myself with a thorough understanding of networking fundamentals, routing, switching, and security protocols by finishing a comprehensive CCNA course with success.
                    <br /><br />
                    My dedication to excellence in engineering is the foundation of my approach, which combines innovation and precision. I work best in dynamic environments where obstacles present chances for development, and I'm constantly excited to put innovative ideas into practice that stretch the bounds of network design.
                    <br /><br />
                    In addition to my technical expertise, I combine the best aspects of both fields as a creative web designer with a specialization in React.js.I believe that user-friendly interfaces and aesthetically pleasing designs are integral components of a successful digital presence.
                    <br /><br />
                    As a continuous learner, I stay on top of emerging technologies and industry trends to deliver solutions that not only meet today's demands but also anticipate the challenges of tomorrow. I am excited about the transformative power of technology and how it can drive positive change in diverse fields.
                    <br /><br />
                    Thank you for taking the time to explore my portfolio. Whether you're looking for a skilled CCNA Engineer to optimize your network infrastructure or a creative mind to enhance your web presence, I am ready to contribute my expertise to your projects. Let's connect and embark on a journey of innovation together!
                </p>
            </motion.div>

            <div className='flex-1 md:flex justify-between font-[poppins] py-4 text-white'>
                {/* <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.9 }}
                    variants={{
                        hidden: { opacity: 0, x: -70 },
                        visible: { opacity: 1, x: 0 },
                    }}
                > */}
                <div>
                    <p className='flex gap-2'>
                        <CgMail size={25} />
                        fardinhossen423@gmail.com
                    </p>
                    <p className='flex gap-2'>
                        <FaWhatsapp size={25} />
                        +8801867968002</p>
                </div>
                {/* </motion.div>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.9 }}
                    variants={{
                        hidden: { opacity: 0, x: 80 },
                        visible: { opacity: 1, x: 0 },
                    }}
                > */}
                <div>
                    <p className='flex gap-2'>
                        <FaGraduationCap size={25} />
                        BSc in CSE</p>
                    <p className='flex gap-2 '>
                        <MdLocationOn size={25} />
                        Chittagong, Bangladesh</p>
                </div>
                {/* </motion.div> */}
            </div>
        </div>
    )
}

export default EducationFull