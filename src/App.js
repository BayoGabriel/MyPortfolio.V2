import "./index.css"
import NavBar from "../src/Components/NavBar"
import Preloader from "./Components/Preloader";
import Banner from "./Components/Hero"

import React, { useState, useEffect } from 'react';
import About from "./Components/About";

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
        <div className="preloader">
          <Preloader/>
        </div>
      ) : (
        
        <div className="main-content">
          <NavBar />
          <Banner />
          <About />
        </div>
      )}
    </div>
  );
};

export default App;
