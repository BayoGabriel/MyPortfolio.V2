import React from 'react'
import "../Assets/Styles/port.css"
import oner from '../Assets/Images/WhatsApp Image 2023-12-03 at 20.45.56_6e726a7e.jpg'
const Portfolio = () => {
  return (
    <div id='portfolio'>
        <div className="container port_section">
            <div className="header">
                <span>Portfolio</span>
                <h3>My Works</h3>
            </div>
            <div className='project'>
              <div className='row'>
              <div className="col-sm-12 md-4 lg-3">
                  <div className='card'>
                  <a href="whhe">
                    <div class="project-card-sm">
                    <div class="card-border-gradient"></div>
                    <div class="card-container">
                      <img src={oner} alt=""/>
                      <div class="wrapper">
                        <h1>Project Name</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid, dignissimos dolore. Blanditiis odit, nobis eius molestiae, rerum iure atque aliquam </p>
                        <button>view project<i class="fa-solid fa-arrow-right"></i></button> 
                      </div>
                    </div>
                  </div>
                  </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Portfolio