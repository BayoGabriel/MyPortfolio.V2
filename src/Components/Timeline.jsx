import React from "react";
import "../Assets/Styles/timeline.css"

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="container-lg cont_tml">
        <div className="row body">
        <div className="header" data-aos="fade-left" data-aos-duration="1000ms">
          <span>Timeline</span>
          <h3>Timeline Period</h3>
        </div>
          <div className="col-lg-6 col-md-6 dfg">
            <div className="tt" data-aos="fade-left" data-aos-duration="1000ms"><h3>Experience</h3></div>
            <div className="item" data-aos="fade-up" data-aos-duration="1000ms">
              <div className="exp">
              <h4>ITB Tech</h4>
              <p>Back-End Developer</p>
              </div>
              <div className="date">
                2023-Now
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="1000ms">
              <div className="exp">
              <h4>ITB Tech</h4>
              <p>Front-End Development</p>
              </div>
              <div className="date">
                2022-Now
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="1000ms">
              <div className="exp">
              <h4>Freelance</h4>
              <p>WordPress Developer</p>
              </div>
              <div className="date">
                2019-Now
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 dfg">
            <div className="tt" data-aos="fade-left" data-aos-duration="1000ms"><h3>Education</h3></div>
            <div className="item" data-aos="fade-up" data-aos-duration="1000ms">
              <div className="exp">
              <h4>Meta</h4>
              <p>FullStack Development</p>
              </div>
              <div className="date">
                2023
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="1000ms">
              <div className="exp">
              <h4>OAUSTECH</h4>
              <p>Electrical Engineering</p>
              </div>
              <div className="date">
                2017-2023
              </div>
            </div>
            <div className="item" data-aos="fade-up" data-aos-duration="1000ms">
              <div className="exp">
              <h4>St. Alphonsus</h4>
              <p>Senior Secondary School</p>
              </div>
              <div className="date">
                2014-2017
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Timeline;