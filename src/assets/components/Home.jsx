import React from "react";
import { styled } from "styled-components";

const Home = () =>{
    return(
        <Div>
            <div className="flex flex-cols-2 flex-wrap sm:flex-nowrap">
                <div className="mt-10 text-center sm:text-start px-10 sm:mt-20"> 
                    <h2 className="text-red-500 text-7xl mb-10 font-bold sm:text-5xl" >Hello</h2>
                    <h1 className="text-stone-200 text-xl sm:text-3xl ">I'm a Fresher with intermediate knowledge on CS fundamentals and a passion for Web development , Data Science etc.</h1>
                   
                    
                </div>
                <div className="ml-15 mb-60 px-10">
                    <img src="https://placehold.co/1600x1000" alt="pic" className="mt-20"/>
                    
                </div>

            </div>
        </Div>
        
    )
}

const Div = styled.div`
    background-color:black;

    `;

export default Home;