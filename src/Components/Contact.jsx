import React from 'react'
import "../Assets/Styles/contact.css"
import mal from "../Assets/Images/mail.svg"
import x from "../Assets/Images/twitter.svg"
import ln from "../Assets/Images/linkedin2.svg"
import gth from "../Assets/Images/github.svg"
import send from "../Assets/Images/send.svg"

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
            <h4>Socials</h4>
            <div className="mage">
            <a href="mailto:bayogabriel24@gmail.com"><div className="out"><img src={mal} alt="mal" /></div></a>                      
            <a href="https://github.com/BayoGabriel"><div className="out"><img src={gth} alt="mal" /></div></a>
            <a href="https://www.linkedin.com/in/bayogabr/"><div className="out"><img src={ln} alt="mal" /></div></a>
            <a href="https://twitter.com/bayogabr"><div className="out"><img src={x} alt="mal" /></div></a>
            </div>
            <div className="map">
              <iframe className='goog'
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.099054529386!2d3.2841921739755118!3d6.6346191218641755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90c30514a3b7%3A0xefab169a6ad11d5e!2sIbikunle%20Adesalu%20St%2C%20Oke%20Odo%2C%20Abule-Egba%2FAboru%2FMeiran%2FAlagbado%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1705576106988!5m2!1sen!2sng"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            </div>
          </div>
          <div className="col-lg-6 cright">
            <form action="">
            <input type="text" placeholder='Name' name='name'/>
            <input type="email" placeholder='Email' name='email' />
            <input type="text" placeholder='SUbject' name='subject' />
            <textarea name="message" id="message" placeholder='Your message' cols="30" rows="10"></textarea>
            <button>
              <img src={send} alt="send" /> Send Message
            </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact