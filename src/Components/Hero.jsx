import React from 'react'
import banner from "../Assets/Images/mybanner.png"
import "../Assets/Styles/hero.css"
const Hero = () => {
  return (
    <div>
        <div className="container Hero_container" id="home">
                <div className="row">
                        <div className="col-lg-6 left">
                            <img src={banner} alt="" />
                        </div>
                        <div className="col-lg-6 right">
                        <h3 class="stroke">GABRIEL</h3>
                            <h3>BAYODE</h3>
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