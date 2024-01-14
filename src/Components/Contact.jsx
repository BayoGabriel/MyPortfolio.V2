import React from 'react'
import "../Assets/Styles/contact.css"
import "../Assets/Styles/about.css"
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log('totally custom!'),
  );

  return (
    <div
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
}

const Contact = () => {
  return (
    <div id='contact'>
        <div className="container-lg contact_section">
            <div className="header">
                <span>Portfolio</span>
                <h3>Get In Touch</h3>
            </div>
            <Accordion defaultActiveKey="0">
                            <Card className="each">
                            <Card.Header className="heade">
                            <CustomToggle eventKey="0" className="tit">WORKING DAYS</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                              <p>
                              Our company provides services for our customers between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday. You can visit or call during these days.
                              <br />
                              Weekends: Saturday and Sunday.
                              </p>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="each">
                            <Card.Header className="heade">
                            <CustomToggle eventKey="1" className="tit">SOCIAL PROFILES</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>                            
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="each">
                            <Card.Header className="heade">
                            <CustomToggle eventKey="2" className="tit">EXTRA INFO</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="each">
                            <Card.Header className="heade">
                            <CustomToggle eventKey="3" className="tit">FILL A FORM</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="3">
                            <Card.Body>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="each">
                            <Card.Header className="heade">
                            <CustomToggle eventKey="4" className="tit">LOCATION</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="4">
                            <Card.Body>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
        </div>
    </div>
  )
}

export default Contact