import React from "react";
import data from '../components/skill/data'

const Skill = () => {

    return (
        <div
            id="skill"
            name="experience"
            className=" w-full ">
            <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-orange-500">
                <div className="text-center">
                    <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
                        Skill
                    </p>
                    <p className="py-6">These are the technologies I've worked with</p>
                </div>

                <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                    {data.map(({ id, src, title, style }) => (
                        <div
                            key={id}
                            className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
                        >
                            <img src={src} alt="description" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skill;