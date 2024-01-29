import React from 'react'
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
            </div>
            <div className="row dfghj">
                  <div className="col-lg-4 col-md-6 col-sm-12 newsrow">
                    <img src={blog1} alt="" />
                    <div className="details">
                      <div className="meta">
                        <span className="admin">
                          By
                          <a href="#blog" className="line-effect">Bayode</a>
                        </span>
                        <span className="category">
                          In 
                          <a href="#blog" className="line-effect">Web Design</a>
                        </span>
                      </div>
                      <div className="title">
                        <h3>
                          <a href="#blog" className="text_hover_effect">Secrets of the Mobile Application</a>
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