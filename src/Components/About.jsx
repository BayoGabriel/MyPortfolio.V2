import React from "react";
import { useEffect } from "react";
import "../Assets/Styles/about.css"
import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import Card from 'react-bootstrap/Card';
import html from "../Assets/Images/html.ed6aaa50.svg"
import css from "../Assets/Images/css.e5e99f36.svg"
import bootstrap from "../Assets/Images/icons8-bootstrap.svg"
import javascript from "../Assets/Images/javascript.b472cbc1.svg"
import rn from "../Assets/Images/react.512a3a7e.svg"
import redux from"../Assets/Images/redux.2fdafc8e.svg"
import express from "../Assets/Images/express-js.1f78831a.svg"
import react from "../Assets/Images/react.svg"
import Nodejs from "../Assets/Images/node.fc4d4b87.svg"
import Flask from "../Assets/Images/icons8-flask.svg"
import git from "../Assets/Images/git.21d80414.svg"
import github from "../Assets/Images/github.svg"
import ts from "../Assets/Images/typescript.97711300.svg"
import Python from "../Assets/Images/icons8-python.svg"
import NoSQL from "../Assets/Images/mongoDB.d8d2b67f.svg"
import ProgressBar  from "react-bootstrap/ProgressBar";
import AOS from 'aos';
import 'aos/dist/aos.css';


function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log(''),
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
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div className="big">
            <div className="container-lg" id="about">
                <div className="row detail">
                    <div className="col-lg-6 aleft" data-aos="fade-up" data-aos-duration="3000">
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
                    <div className="col-lg-6 aright" data-aos="fade-down" data-aos-duration="3000">
                        <Accordion defaultActiveKey="0">
                            <Card className="each">
                            <Card.Header className="header customtoggle">
                            <CustomToggle eventKey="0" className="tit">Front-End Stack</CustomToggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">
                            <Card.Body>
                                <div className="first">
                                    <div className="ass">
                                        <img src={html} alt="svf" /> <span>Html</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={css} alt="svf" /> <span>Css</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={bootstrap} alt="svf" /> <span>Bootstrap</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={javascript} alt="svf" /> <span>JavaScript</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={react} alt="svf" /> <span>React.js</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={rn} alt="svf" /> <span>React Native</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                    <div className="ass">
                                        <img src={redux} alt="svf" /> <span>Redux</span>
                                        <ProgressBar variant="secondary" now={95} style={{height: '5px', marginTop: '5px'}}/>
                                    </div>
                                </div>
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
            </div>
        </div>
    )
}

export default About