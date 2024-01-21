import React from 'react'
import "../Assets/Styles/testimonials.css"
import ayo from "../Assets/Images/ayo.jpg"
import star from "../Assets/Images/star-svgrepo-com.svg"

const Testimonial = () => {
  return (
    <div id='testimonial' className='big'>
        <div className="container-lg testimonial_section">
            <div className="conttt">
            <div className="header">
                <span>Testimonial</span>
                <h3>Valuable Feedback</h3>
            </div>
            <div className="testb">
              <div className="testhead">
                <div className="tre">
                  <h4>Amzat AbdulMalik</h4>
                  <span>Software Developer</span>
                </div>
                <img src={ayo} alt="" />
              </div>
              <div className="desc">
                <div className="woww"><img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                <img src={star} alt="star" />
                </div>
                <p>I generally begin with what people are doing well. It’s too deflating for them if you start by immediately identifying all the things that are wrong. There’s a tipping point when any more negative feedback could shatter their confidence. If it’s really bad work, I ask them to stop and have a different kind of discussion. There are times where you may need just to say, ‘Stop, we need to reset. I generally begin with what people are doing well. It’s too deflating for them if you start by immediately identifying all the things that are wrong.</p>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="svg replaced-svg">
                <path d="M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z" fill="#000000"></path>
                <path d="M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z" fill="#000000"></path>
              </svg>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial