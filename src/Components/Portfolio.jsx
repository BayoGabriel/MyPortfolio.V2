import React, { useState } from 'react';
import "../Assets/Styles/port.css";
import oner from "../Assets/Images/WhatsApp Image 2023-12-03 at 20.45.56_6e726a7e.jpg";

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      title: 'Project 1',
      category: 'html/css',
      img: oner,
      text: "blah blah b;ah"
    },
    {
      title: 'Project 2',
      category: 'react',
      img: oner
    },
    {
      title: 'Project 3',
      category: 'node',
      img: oner
    },
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  };

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
            {projects
              .filter(project => selectedCategory === 'all' || project.category.toLowerCase() === selectedCategory)
              .map((project, index) => (
                <div key={index} className="col-sm-12 col-lg-4">
                  <img src={project.img} alt="" />
                  <h4>{project.title}</h4>
                  <p>{project.text}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
