import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Programs/Program'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VedioPlayer/VideoPlayer'

const App = () => {

  const [play,setPlay] = useState(false);

  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='Our Program' title='What We Offer'/>
        <Program/>
        <About setPlay={setPlay}/>
        <Title subTitle='Gallery' title='Campus Photo'/>
        <Campus/>
        <Title subTitle='TESTIMONIALS' title="What Student Says"/>
        <Testimonials/>
        <Title subTitle='Contact us' title="Get in Touch"/>
        <Contact/>
        <Footer/>


      </div>
      <VideoPlayer play={play} setPlay={setPlay}/>
    </div>
  )
}

export default App