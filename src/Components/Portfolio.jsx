import React, { useState } from 'react';
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
