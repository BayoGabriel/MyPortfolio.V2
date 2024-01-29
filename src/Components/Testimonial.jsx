import React from 'react'
import "../Assets/Styles/testimonials.css"
import ayo from "../Assets/Images/ayo.jpg"
import star from "../Assets/Images/star-svgrepo-com.svg"

const Testimonial = () => {
  return (
    <div id='testimonial' className='big'>
        <div className="container-lg testimonial_section">
            <div className="conttt">
            <div className="header" data-aos="fade-left" data-aos-duration="1000ms">
                <span>Testimonial</span>
                <h3>Valuable Feedback</h3>
            </div>
            <div className="testb">
              <div className="testhead" data-aos="fade-up" data-aos-duration="1000ms">
                <div className="tre">
                  <h4>Amzat AbdulMalik</h4>
                  <span>Software Developer</span>
                </div>
                <img src={ayo} alt="" />
              </div>
              <div className="desc" data-aos="fade-up" data-aos-duration="1000ms">
              <div className='star d-flex'>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                                <p>&#9733;</p>
                            </div>
                <p>Bayode Gabriel consistently delivers high-quality code within deadlines, displays strong teamwork, communication, and problem-solving skills. An asset to any project.</p>
              </div>
              {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="svg replaced-svg">
                <path d="M9.13456 9H12.1346L10 14.6075H7L9.13456 9Z" fill="#000000"></path>
                <path d="M14.1346 9H17.1346L15 14.6075H12L14.1346 9Z" fill="#000000"></path>
              </svg> */}
            </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonial