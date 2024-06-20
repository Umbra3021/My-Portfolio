import { useState } from 'react'
import './App.css'
import About from './assets/components/About'
import Home from './assets/components/Home'
import Navbar from './assets/components/Navbar'
import Skills from './assets/components/Skills'
import Works from './assets/components/Works'

function App() {
  return(
    <div>
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Works /> 
     
    </div>
  )
}

export default App
