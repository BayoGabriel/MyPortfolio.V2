import React from 'react';

const MyComponent = () => {
  return (
    <div className="GABRIEL_tm_all_wrap">
      {/* Mobile Menu */}
      <div className="GABRIEL_tm_mobile_menu">
        <div className="mobile_menu_inner">
          <div className="mobile_in">
            <div className="logo">
              <a href="#"><img src="images/logo.png" alt="" /></a>
            </div>
            <div className="trigger">
              <div className="hamburger hamburger--slider">
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown">
          <div className="dropdown_inner">
            <ul className="anchor_nav">
              <li className="current"><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#service">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#timeline">Timeline</a></li>
              <li><a href="#testimonial">Testimonial</a></li>
              <li><a href="#news">News</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="GABRIEL_tm_header">
        <div className="header_inner">
          <div className="logo">
            <a href="index.html"><img src="images/logo.png" alt="" /></a>
          </div>
          <div className="menu">
            <div className="list">
              <ul className="anchor_nav">
                <li className="current"><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#service">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#timeline">Timeline</a></li>
                <li><a href="#testimonial">Testimonial</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="trigger">
              <div className="hamburger hamburger--slider">
                <div className="hamburger-box">
                  <div className="hamburger-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
