import React from 'react'
import banner from "../Assets/Images/mybanner.png"
import "../Assets/Styles/hero.css"
const Hero = () => {
  return (
   <div>
    <div className="container hero_container" id='home'>
      <div className="row details">
          <div className="col-lg-6 image">
            <img src={banner} className='main' alt="ghty" />
          </div>
          <div className="col-lg-6 text">
            <h3 class="stroke">Gabriel</h3>
            <h3>Bayode</h3>
            <div class="job">
            <span>FullStack Developer</span>
            </div>
          </div>
      </div>
    </div>
   </div>
  )
}

export default Hero