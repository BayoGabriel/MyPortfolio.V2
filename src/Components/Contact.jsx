import React from 'react'
import mal from "../Assets/Images/mail.svg"
import x from "../Assets/Images/twitter2.svg"
import ln from "../Assets/Images/linkedin2.svg"
import gth from "../Assets/Images/github.svg"

const Contact = () => {
  return (
    <div>
      <div className="container-lg">
        <div className="row">
          <div className="col-lg-6">
            <h3>Let's Talk</h3>
            <p>Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.</p>
            <h4>Email</h4>
            <div className="mage">
             <img src={mal} alt="mal" />
             <a href="mailto:bayogabriel24@gmail.com">Bayogabriel24@gmail.com</a>
            </div>
            <h4>Socials</h4>
            <div className="soc">
            <img src={gth} alt="mal" />
            <img src={ln} alt="mal" />
            <img src={x} alt="mal" />
            </div>
          </div>
          <div className="col-lg-6">
            <form action="">
            <input type="text" placeholder='Name' name='name'/>
            <input type="email" placeholder='Email' name='email' />
            <input type="text" placeholder='SUbject' name='subject' />
            <input type="text" placeholder='Your message' name='message' />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact