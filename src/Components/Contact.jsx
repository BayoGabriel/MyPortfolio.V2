import { useState, useRef } from "react";
import React from 'react'
import "../Assets/Styles/contact.css";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';

const Contact = () => {

  const form = useRef();
    const [loading, setLoading] = useState(false)
  const sendEmail = (e) => {
    setLoading(true)
    e.preventDefault();
    emailjs.sendForm('service_u5r9l9e', 'template_pjvsoej', form.current, 'gSULIKJWkfY2u3IeJ')
    .then((result) => {
        setLoading(false)
        toast.success('Sent', {
    position: 'top-right',
  })
    }, (error) => {
        setLoading(false)
        toast.error('Something went wrong', {
    position: 'bottom-center',
  })
    });

};
  return (
    <>
      <div className="big">
        <div className="container-lg">
          <div className="conuy" id='contact'>
          <div className="header" data-aos="fade-left" data-aos-duration="1000ms">
            <span>contact</span>
            <h3>Let's talk</h3>
          </div>
          <div id="accordion">
          <div className="card trey" data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000ms">
          <div className="btn card-header ngga" data-bs-toggle="collapse" href="#collapseOne">
          WORKING DAYS
          </div>
          <div id="collapseOne" className="collapse show" data-bs-parent="#accordion">
              <div className="card-body">             
                <div className="dejav"><p>
                Our company provides services for our customers between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday. You can visit or call during these days. <br /> <strong>Weekends:</strong> Saturday and Sunday.                   
              </p> </div>            
              </div>
          </div>
          </div>
          <div className="card trey" data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000ms">
          <div className="card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
              Social Profile
          </div>
          <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            <div className="social dejav">
            <ul>
            <li><a class="line_effect" href="https://www.facebook.com/bayodegabriel27">Facebook</a></li>
            <li><a class="line_effect" href="https://github.com/BayoGabriel">Github</a></li>
            <li><a class="line_effect" href="https://twitter.com/bayogabr">X</a></li>
            <li><a class="line_effect" href="https://www.linkedin.com/in/bayogabr">Linkedin</a></li>
            </ul>
            </div>
            </div>
          </div>
          </div>
          <div className="card trey" data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000ms">
          <div className=" card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseThree">
            OTHER INFO
          </div>
          <div id="collapseThree" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
              <div class="info_list dejav">
              <ul>
              <li>
              <span>Address:</span>
              <span>Lagos, Nigeria</span>
              </li>
              <li>
              <span>Email:</span>
              <span><a class="line_effect" href="mailto:bayogabriel24@gmail.com">Bayogabriel24@gmal.com</a></span>
              </li>
              <li>
              <span>Phone:</span>
              <span><a class="line_effect" href="tel:+2347068414104">+2347068414104</a></span>
              </li>
              <li>
              <span>Website:</span>
              <span><a class="line_effect" href="www.bayogabriel.vercel.app">www.bayogabriel.vercel.app</a></span>
              </li>
              </ul>
              </div>

              </div>
          </div>
          </div>
          <div className="card trey" data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000ms">
          <div className="card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
          FILL THE FORM
          </div>
          <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
                <div className="form_cont dejav">
                  <form ref={form} onSubmit={sendEmail}>
                    <ul className=''>
                      <li><input type="text" name="User_name" placeholder='Your Name'/></li>
                      <li><input type="email" name="User_email" placeholder='Email'/></li>
                      <li><input type="tel" name="user_tel" placeholder='Phone'/></li>
                      <li>
                      <select name="contact_subject" className="tyy" placeholder='Select Service'>
                        <option value="" disabled >Select Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Application">Mobile Application</option>
                      </select>
                      </li>
                      <li><textarea name="message" id="" placeholder='Your Message'></textarea></li>
                      <li><button type="submit" value="Send">Send Message</button></li>
                    </ul>
                  </form>
                </div>
              </div>
          </div>
          </div>
          <div className="card trey" data-aos-offset="-200" data-aos="fade-up" data-aos-duration="1000ms">
          <div className="card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseFive">
            Location
          </div>
          <div id="collapseFive" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
              <iframe
                className='google dejav'
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.099054529386!2d3.2841921739755118!3d6.6346191218641755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b90c30514a3b7%3A0xefab169a6ad11d5e!2sIbikunle%20Adesalu%20St%2C%20Oke%20Odo%2C%20Abule-Egba%2FAboru%2FMeiran%2FAlagbado%20102213%2C%20Lagos!5e0!3m2!1sen!2sng!4v1705576106988!5m2!1sen!2sng"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              </div>
          </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact