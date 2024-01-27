import "./index.css"
import NavBar from "../src/Components/NavBar"
import Preloader from "./Components/Preloader";
import Banner from "./Components/Hero"
import React, { useState, useEffect } from 'react';
import About from "./Components/About";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Timeline from "./Components/Timeline";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Blog from "./Components/Blog";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <div className="app">
      {loading ? (
        <>
          <Preloader/>
        </>
      ) : (
        <>
          <NavBar />
          <Banner />
          {/* <About />
          <Services />
          <Portfolio />
          <Timeline />
          <Testimonial />
          <Blog />
          <Contact />
          <Footer /> */}
        </>
      )}
    </div>
  );
};

export default App;