import { Button } from "@mui/material";
import React from "react";
import TextTransition ,{presets} from "react-text-transition";

const TEXTS = ['Web developer', 'ML developer', 'Data Scientist'];
const About = ()=>{

   
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        5000, // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);


    return(
        <div className="about flex flex-wrap gap-8 sm:flex-nowrap pt-40 pb-10 sm:pt-40 pb-40">
            <div className="flex-basis-1/2">
                <img src="https://placehold.co/800x800" className="sm:mx-10" />
            </div>
            <div className="">
                <div className="mx-5 sm:mx-10">
                    <h1 className="font-bold text-5xl mb-10 sm:text-5xl">I am a 
                        <span className="text-red-500">
                        <TextTransition springConfig={presets.wobbly}>{TEXTS[index % TEXTS.length]}</TextTransition>
                        </span></h1>
                    <h2 className="mt-20 text-xl font-semibold sm:mt-10 ">I am in my 4th year
                        pursuing my Bachelors in Computer Science and Communication Engineering from KIIT.
                        With intermediate knowledge of Web development such as MERN Stack and CSE fundamental subjects.
                        
                    </h2>
                    <div className="font-semibold mt-5 text-sm sm:text-xl">
                        <h3 className="mb-5">Name : <span className="font-normal">Abhishek</span></h3>
                        <h3 className="mb-5">Age : <span className="font-normal">22</span></h3>
                        <h3 className="mb-5">Email : <span className="font-normal">abhisheksengupta2701@gmail.com</span></h3>
                        <h3 className="mb-10">Contact no : <span className="font-normal">6290532684</span></h3>
                        <Button variant="contained">Download Cv</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}





export default About;