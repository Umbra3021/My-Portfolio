import React from "react";

import c from "../images/c++.svg";
import web from "../images/html.svg";
import ml from "../images/ml.svg";
import git from "../images/git.svg";
import ds from "../images/ds.svg";

const Skills = ()=>{
    return(
        <div className="skill pt-10">
            <div className="pb-20">
                <h1 className="text-center text-5xl font-bold sm:text-7xl">MY <span className="text-red-500">SERVICES</span></h1>
            </div>


            <div className="flex flex-wrap justify-evenly items-center mt-5 font-semibold sm:flex-nowrap text-white">
                <div className="text-center mx-2.5 mb-5 bg-red-500 rounded-3xl border-2 border-white sm:w-1/3">
                    <div className="flex justify-center items-center mt-10">
                        <img src={web} width="20%" />
                    </div>
                    <h1 className="my-5 text-xl sm:text-3xl">Web Development</h1>
                    <h2 className="px-10 mb-10 text-sm font-normal sm:text-xl px-10">
                        From basic topics such as HTML5 and CSS to intermediate topics such as MERN stack,MySQL,
                        Authentiction,Firebase,as well as CSS libraries like Bootstrap 5 and Tailwind.Multiple
                        courses completed with certifications.
                    </h2>
                </div>
                
                <div className="text-center mx-2.5 mb-5 bg-red-500 rounded-3xl w-full sm:w-1/3 mx-0.5">
                    <div className="flex justify-center items-center mt-10">
                        <img src={ml} width="20%" />
                    </div>
                    <h1 className="my-5 text-xl sm:text-3xl">Machine Learning</h1>
                    <h2 className="px-10  mb-10 text-sm font-normal sm:text-xl px-10">
                        Using basics of Data manipulation with Numpy to data visualization with Seaborn,as well as data
                        plotting with Matplolib and ScikitLearn for model building.Proficient in algorithms including basics
                        of regression,classification and clustering.
                    </h2>
                </div>
                <div className="text-center mx-2.5 mb-5 bg-red-500 rounded-3xl w-full sm:w-1/3">
                    <div className="flex justify-center items-center mt-10">
                        <img src={c} width="20%" />
                    </div>
                    <h1 className="my-5 text-xl sm:text-3xl">C/C++</h1>
                    <h2 className="px-10 mb-10 text-sm font-normal sm:text-xl px-10">
                        Intermediate knowledge of both C and C++ languages,from Data structure to 
                        algorithms.Good understanding of Object Oriented Programming in C++,being Proficient
                        and skillful with 100+ problems solved in leetcode.
                        
                    </h2>
                </div>
            </div>

            <div className="flex flex-wrap justify-center items-center mt-5 font-semibold sm:flex-nowrap text-white ">
                <div className="text-center mx-5 mb-5 bg-red-500 rounded-3xl ml-5 w-full sm:w-1/2 ml-40">
                    <div className="flex justify-center items-center mt-10">
                        <img src={git} width="20%" />
                    </div>
                    <h1 className="my-5 text-xl sm:text-3xl">GIT</h1>
                    <h2 className="px-10 mb-10 text-sm font-normal sm:text-xl px-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 
                         1500s, when an unknown printer took a galley of type and scrambled it 
                         to make a type specimen book. 
                    </h2>
                </div>
                <div className="text-center mx-5 mb-5 bg-red-500 rounded-3xl mr-5 w-full sm:w-1/2 mr-40">
                    <div className="flex justify-center items-center mt-10">
                        <img src={ds} width="20%" />
                    </div>
                    <h1 className="my-5 text-xl sm:text-3xl">Data Science</h1>
                    <h2 className="px-10 mb-10 text-sm font-normal sm:text-xl px-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                         Lorem Ipsum has been the industry's standard dummy text ever since the 
                         1500s, when an unknown printer took a galley of type and scrambled it 
                         to make a type specimen book. 
                    </h2>
                </div>
                
                                
            </div>
            
        </div>
    )
};

export default Skills;

8017043999