import React from "react";
import Accordion from 'react-bootstrap/Accordion';

const About = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <span>Gabriel Bayode</span>
                        <h3>FullStack Developer since 2022</h3>
                        <p>"I'm Gabriel Bayode, a seasoned full-stack developer with a strong passion and commitment to my craft. With 3 years of professional experience in the field, I possess the skills and expertise needed to ensure the success of your project. I find fulfillment in every aspect of the development process, from initial discussions to collaborative efforts."</p>
                        <button>Download CV</button>
                    </div>
                    <div className="col-lg-6">
                        <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Accordion Item #1</Accordion.Header>
                            <Accordion.Body>
                                <div></div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Accordion Item #2</Accordion.Header>
                            <Accordion.Body>
                                <div></div>
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Accordion Item #3</Accordion.Header>
                            <Accordion.Body>
                                <div></div>
                            </Accordion.Body>
                        </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About