import React from 'react'
import "../Assets/Styles/port.css"
import Carousel from './carousel';

const Portfolio = () => {

  
  return (
    <div className='big'>
        <div className="container-lg">
            <div className='project' id='portfolio'>
              <div className="header">
                  <span>Portfolio</span>
                  <h3>My Works</h3>
              </div>
              <div className='row'>
              <div className="col-sm-12 lg-3">
              <Carousel/>
              </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio