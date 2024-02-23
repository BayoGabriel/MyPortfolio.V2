import React, { useState } from 'react';
import "../Assets/Styles/port.css";
import sms from "../Assets/Images/WhatsApp Image 2023-12-03 at 20.45.56_6e726a7e.jpg";
import itb from '../Assets/Images/ignio.jpeg'
import diver from '../Assets/Images/diversi.jpeg'
import xty from '../Assets/Images/xty.jpeg'

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'School Portal',
      category: ['react', 'node'],
      img: sms,
      text: "A school management system",
      link: 'http://schoolmsdemo.netlify.app/'
    },
    {
      title: 'Agency Website',
      category: ['reactjs'],
      img: itb,
      text: 'An agency portfolio website',
      link: 'ignio.vercel.app'
    },
    {
      title: 'SEO Website',
      category: ['html/css'],
      img: xty,
      text: 'A simple SEO website for a company',
      link: 'https://xvty.vercel.app/'
    },
    {
      title: 'Diversicap',
      category: ['html/css'],
      img: diver,
      text: 'An investment landing page',
      link: 'diversicap.com'
    },
    {

    }
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
          <div className="header" data-aos="fade-up" data-aos-duration="1000ms">
            <span>Portfolio</span>
            <h3>My Works</h3>
          </div>
         
          <div className='row'>
             <div className="btns ">
            {['all', 'html/css', 'reactjs', 'node'].map(category => (
              <button
                key={category}
                className={selectedCategory === category ? 'active' : ''}
                onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
            ))}
          </div>
            {filteredProjects.map((project, index) => (
              <div key={index} className="col-sm-12 col-lg-4 pro" data-aos="fade-up" data-aos-duration="1000ms">
                <div className="amza">
                  <img src={project.img} alt="" />
                  <div className="descrrrr">
                  <h4>{project.title}</h4>
                  <p>{project.text}</p>
                  <span > <a className='about_btn' target='_blank' rel="noopener noreferrer" href={project.link}>View Demo</a></span>
                  </div>
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
