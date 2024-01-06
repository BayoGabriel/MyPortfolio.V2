import React from 'react'
import design from "../Assets/Images/design.svg"
import web from "../Assets/Images/development.svg"
import mobile from "../Assets/Images/mobile.svg"
import "../Assets/Styles/service.css"

const Services = () => {
  return (
    <div> 
        <div className="container service_section">
            <div className="header">
                <span>Services</span>
                <h3>Quality Services</h3>
            </div>
            <div className="row service_cont">
                <div className="col-md-3 col-lg-3 col-sm-12 service">
                    <img src={design} alt="alf" />
                    <h4>Responsive Design</h4>
                    <hr />
                    <ul className='list'>
                        <li>Css</li>
                        <li>Javascript(React)</li>
                    </ul>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12 service">
                    <img src={web} alt="alf" />
                    <h4>Web Development</h4>
                    <hr />
                    <ul className='list'>
                        <li>Css</li>
                        <li>Javascript(React)</li>
                    </ul>
                </div>
                <div className="col-md-3 col-lg-3 col-sm-12 service">
                    <img src={mobile} alt="alf" />
                    <h4>App Development</h4>
                    <hr />
                    <ul className='list'>
                        <li>Css</li>
                        <li>Javascript(React)</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services