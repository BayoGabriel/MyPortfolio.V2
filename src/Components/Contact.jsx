import React from 'react';
import { Accordion, Card, Button } from 'react-bootstrap';
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
    <div className='big'>
      <div className="container-lg">
        <div className="conuy" id='contact'>
          <div className="header">
            <span>Contact</span>
            <h3>Let's Talk</h3>
          </div>
          <Accordion defaultActiveKey="0">
            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="0">
                  WORKING DAYS
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="0">
                <Card.Body>
                  Our company provides services for our customers between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday. You can visit or call during these days. <br /> <strong>Weekends:</strong> Saturday and Sunday.
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="1">
                  Social Profile
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="1">
                <Card.Body>
                  <div className="mage">
                    <a href="mailto:bayogabriel24@gmail.com"><div className="out"><img src={mal} alt="mal" /></div></a>
                    <a href="https://github.com/BayoGabriel"><div className="out"><img src={gth} alt="mal" /></div></a>
                    <a href="https://www.linkedin.com/in/bayogabr/"><div className="out"><img src={ln} alt="mal" /></div></a>
                    <a href="https://twitter.com/bayogabr"><div className="out"><img src={x} alt="mal" /></div></a>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="2">
                  EXTRA INFO
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="2">
                <Card.Body>
                  {/* Content for EXTRA INFO */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="3">
                  FILL THE FORM
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="3">
                <Card.Body>
                  {/* Content for FILL THE FORM */}
                </Card.Body>
              </Accordion.Collapse>
            </Card>

            <Card>
              <Card.Header>
                <Accordion.Toggle as={Button} variant="link" eventKey="4">
                  Location
                </Accordion.Toggle>
              </Card.Header>
              <Accordion.Collapse eventKey="4">
                <Card.Body>
                  <div className="map">
                    <iframe
                      className='google'
                      title="Google Map"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.099054529386!2d3.2841921739755118!3d6.6346191218641755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90c30514a3b7%3A0xefab169a6ad11d5e!2sIbikunle%20Adesalu%20St%2C%20Oke%20Odo%2C%20Abule-Egba%2FAboru%2FMeiran%2FAlagbado%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1705576106988!5m2!1sen!2sng"
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Contact;
