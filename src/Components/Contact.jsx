import React from 'react'
import "../Assets/Styles/contact.css";
import mal from "../Assets/Images/mail.svg";
import x from "../Assets/Images/twitter.svg";
import ln from "../Assets/Images/linkedin2.svg";
import gth from "../Assets/Images/github.svg";
import send from "../Assets/Images/send.svg";
import axios from 'axios';
import { useState } from 'react';

const Contact = () => {
  return (
    <>
      <div className="big">
        <div className="container-lg">
          <div className="conuy" id='contact'>
          <div className="header">
            <span>contact</span>
            <h3>Let's talk</h3>
          </div>
          <div id="accordion">
          <div className="card trey">
          <div className="btn card-header ngga" data-bs-toggle="collapse" href="#collapseOne">
          WORKING DAYS
          </div>
          <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
              <div className="card-body">             
                <div className="dejav"><p>
                Our company provides services for our customers between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday. You can visit or call during these days. <br /> <strong>Weekends:</strong> Saturday and Sunday.                   
              </p> </div>            
              </div>
          </div>
          </div>
          <div className="card trey">
          <div className="card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
              Social Profile
          </div>
          <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
              <div className="dejav mage">
                <div className="mgfst">
                  <a href="mailto:bayogabriel24@gmail.com">Facebook</a>
                  <a href="https://github.com/BayoGabriel">Gthub</a>
                  <a href="we.cum">Instagram</a>
                </div>
                <div className="mgfst">
                  <a href="https://www.linkedin.com/in/bayogabr/">Linkedin</a>
                  <a href="https://x.com/bayogabr">X</a>
                  <a href="wa.me">Whatsapp</a>
                </div>
              </div>
            </div>
          </div>
          </div>

          <div className="card trey">
          <div className=" card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
            OTHER INFO
          </div>
          <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
              <div className="crf dejav">
                <div className="hesd">
                  <ul>
                    <li>Name:</li>
                    <li>Phone:</li>
                    <li>Email:</li>
                  </ul>
                </div>
                <div className="tesd">
                  <ul>
                    <li>Bayode Gabriel</li>
                    <li><a href="tel:+234 7068 4141 04">+234 7068 4141 04</a></li>
                    <li><a href="mailto:bayogabriel24@gmail.com">bayogabriel24@gmail.com</a></li>
                  </ul>
                </div>
              </div>
              </div>
          </div>
          </div>
          <div className="card trey">
          <div className="card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
          FILL THE FORM
          </div>
          <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
              <div className="dejav">
                <form action="">

                </form>
              </div>
              </div>
          </div>
          </div>
          <div className="card trey">
          <div className="card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
            Location
          </div>
          <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
              <iframe
                className='google dejav'
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
    </>
  )
}

export default Contact