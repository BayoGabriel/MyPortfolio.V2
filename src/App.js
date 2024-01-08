import "./index.css"
import NavBar from "../src/Components/NavBar"
import Preloader from "./Components/Preloader";
import Banner from "./Components/Hero"
import React, { useState, useEffect } from 'react';
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Timeline from "./Components/Timeline";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="app">
      {loading ? (
        <div className="">
          <Preloader/>
        </div>
      ) : (
        
        <div className="main-content">
          <NavBar />
          <Banner />
          <About />
          <Services />
          <Portfolio />
          <Timeline />
        </div>
      )}
    </div>
  );
};

export default App;
