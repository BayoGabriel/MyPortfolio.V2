import React from "react";
import "../Assets/Styles/timeline.css"

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="container-lg">
        <div className="header">
          <span>Timeline</span>
          <h3>Timeline Period</h3>
        </div>
        <div className="row body">
          <div className="col-lg-6">
            <div className="tt"><h3>Experience</h3></div>
            <div className="item">
              <div className="exp">
              <h4>TB Tech</h4>
              <p>Front-End Developer</p>
              </div>
              <div className="date">
                2022-Now
              </div>
            </div>
            <div className="item">
              <div className="exp">
              <h4>TB Tech</h4>
              <p>SEO Developement</p>
              </div>
              <div className="date">
                2021-Now
              </div>
            </div>
            <div className="item">
              <div className="exp">
              <h4>Freelance</h4>
              <p>WordPress Developer</p>
              </div>
              <div className="date">
                2019-2022
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="tt"><h3>Education</h3></div>
            <div className="item">
              <div className="exp">
              <h4>TB Tech</h4>
              <p>Front-End Developer</p>
              </div>
              <div className="date">
                2022-Now
              </div>
            </div>
            <div className="item">
              <div className="exp">
              <h4>TB Tech</h4>
              <p>SEO Developement</p>
              </div>
              <div className="date">
                2021-Now
              </div>
            </div>
            <div className="item">
              <div className="exp">
              <h4>Freelance</h4>
              <p>WordPress Developer</p>
              </div>
              <div className="date">
                2019-2022
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Timeline;