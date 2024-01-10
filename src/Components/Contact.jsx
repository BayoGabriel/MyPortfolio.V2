import React from 'react'
import "../Assets/Styles/contact.css"
import { useEffect } from "react";
import ProgressBar  from "react-bootstrap/ProgressBar";
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
        <div className="container contact_section">
            <div className="header">
                <span>Portfolio</span>
                <h3>Get In Touch</h3>
            </div>
            <Accordion defaultActiveKey="0">
                            <Card className="each">
                            <Card.Header className="header">
                            <CustomToggle eventKey="0" className="tit">Front-End Stack</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="each">
                            <Card.Header className="header">
                            <CustomToggle eventKey="1" className="tit">Back-End Stack</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                            <div className="first">
                                    <div className="ass">
                                        <img src={express} alt="svf" /> <span>Express.js</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={Nodejs} alt="svf" /> <span>Node.js</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={Python} alt="svf" /> <span>Python</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={Flask} alt="svf" /> <span>Flask</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={NoSQL} alt="svf" /> <span>NoSQL (MongoDB)</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>                                    
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="each">
                            <Card.Header className="header">
                            <CustomToggle eventKey="2" className="tit">Others</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                            <div className="first">
                                    <div className="ass">
                                        <img src={git} alt="svf" /> <span>Git</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={github} alt="svf" /> <span>GitHub</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>    
                                    <div className="ass">
                                        <img src={ts} alt="svf" /> <span>TypeScript</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>                            
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
        </div>
    </div>
  )
}

export default Contact