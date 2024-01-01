import "./index.css"
import NavBar from "../src/Components/NavBar"
import Preloader from "./Components/Preloader";

import React, { useState, useEffect } from 'react';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); 

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
        </div>
      )}
    </div>
  );
};

export default App;
