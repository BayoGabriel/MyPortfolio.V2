import React from 'react'
import banner from "../Assets/Images/mybanner.png"
import "../Assets/Styles/hero.css"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init();
}, [])
  return (
   <div id='home'>
    <div className='hero_container'>
    <div className="container">
      <div className='content'>
      <div className="row details">
          <div className="col-lg-6 col-md-6 col-sm-12 image" data-aos="fade-up" data-aos-duration="3000">
            <img src={banner} className='main' alt="ghty" />
          </div>
          <div className="col-lg-6 md-6 col-sm-12" data-aos="fade-left" data-aos-duration="3000">
            <div className='text'>
            <h3 className="stroke">Gabriel</h3>
            <h3>Bayode</h3>
            <div class="job">           
            <span>Front-End Design</span><span className="dot">+</span><span>Back-End Development</span>
            </div>
            </div>
          </div>
      </div>
      </div>
    </div>
    </div>
   </div>
  )
}

export default Hero