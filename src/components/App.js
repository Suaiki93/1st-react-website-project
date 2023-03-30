import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import About from "../pages/About"
import Contact from '../pages/Contact';


function App() {
  return (
    <div>
      <Navbar /> 
      <Routes basename="/1st-react-website-project">
      <Route >
          <Route index element={<Home />} />  
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/contact" element={<Contact />}/>
        </Route> 
      </Routes>
      <Footer /> 
    </div>
    );
}

export default App;
