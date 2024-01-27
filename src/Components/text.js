
blog.js: import React from 'react'
import  "../Assets/Styles/blog.css"
import blog1 from "../Assets/Images/kk.jpg"
import blog2 from "../Assets/Images/kk.jpg"
import blog3 from "../Assets/Images/kk.jpg"

const Blog = () => {
  return (
    <div>
        <div className="container-lg">
            <div className="blog" id='blog'>
            <div className="header">
                <span>Blog</span>
                <h3>Recent Posts</h3>
                <div className="row dfghj">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={blog1} alt="" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={blog2} alt="" />
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <img src={blog3} alt="" />
                  </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Blog
blog.css: .header {
    width: 100%;
	margin-bottom: 70px;
}
.header h3{
	font-size: 45px;
	font-weight: 700;
}
.header span{
	display: inline-block;
	margin-bottom: 10px;
	text-transform: uppercase;
	position: relative;
	padding-left: 60px;
}
.header span:before{
	position: absolute;
	content: "";
	width: 40px;
	height: 1px;
	background-color: #868a9b;
	left: 0px;
	top: 50%;
	transform: translateY(-50%);
}
#blog {
	padding: 50px;
	margin-top: 5rem;
	padding-top: 7.5rem;
}
img {
	max-width: 100%;
}
.dfghj div {
	padding: 25px;
}
@media (max-width: 450px) {
	#blog {
		padding: 0px;
	}
}
@media (max-width: 767px) {
	#blog {
		padding: 10px;
	}
}
contact.js: import React from 'react'
import "../Assets/Styles/contact.css";

const Contact = () => {
  return (
    <>
      <div className="big">
        <div className="container-lg">
          <div className="conuy" id='contact'>
          <div className="header">
            <span>contact</span>
            <h3>Let's talk</h3>
          </div>
          <div id="accordion">
          <div className="card trey">
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
          <div className="card trey">
          <div className="card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseTwo">
              Social Profile
          </div>
          <div id="collapseTwo" className="collapse" data-bs-parent="#accordion">
            <div className="card-body">
            <div className="social dejav">
            <ul>
            <li><a class="line_effect" href="#gfhf">Facebook</a></li>
            <li><a class="line_effect" href="#gdhd">Instagram</a></li>
            <li><a class="line_effect" href="#gdhd">Behance</a></li>
            <li><a class="line_effect" href="#gdhd">Dribbble</a></li>
            <li><a class="line_effect" href="#gdhd">YouTube</a></li>
            <li><a class="line_effect" href="#gdhd">Linkedin</a></li>
            </ul>
            </div>
            </div>
          </div>
          </div>

          <div className="card trey">
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
          <div className="card trey">
          <div className="card-header ngga collapsed btn" data-bs-toggle="collapse" href="#collapseFour">
          FILL THE FORM
          </div>
          <div id="collapseFour" className="collapse" data-bs-parent="#accordion">
              <div className="card-body">
                <div className="form_cont dejav">
                  <form action="">
                    <ul className='row'>
                      <li className='merun'><input type="text" placeholder='Your Name'/></li>
                      <li className='merun'><input type="email" placeholder='Email'/></li>
                      <li className='merun'><input type="tel" placeholder='Phone'/></li>
                      <li className='merun'>
                      <select name="contact_subject" className="tyy" placeholder='Select Service'>
                        <option value="" disabled>Select Service</option>
                        <option value="Web Development">Web Development</option>
                        <option value="Mobile Application">Mobile Application</option>
                      </select>
                      </li>
                      <li className='merun'><textarea name="message" id="" placeholder='Your Message'></textarea></li>
                      <li><button>Send Message</button></li>
                    </ul>
                  </form>
                </div>
              </div>
          </div>
          </div>
          <div className="card trey">
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
contact.css : .conuy {
	padding: 50px;
	margin-top: 5rem;
	padding-top: 7.5rem;
}
.google {
	width: 100%;
	height: 400px;
	outline: none;
}
.google:hover {
	transform: scale(1.02);
}
.mage {
	display: flex;
	align-items: center;
	width: 100%;
}
.mgfst  {
	display: flex;
	flex-direction: column;
}
.mgfst:last-child {
	margin-left: 50px;
}
.dejav {
	padding: 25px;
	color: #868a9b !important;
}
.trey {
	border: none !important;
	margin-bottom: 10px;
}
.trey button:focus {
	box-shadow: none;
}

.ngga {
	width: 100% !important;
    background-color: #eaeaea !important;
    padding: 25px 40px !important;
    cursor: pointer !important;
	font-size: 17px !important;
	font-weight: 700 !important;
	text-transform: uppercase;
	text-align: start;
	margin-bottom: 5px;
}
.ngga:focus {
	box-shadow: none;
}
.crf {
	display: flex;
}
.card .btn {
	text-align: start;
}
.crf ul li {
	list-style-type: none;
}
.crf .tesd {
	margin-right: 200px;
}
.crf ul li {
	margin-bottom: 5px;
}
.crf .tesd ul li a {
	text-decoration: none;
	color: #000000;
	line-height: 1.1;
}
.crf .tesd ul li a:hover {
	text-decoration: underline;
	transition: ease-in .5s;
}
@media (max-width: 768px) {
	.ngga {
		padding: 25px 30px !important;
	}
	.info_list ul li span:first-child{min-width: auto;}
}
@media (max-width: 450px) {
	.conuy {
		padding: 0px;
	}
	.dejav {
		padding: 0;
	}
}
@media (max-width: 767px) {
	.conuy {
		padding: 10px;
	}
	.dejav {
		padding: 5px;
	}
	.crf .tesd {
		margin-right: 5px;
	}
}
.social{
	width: 100%;
}
.social ul{
	display: flex;
	flex-wrap: wrap;
	margin-left: -20px;
}
.social li{
	width: 50%;
	margin-bottom: 14px;
	padding-left: 20px;
	list-style-type: none;
}
.social li:last-child{
	margin-bottom: 0px;
}
.social li a{
	color: #868a9b;
	text-decoration: none;
}
.line_effect{
	text-decoration: none;
	color: #fff;
	display: inline-block;
	position: relative;
}
.line_effect:after{
	content: '';
    width: 0;
    height: 1px;
    position: absolute;
    left: auto;
    right: 0;
    bottom: 3px;
    transition: width .6s cubic-bezier(.25,.8,.25,1) 0s;
    background: currentColor;
}
.line_effect:hover:after{
	width:100%;
	left:0;
	right:auto;
}
.info_list{
	width: 100%;
}
.info_list ul li{
	width: 100%;
	margin-bottom: 14px;
	list-style-type: none;
}
.accordion_wrap .info_list ul li:last-child{
	margin-bottom: 0px;
}
.info_list ul li span{
	display: inline-block;
}.info_list ul li span:first-child{
	min-width: 135px;padding-right: 20px;
}
.info_list ul li a{
	color: #000;
}
.form_cont ul li {
	list-style-type: none;
	padding: 10px;
	width: 50%;
}
.form_cont ul li:nth-last-child(2) {
	width: 100%;
}
.form_cont ul li input {
	width: 100%;
    height: 50px;
    padding: 5px 20px;
    background-color: #eaeaea;
    font-size: 16px;
    color: #868a9b;
	border: none;
}
input:focus {
	outline: none;
}
input:required:invalid {
	border-bottom: 1px solid red;
}
.form_cont ul li textarea {
	width: 100%;
    height: 50px;
    padding: 5px 20px;
    background-color: #eaeaea;
    font-size: 16px;
    color: #868a9b;
	border: none;
	height: 200px;
}
textarea:focus {
	outline: none;
}
.tyy {
	width: 100%;
    height: 50px;
    padding: 5px 20px;
    background-color: #eaeaea;
    font-size: 16px;
    color: #868a9b;
	border: none;
}
.tyy:focus {
	outline: none;
}
.form_cont button {
	color: #fff!important;
    display: inline-block!important;
    background-color: #000!important;
    padding: 20px 50px!important;
    position: relative!important;
    border: none!important;
    cursor: pointer;
    font-size: 16px;
}
hero.js: import React from 'react'
import "../Assets/Styles/hero.css"
import 'aos/dist/aos.css';
import banner from "../Assets/Images/mybanner.png"
import { Typewriter, useTypewriter } from 'react-simple-typewriter'

const Hero = () => {

 
  const [text] = useTypewriter({
    words: ['Software Engineer', 'Full-stack Developer'],
    loop: 0
  })
  const [text1] = useTypewriter({
    words: ['Problem Solver', 'Continuous Learner', 'Quick Learner'],
    loop: 0
  })
  
  
  return (
   <div className='container-lg' id='home'>
    <div className="row both">
      <div className="col-lg-6 col-md-6 left">
      <img className="mgg" src={banner} alt='gh'/>
      </div>
      <div className="col-lg-6 col-md-6 right">
        <div className="naw">
        <h3 className="stroke">BAYODE</h3>
        <h3>Gabriel</h3>
        <div class="htt">           
        <span>{text}</span><span>{text1}</span>
        </div>
        </div>
      </div>
    </div>
   </div>
  )
}

export default Hero
hero.css: #home {
	margin-top: 5rem;
	padding: 50px;
	padding-top: 7.5rem;
}
.left .mgg {
	max-width: 100%;
	height: 400px;
	animation: morph 8s ease-in-out infinite;
	border: 20px solid #f7f7f7;
}
@keyframes morph {
	0% {
		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
   }
	50% {
		border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
   }
	100% {
		border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
   }
}
.naw {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
.both {
	display: flex;
	align-items: center;
	justify-content: center;
}
.right h3 {
	font-size: 5rem;
	font-weight: 800;
	line-height: 1.1;
	text-transform: uppercase;
	font-family: 'Archivo Black', sans-serif;
}
.stroke{
	color: transparent;
	-webkit-text-stroke: 1px #000;
}
.htt {
	display: inline-block;
	background-color: #f7f7f7;
	padding: 15px 40px;
	margin-top: 30px;
	max-width: 100%;
}
.htt span {
	position: relative;
	display: inline-block;
	padding-right: 15px;
	margin-right: 10px;
}
.htt span:after{
	position: absolute;
	content: "";
	width: 6px;
	height: 6px;
	background-color: rgba(0,0,0,.15);
	right: 0px;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 100%;
}
.htt span:last-child{
	margin: 0px;
	padding: 0px;
}
.htt span:last-child:after{
	display: none;
}
.left {
	display: flex;
	align-items: center;
	justify-content: center;
}
@media (max-width: 1600px) {
	.left .mgg{width: 350px;height: 350px;}
	h3{font-size: 85px;}
	.htt{margin-top: 20px;}
 }
@media (max-width: 1040px) {
	.both{flex-direction: column; justify-content: center; align-items: center;}
	.left .mgg{width: 300px;height: 300px;}
	.naw{padding-left: 0px;}
	.right h3{font-size: 60px;}
	.htt{font-size: 10px 25px;}
	#home { padding: 20px;}
	.right {
		padding-right: 0 !important;
		margin-right: 0 !important;
	}
}
@media (max-width: 450px) {
	#home {
		padding: 0px;
	}
}
@media (max-width: 767px) {
	#home {
		padding: 10px;
	}
}
footer.js: import React from 'react'
import '../Assets/Styles/footer.css'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='container-lg'>
        <h5>Built by Gabriel © 2024</h5>
        </div>
    </div>
  )
}

export default Footer
footer.css: .footer {
    text-align: center;
    background-color: #eaeaea;
    color: #000000;
    margin-bottom: 0;
    height: 5rem;
    padding: 10px;
    align-items: center;
    display: flex;
    width: 100%;
}
Navbar.js: import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../Assets/Images/gabriel-high-resolution-logo-transparent.png"
import "../Assets/Styles/nav.css"

function MyNav() {
  return (
    <>
    <Navbar expand="lg" className="idan" fixed="top">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} className='logo' alt="logo" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#timeline">Timeline</Nav.Link>
            <Nav.Link href="#testimonial">Testimonial</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default MyNav;
nav.css: .idan {
    background-color: #fff;
    width: 100%;
}
#preloader {
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 99999;
    display: flex;
}
#preloader:before,
#preloader:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 50%;
    height: 100%;
    z-index: -1;
    background-color: #f7f7f7;
    -webkit-transition: all 0.3s ease 0s;
    -o-transition: all 0.3s ease 0s;
    transition: all 0.3s ease 0s;
}
#preloader:after {
    left: auto;
    right: 0;
}
#preloader .loader_line {
    margin: auto;
    width: 1px;
    height: 250px;
    position: relative;
    overflow: hidden;
    -webkit-transition: all 0.8s ease 0s;
    -o-transition: all 0.8s ease 0s;
    transition: all 0.8s ease 0s;
}
.loader_line:before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    width: 1px;
    height: 0%;
    -webkit-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
    background-color: #353535;
    -webkit-animation: lineheight 1000ms ease-in-out 0s forwards;
    -o-animation: lineheight 1000ms ease-in-out 0s forwards;
    animation: lineheight 1000ms ease-in-out 0s forwards;
}
.loader_line:after {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 1px;
    height: 100%;
    background-color: #999;
    -webkit-transform: translateY(-100%);
    -ms-transform: translateY(-100%);
    -o-transform: translateY(-100%);
    transform: translateY(-100%);
    -webkit-animation: lineround 1200ms linear 0s infinite;
    -o-animation: lineround 1200ms linear 0s infinite;
    animation: lineround 1200ms linear 0s infinite;
    animation-delay: 2000ms;
}
@keyframes lineheight {
    0% {
        height: 0%;
    }
    100% {
        height: 100%;
    }
}
@keyframes lineround {
    0% {
        -webkit-transform: translateY(-100%);
        -ms-transform: translateY(-100%);
        -o-transform: translateY(-100%);
        transform: translateY(-100%);
    }
    100% {
        -webkit-transform: translateY(200%);
        -ms-transform: translateY(200%);
        -o-transform: translateY(200%);
        transform: translateY(200%);
    }
}
.preloaded .loader_line:after {
    opacity: 0;
}
.preloaded .loader_line {
    opacity: 0;
    height: 100% !important;
}
.preloaded:before,
.preloaded:after {
    -webkit-animation: preloadedzero 300ms ease-in-out 500ms forwards;
    -o-animation: preloadedzero 300ms ease-in-out 500ms forwards;
    animation: preloadedzero 300ms ease-in-out 500ms forwards;
}
@keyframes preloadedzero {
    0% {
        width: 50%;
    }
    100% {
        width: 0%;
    }
}
preloader.js import React from 'react'
import "../Assets/Styles/nav.css"

const Preloader = () => {
  return (
    <div>
        <div id="preloader">
        <div class="loader_line"></div>
        </div>
    </div>
  )
}

export default Preloader
portfolio.js: import React, { useState } from 'react';
import "../Assets/Styles/port.css";
import oner from "../Assets/Images/WhatsApp Image 2023-12-03 at 20.45.56_6e726a7e.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'School Portal',
      category: ['react', 'node'],
      img: oner,
      text: "A School management system",
      link: ""
    },
    {
      title: 'Agency Website',
      category: ['react'],
      img: oner,
      text: "na ham na ham",
      link: ""
    },
    {
      title: 'Project 3',
      category: ['node'],
      img: oner,
      text: "na ham na ham",
      link: ""
    },
    {
      title: 'School Portal',
      category: ['html/css', 'node'],
      img: oner,
      text: "na ham na ham",
      link: ""
    },
    {
      title: 'django lomo',
      category: ['django'],
      img: oner,
      text: "na ham na ham",
      link: ""
    },
    {
      title: 'Project 3',
      category: ['node'],
      img: oner,
      text: "na ham na ham",
      link: ""
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <div className='big'>
      <div className="container-lg">
        <div className='project' id='portfolio'>
          <div className="header">
            <span>Portfolio</span>
            <h3>My Works</h3>
          </div>
          <div className="btns">
            {['all', 'html/css', 'react', 'node', 'django'].map(category => (
              <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
          <div className='row'>
            {filteredProjects.map((project, index) => (
              <div key={index} className="col-sm-12 col-lg-4 pro">
                <div className="amza">
                  <img src={project.img} alt="" />
                  <h4>{project.title}</h4>
                  <p>{project.text}</p>
                  <a href={project.link}>Demo</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

port.css: .header {
    width: 100%;
	margin-bottom: 70px;
}
.header h3{
	font-size: 45px;
	font-weight: 700;
}
.header span{
	display: inline-block;
	margin-bottom: 10px;
	text-transform: uppercase;
	position: relative;
	padding-left: 60px;
}
.header span:before{
	position: absolute;
	content: "";
	width: 40px;
	height: 1px;
	background-color: #868a9b;
	left: 0px;
	top: 50%;
	transform: translateY(-50%);
}
.project {
	padding: 50px;
	margin-top: 5rem;
	padding-top: 7.5rem;
}
.btns {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-bottom: 25px;
	margin-top: 10px;
	padding: 20px;
}
.btns button {
    display: inline-block;
	margin: 10px;
    padding: 10px 25px;
    border: none;
    margin-bottom: 2.5rem;
	text-transform: uppercase;

}
.btns button:hover {
	transition: ease-in 500ms;
	background-color: #000000;
	color: #eaeaea;
}
.btns .active {
	background-color: #000000;
	color: #eaeaea;
	border-radius: 25px;
}
.pro {
	padding: 25px;	
}
.amza {
	padding: 35px 25px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: #ffffffbc;
}
.amza h4 {
	margin-top: 5px;
}
.amza a {
	color: #000000;
	background-color: #eaeaea;
	padding: 10px 25px;
	width: fit-content;
	text-decoration: none;
	margin-top: 5px;
}
.amza:hover {
	transform: scale(1.05);
	transition: ease-in 0.3s;
}
.amza a:hover {
	background-color: transparent;
	border: 1px solid #000000;
	border-radius: 25px;
	transition: ease-in 50ms;
}
@media (max-width: 450px) {
	.project {
		padding: 0px;
	}
}
@media (max-width: 767px) {
	.project {
		padding: 10px;
	}
}
service.js: import React from 'react'
import design from "../Assets/Images/design.svg"
import web from "../Assets/Images/development.svg"
import mobile from "../Assets/Images/mobile.svg"
import "../Assets/Styles/service.css"
import { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {
    useEffect(() => {
        AOS.init();
    }, [])
  return (
    <div id='service'> 
        <div className="container-lg service_section">
            <div className="row service_cont">
            <div className="header" data-aos="fade-up" data-aos-duration="2000">
                <span>Services</span>
                <h3>Quality Services</h3>
            </div>
                <div className="col-md-6 col-lg-4 col-sm-12 service" data-aos="fade-right" dat-aos-duration="4000">
                    <div className="inner">
                    <img src={design} alt="alf" />
                    <h4>Responsive Design</h4>
                    <hr />
                    <ul className='list'>
                        <li>span</li>
                        <li>Bootstrap</li>
                        <li>Modern Animations</li>
                    </ul>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12 service" data-aos="fade-right" dat-aos-duration="6000">
                   <div className="inner">
                   <img src={web} alt="alf" />
                    <h4>Web Development</h4>
                    <hr />
                    <ul className='list'>
                        <li>NodeJs</li>
                        <li>Python(Django)</li>
                        <li>Javascript(React)</li>
                    </ul>
                   </div>
                </div>
                <div className="col-md-6 col-lg-4 col-sm-12 service" data-aos="fade-right" dat-aos-duration="8000">
                    <div className="inner">
                    <img src={mobile} alt="alf" />
                    <h4>App Development</h4>
                    <hr />
                    <ul className='list'>
                        <li>React-Native</li>
                        <li>Cross Platform Apps</li>
                        <li>Firebase</li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
service.css: 
.service_cont {
    display: flex;
    justify-content: space-between;
	padding: 50px;
	margin-top: 5rem;
	padding-top: 7.5rem;
	max-width: 100%;
}
.service .inner{
    height: 100%;
    background-color: #f7f7f7;
	padding: 70px 50px ;
}
.service {
	margin-bottom: 2.5rem;
}
.service img {
    width: 53px;
	height: 53px;
	color: #999;
	margin-bottom: 20px;
}
.header {
    width: 100%;
	margin-bottom: 70px;
}
.header h3{
	font-size: 45px;
	font-weight: 700;
}
.header span{
	display: inline-block;
	margin-bottom: 10px;
	text-transform: uppercase;
	position: relative;
	padding-left: 60px;
}
.header span:before{
	position: absolute;
	content: "";
	width: 40px;
	height: 1px;
	background-color: #868a9b;
	left: 0px;
	top: 50%;
	transform: translateY(-50%);
}
@media (max-width: 450px) {
	.service_cont {
		padding: 0px;
	}
}
@media (max-width: 767px) {
	.service_cont {
		padding: 10px;
	}
}
testimonial.js: import React from 'react'
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
testimonials.css: .conttt {
    padding: 50px;
	margin-top: 5rem;
	padding-top: 7.5rem;
}
.header {
    width: 100%;
	margin-bottom: 70px;
}
.header h3{
	font-size: 45px;
	font-weight: 700;
}
.header span{
	display: inline-block;
	margin-bottom: 10px;
	text-transform: uppercase;
	position: relative;
	padding-left: 60px;
}
.header span:before{
	position: absolute;
	content: "";
	width: 40px;
	height: 1px;
	background-color: #868a9b;
	left: 0px;
	top: 50%;
	transform: translateY(-50%);
}
.testhead {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #eaeaea;
	padding: 25px 40px;
}
.testhead img {
	width: 60px;
    height: 60px;
    border-radius: 100%;
    object-fit: cover;
}
.testb {
	position: relative;
}
.testb .desc {
    width: 100%;
    padding: 40px 40px 60px;
	background-color: #ffffff;
}
.testb svg {
	position: absolute;
    bottom: -130px;
    right: -100px;
    width: 500px;
    height: 500px;
    opacity: .07;
}
.desc img {
	display: inline-block;
	width: 30px;
	height: 30px;
}
.woww {
	margin-bottom: 30px;
}
.testhead h4 {
	text-transform: uppercase;
	font-size: 17px;
}
@media (max-width: 450px) {
	.conttt {
		padding: 0px;
	}
}
@media (max-width: 767px) {
	.conttt {
		padding: 10px;
	}
	.testhead {padding: 25px 30px;}
	.desc {
		padding: 40px 30px 60px;
	}
}
timeline.js: import React from "react";
import "../Assets/Styles/timeline.css"

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="container-lg cont_tml">
        <div className="row body">
        <div className="header">
          <span>Timeline</span>
          <h3>Timeline Period</h3>
        </div>
          <div className="col-lg-6 col-md-6 dfg">
            <div className="tt"><h3>Experience</h3></div>
            <div className="item">
              <div className="exp">
              <h4>ITB Tech</h4>
              <p>Back-End Developer</p>
              </div>
              <div className="date">
                2023-Now
              </div>
            </div>
            <div className="item">
              <div className="exp">
              <h4>ITB Tech</h4>
              <p>Front-End Development</p>
              </div>
              <div className="date">
                2022-Now
              </div>
            </div>
            <div className="item">
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
            <div className="tt"><h3>Education</h3></div>
            <div className="item">
              <div className="exp">
              <h4>Meta</h4>
              <p>FullStack Development</p>
              </div>
              <div className="date">
                2023
              </div>
            </div>
            <div className="item">
              <div className="exp">
              <h4>OAUSTECH</h4>
              <p>Electrical Engineering</p>
              </div>
              <div className="date">
                2017-2023
              </div>
            </div>
            <div className="item">
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
timeline.css: #timeline {
    width: 100%;
}
.body {
	padding: 50px;
	margin-top: 5rem;
	padding-top: 7.5rem;
}
.header {
    width: 100%;
	margin-bottom: 70px;
}
.header h3{
	font-size: 45px;
	font-weight: 700;
}
.header span{
	display: inline-block;
	margin-bottom: 10px;
	text-transform: uppercase;
	position: relative;
	padding-left: 60px;
}
.header span:before{
	position: absolute;
	content: "";
	width: 40px;
	height: 1px;
	background-color: #868a9b;
	left: 0px;
	top: 50%;
	transform: translateY(-50%);
}
.tt {
	height: 4rem;
	display:flex ;
	align-items: center;
	background-color: #eaeaea;
	padding: 40px 35px 35px 35px;
	border-left: 5px solid rgba(0,0,0,.1);
	margin-bottom: 30px;
}
.tt h3 {
	text-transform: uppercase;
}
.dfg .item {
	width: 100%;
    position: relative;
    display: flex;
    justify-content: space-between;
    background-color: #f7f7f7;
    padding: 40px 35px 35px;
    border-left: 5px solid rgba(0,0,0,.1);
	align-items: center;
	margin-bottom: 10px;
	height: 7.9rem;
}
.dfg .item:last-child {
	margin-bottom: 0;
}
.dfg .item h4 {
	font-size: 17px;
	margin-bottom: 3px;
}
.dfg .date {
	padding: 10px;
	background-color: #ffffff;
	border-radius: 10px;
}
@media (max-width:767px) {
	.dfg:last-child {
		margin-top: 2.5rem;
	}
	.body {
		padding: 10px;
	}
}
@media (max-width: 450px) {
	.body {
		padding: 0px;
	}
}
