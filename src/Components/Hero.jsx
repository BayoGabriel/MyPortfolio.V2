import React from 'react'
import "../Assets/Styles/hero.css"
import 'aos/dist/aos.css';

const Hero = () => {

 
  return (
   <div className='container-lg' id='home'>
    <div className="row both">
      <div className="col-lg-6 col-md-6 left">
      <div className="mgg">
      </div>
      </div>
      <div className="col-lg-6 col-md-6 right">
        <div className="naw">
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