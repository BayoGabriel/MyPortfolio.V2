import React from 'react'
import banner from "../Assets/Images/mybanner.png"
import "../Assets/Styles/hero.css"
const Hero = () => {
  return (
    <div>
        <div className="container" id="home">
        <div className="hero_container">
          <div className="container-fluid">
            <div className="content">
              <div className="row details">
                <div className="col-lg-6 image">
                <img src={banner} className='main' alt="" />
                </div>
                <div className="col-lg-6 text">
                  <h3 className="stroke">Gabriel</h3>
                  <h3>Bayode</h3>
                  <div className="job">
                  <span>FrontEnd Design</span><span>BackEnd Development</span><span>API</span>
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