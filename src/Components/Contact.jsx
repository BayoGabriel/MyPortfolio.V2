import React from 'react'
import "../Assets/Styles/contact.css"
import mal from "../Assets/Images/mail.svg"
import x from "../Assets/Images/twitter2.svg"
import ln from "../Assets/Images/linkedin2.svg"
import gth from "../Assets/Images/github.svg"

const Contact = () => {
  return (
    <div id='contact'>
      <div className="container-lg contact_section">
        <div className="header">
            <span>Testimonial</span>
            <h3>Let's Talk</h3>
        </div>
        <div className="row box">
          <div className="col-lg-6 cleft">
            <p>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
            <h4>Email</h4>
            <div className="mage">
            <div className="out"><img src={mal} alt="mal" /></div>
            <a href="mailto:bayogabriel24@gmail.com">Bayogabriel24@gmail.com</a>
            </div>
            <h4>Socials</h4>
            <div className="soc">
            <div className="out"><img src={gth} alt="mal" /></div>
            <div className="out"><img src={ln} alt="mal" /></div>
            <div className="out"><img src={x} alt="mal" /></div>
            </div>
          </div>
          <div className="col-lg-6 cright">
            <form action="">
            <input type="text" placeholder='Name' name='name'/>
            <input type="email" placeholder='Email' name='email' />
            <input type="text" placeholder='SUbject' name='subject' />
            <textarea name="message" id="message" placeholder='Your message' cols="30" rows="10"></textarea>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact