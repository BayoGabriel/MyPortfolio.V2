import React from 'react'
import "../Assets/Styles/port.css"
import oner from "../Assets/Images/WhatsApp Image 2023-12-03 at 20.45.56_6e726a7e.jpg"
const Portfolio = () => {
  
  const works = [
    {
      title: 'Agency Website',
      image: oner,
      stack: 'React'
    },
    {
      title: 'School Portal',
      image: oner,
      stack: 'MERN'
    },
    {
      title: 'Saas Landing Page',
      image: oner,
      stack: 'Bootstrap'
    }
  ]
  return (
    <>
      <div className="big">
        <div className="container-lg" id='portfolio'>
         <div className="project">
          <div className="header">
              <span>Portfolio</span>
              <h3>Recent Works</h3>
            </div>
            <div className="row">
              <div className="col--6"></div>
            </div>
         </div>
        </div>
      </div>
    </>
  )
}

export default Portfolio