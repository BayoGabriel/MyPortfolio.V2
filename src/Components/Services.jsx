import React from 'react'
import design from "../Assets/Images/design.svg"
import web from "../Assets/Images/development.svg"
import mobile from "../Assets/Images/mobile.svg"
import "../Assets/Styles/service.css"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <> 
        <div className="container-lg">
            <div className="servcunt" id='service'>
            <div className="header" data-aos="fade-up" data-aos-duration="1000">
                <span>Services</span>
                <h3>Quality Services</h3>
            </div>
            <div className="row service_cont">
                <div className="col-md-6 col-lg-4 col-sm-12 service" data-aos="fade-up" data-aos-duration="1000ms">
                    <div className="inner">
                    <img src={design} alt="alf" />
                    <h4>Responsive Design</h4>
                    <hr />
                    <ul className='list'>
                        <li>CSS</li>
                        <li>Bootstrap</li>
                        <li>Modern Animations</li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12 service" data-aos="fade-up" dat-aos-duration="1000ms">
                   <div className="inner">
                   <img src={web} alt="alf" />
                    <h4>Web Development</h4>
                    <hr />
                    <ul className='list'>
                        <li>NodeJs</li>
                        <li>Python(Django)</li>
                        <li>Javascript(React)</li>
                    </ul>
                   </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12 service" data-aos="fade-up" dat-aos-duration="1000ms">
                    <div className="inner">
                    <img src={mobile} alt="alf" />
                    <h4>App Development</h4>
                    <hr />
                    <ul className='list'>
                        <li>React-Native</li>
                        <li>Cross Platform Apps</li>
                        <li>Firebase</li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Services