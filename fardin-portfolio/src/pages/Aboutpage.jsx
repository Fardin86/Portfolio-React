import React from 'react'
import About from './About'
import Skill from './Skil'
// import Courses from './Courses'
import Qualification from './Qualification'
import Contact from './Contact'

const Aboutpage = () => {
    return (
        <div className='bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
            <About />
            <Qualification />
            <Skill />
            {/* <Courses /> */}
            <Contact />
        </div>
    )
}

export default Aboutpage