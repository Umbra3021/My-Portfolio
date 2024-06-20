import React from "react";
import web from "../images/html.svg";
import poke from "../images/poki.png";
import res from "../images/res.png";
import todo from "../images/todo.png";

const Works = ()=>{
    return(
        <div className="work">
            <div className="py-40">
                <h1 className="text-5xl font-bold text-center sm:text-7xl">MY <span className="text-red-500">PORTFOLIO</span></h1>
            </div>

            <div className="flex flex-wrap justify-evenly items-center font-semibold sm:flex-nowrap text-white">
                
                <div className="mx-5 mb-5 rounded-3xl  w-full sm:w-1/3">
                    <div className="flex justify-center items-center relative">
                        <img src={poke}  title="pokemon" className=" z-20 transition ease-in-out delay-150 hover:z-0 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"/>\
                        
                    </div>
                </div>  
                <div className="mx-5 mb-5 rounded-3xl border-2 border-white w-full sm:w-1/3">
                    <div className="flex justify-center items-center relative">
                        <img src={res}  title="pokemon" className=" z-20 transition ease-in-out delay-150 hover:z-0 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"/>\
                        
                    </div>
                </div>  
                <div className="mx-5 mb-5 rounded-3xl border-2 border-white w-full sm:w-1/3">
                    <div className="flex justify-center items-center relative">
                        <img src={todo}  title="pokemon" className=" z-20 transition ease-in-out delay-150 hover:z-0 hover:-translate-y-1 hover:scale-110 hover:duration-300 hover:opacity-50"/>\
                        
                    </div>
                </div>  

                

            </div>

        </div>
    )
};

export default Works;