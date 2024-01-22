import React from 'react'
import "../Assets/Styles/hero.css"
import 'aos/dist/aos.css';
import banner from "../Assets/Images/mybanner.png"
import Typewriter from "typewriter-effect";

const Hero = () => {

 
  return (
   <div className='container-lg' id='home'>
    <div className="row both">
      <div className="col-lg-6 col-md-6 left">
      <img className="mgg" src={banner} alt='gh'/>
      </div>
      <div className="col-lg-6 col-md-6 right">
        <div className="naw">
        <Typewriter
                onInit={(typewriter) => {
                    typewriter
                        .typeString("GeeksForGeeks")
                        .pauseFor(1000)
                        .deleteAll()
                        .typeString("Welcomes You")
                        .start();
                }}
            />
        <h3 className="stroke">Gabriel</h3>
        <h3>Bayode</h3>
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