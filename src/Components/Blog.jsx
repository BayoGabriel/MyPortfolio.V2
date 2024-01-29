import React from 'react'
import  "../Assets/Styles/blog.css"
import blog1 from "../Assets/Images/portfolio-image-3.jpg"
import blog2 from "../Assets/Images/portfolio-image-2.jpg"
import blog3 from "../Assets/Images/portfolio-image-6.jpg"

const Blog = () => {
  return (
    <div>
        <div className="container-lg">
            <div className="blog" id='blog'>
            <div className="header">
              <span>Blog</span>
              <h3>Recent Posts</h3>
            </div>
            <div className="row dfghj">
                  <div className="col-lg-4 col-md-6 col-sm-12 newsrow">
                    <div className="image">
                    <img src={blog1} alt="" />
                    </div>
                    <div className="details">
                      <div className="meta">
                        <span className="admin">
                          <a href="#blog" className="line_effect">Bayode</a>
                        </span>
                        <span className="admin">
                          <a href="#blog" className="line_effect">Web Design</a>
                        </span>
                      </div>
                      <div className="title">
                        <h3>
                          <a href="#blog" className="text_hover_effect">Secrets of the Mobile Application</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 newsrow">
                    <div className="image">
                    <img src={blog2} alt="" />
                    </div>
                    <div className="details">
                      <div className="meta">
                        <span className="admin">
                          <a href="#blog" className="line_effect">Bayode</a>
                        </span>
                        <span className="admin">
                          <a href="#blog" className="line_effect">Web Design</a>
                        </span>
                      </div>
                      <div className="title">
                        <h3>
                          <a href="#blog" className="text_hover_effect">The art of programming</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 newsrow">
                    <div className="image">
                    <img src={blog3} alt="" />
                    </div>
                    <div className="details">
                      <div className="meta">
                        <span className="admin">
                          <a href="#blog" className="line_effect">Bayode</a>
                        </span>
                        <span className="admin">
                          <a href="#blog" className="line_effect">Web Design</a>
                        </span>
                      </div>
                      <div className="title">
                        <h3>
                          <a href="#blog" className="text_hover_effect">Tips on brand design and positioning</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog