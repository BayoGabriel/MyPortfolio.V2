import React from 'react'
import "../Assets/Styles/contact.css"
import mal from "../Assets/Images/mail.svg"
import x from "../Assets/Images/twitter.svg"
import ln from "../Assets/Images/linkedin2.svg"
import gth from "../Assets/Images/github.svg"
import send from "../Assets/Images/send.svg"
import axios from 'axios'
import { useState } from 'react'

const Contact = () => {


  return (
    <div className='big'>
      <div className="container-lg">
        <div className="conuy" id='contact'>
        <div className="header">
          <span>Contact</span>
          <h3>Let's Talk</h3>
        </div>
        <div className="accordion" id="accordionExample">
          <div className="accordion-item trey">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button ngga" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              WORKING DAYS
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body"><p>
              Our company provides services for our customers between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday. You can visit or call during these days. <br /> <strong>Weekends:</strong> Saturday and Sunday.
              </p>
              </div>
            </div>
          </div>
          <div className="accordion-item trey">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button ngga collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Social Profile
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className="mage">
                <a href="mailto:bayogabriel24@gmail.com"><div className="out"><img src={mal} alt="mal" /></div></a>
                <a href="https://github.com/BayoGabriel"><div className="out"><img src={gth} alt="mal" /></div></a>
                <a href="https://www.linkedin.com/in/bayogabr/"><div className="out"><img src={ln} alt="mal" /></div></a>
                <a href="https://twitter.com/bayogabr"><div className="out"><img src={x} alt="mal" /></div></a>
                </div>
              </div>
            </div>
          </div>
          <div className="accordion-item trey">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button ngga collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              EXTRA INFO
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              </div>
            </div>
          </div>
          <div className="accordion-item trey">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button ngga collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
              FILL THE FORM
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              </div>
            </div>
          </div>
          <div className="accordion-item trey">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button ngga collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                Location
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className="map">
                <iframe className='google'
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.099054529386!2d3.2841921739755118!3d6.6346191218641755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90c30514a3b7%3A0xefab169a6ad11d5e!2sIbikunle%20Adesalu%20St%2C%20Oke%20Odo%2C%20Abule-Egba%2FAboru%2FMeiran%2FAlagbado%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1705576106988!5m2!1sen!2sng"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
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

export default Contact