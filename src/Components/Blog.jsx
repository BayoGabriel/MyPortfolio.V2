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