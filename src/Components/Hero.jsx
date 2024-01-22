import React from 'react'
import "../Assets/Styles/hero.css"
import 'aos/dist/aos.css';
import banner from "../Assets/Images/mybanner.png"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {

 
  const [text] = useTypewriter({
    words: ['Bayode'],
    loop: 0
  })
  const [text1] = useTypewriter({
    words: ['Gabriel'],
    loop: 0
  })
  
  return (
   <div className='container-lg' id='home'>
    <div className="row both">
      <div className="col-lg-6 col-md-6 left">
      <img className="mgg" src={banner} alt='gh'/>
      </div>
      <div className="col-lg-6 col-md-6 right">
        <div className="naw">
        <h3 className="stroke">{text}</h3>
        <h3>{text1}</h3>
        <div class="htt">           
        <span>Front-End Design</span><span>Back-End Development</span>
        </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Hero