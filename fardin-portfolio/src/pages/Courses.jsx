import React from 'react'
// import Image from '../assets/Fardinpro1.jpg'
const Courses = () => {
    return (
        <div className='min-h-screen w-full'>
            <div className="pb-8 w-full text-orange-500 text-center  py-14">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
                    Courses
                </p>
                <p className="py-6">Check out some of my work right here</p>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-8 px-4 sm:px-0">
                <div className="shadow-md shadow-gray-600 rounded-lg ">
                    <img
                        src={Image}
                        alt="description"
                        className="rounded-md w-full h-[600px]"
                    />
                </div>
            </div>
        </div>
    )
}

export default Courses