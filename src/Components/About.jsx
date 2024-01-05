import React from "react";
import "../Assets/Styles/about.css"
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import html from "../Assets/Images/html.ed6aaa50.svg"
import css from "../Assets/Images/css.e5e99f36.svg"
import bootstrap from "../Assets/Images/icons8-bootstrap.svg"
import javascript from "../Assets/Images/javascript.b472cbc1.svg"
import express from "../Assets/Images/express-js.1f78831a.svg"
import react from "../Assets/Images/react.svg"

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
const About = () => {
    return (
        <div>
            <div className="container" id="about">
                <div className="row">
                    <div className="col-lg-6 left">
                        <div class="about_title">
                        <span>Gabriel Bayode</span>
                        <h3>FullStack Developer since 2022</h3>
                        </div>
                        <div class="text">
                        <p>I'm Gabriel Bayode, a seasoned full-stack developer with a strong passion and commitment to my craft. With 3 years of professional experience in the field, I possess the skills and expertise needed to ensure the success of your project. I find fulfillment in every aspect of the development process, from initial discussions to collaborative efforts.</p>
                        </div>
                        <div class="about_btn">
                        <a href="../Assets/Bayode_Gabriel_CV.pdf" download="">Download CV</a>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <Accordion defaultActiveKey="0">
                        <Card className="each">
                            <Card.Header className="header">
                            <CustomToggle eventKey="0" className="tit">Personal Details</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div className="item">
                                    <span className="one">Name:</span>
                                    <span className="two">Bayode Gabriel</span>
                                </div>
                                <div className="item">
                                    <span className="one">Email:</span>
                                    <span className="two">Bayogabriel24@gmail.com</span>
                                </div>
                                <div className="item">
                                    <span className="one">Phone:</span>
                                    <span className="two">+2347068414104</span>
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="each">
                            <Card.Header className="header">
                            <CustomToggle eventKey="1" className="tit">FrontEnd Stack</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="1">
                            <Card.Body>
                                <div className="first">
                                    <div className="ass">
                                        <img src={html} alt="svf" />
                                    </div>
                                    <div className="ass">
                                        <img src={css} alt="svf" />
                                    </div>
                                    <div className="ass">
                                        <img src={bootstrap} alt="svf" />
                                    </div>
                                    <div className="ass">
                                        <img src={javascript} alt="svf" />
                                    </div>
                                    <div className="ass">
                                        <img src={react} alt="svf" />
                                    </div>
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card className="each">
                            <Card.Header className="header">
                            <CustomToggle eventKey="2" className="tit">BackEnd Stack</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="2">
                            <Card.Body>
                                <div className="second">
                                    <div className="ass">
                                        <img src={express} alt="exp" />
                                    </div>
                                </div>
                            </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About