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
            <div className="row details">
                <div className="col-lg-4 item">
                    <img src={design} alt="" />
                    <h4>Creative Design</h4>
                    <hr />
                    <ul>
                        <li>Bootstrap</li>
                        <li>AOS</li>
                    </ul>
                </div>
                <div className="col-lg-4 item">
                    <img src={web} alt="" />
                    <h4>Web Development</h4>
                    <hr />
                    <ul>
                        <li>Bootstrap</li>
                        <li>AOS</li>
                    </ul>
                </div>
                <div className="col-lg-4 item">
                    <img src={mobile} alt="" />
                    <h4>Mobile Developemnt</h4>
                    <hr />
                    <ul>
                        <li>Bootstrap</li>
                        <li>AOS</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services