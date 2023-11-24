import React from 'react'
import Banner from './Banner'
// import About from './About'
import Portfolio from './Portfolio'
import Cisco2 from '../assets/cisco15.jpg';
import AboutHomepage from './AboutHomepage';
const Homepage = () => {
    return (
        <div className=' w-full  h-max-fit' style={{ backgroundImage: `url(${Cisco2})` }}>
            <Banner />
            <AboutHomepage />
            <Portfolio />
        </div>
    )
}

export default Homepage



