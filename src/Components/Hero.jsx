import React from 'react'
import "../Assets/Styles/hero.css"
import 'aos/dist/aos.css';
import banner from "../Assets/Images/mybanner.png"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {

 
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Full-stack Developer'],
    loop: 0
  })
  const [text1] = useTypewriter({
    words: ['Problem Solver', 'Continuous Learner', 'Quick Learner'],
    loop: 0
  })
  
  
  return (
   <div className='container-lg' id='home'>
    <div className="row both">
      <div className="col-lg-6 col-md-6 hleft">
      <img className="mgg" src={banner} alt='gh'/>
      </div>
      <div className="col-lg-6 col-md-6 hright">
        <div className="naw">
        <h3 className="stroke">BAYODE</h3>
        <h3>Gabriel</h3>
        <div class="htt">           
        <span>{text}</span><span>{text1}</span>
        </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Hero