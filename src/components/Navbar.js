import React, {useState} from 'react';
import "./NavbarStyles.css";
import { NavLink } from "react-router-dom";
import { useLocation } from 'react-router-dom';


function Navbar(){

  const [isMobile, setIsMobile] = useState(false);
  const {pathname}= useLocation();

  return (
    <nav>
      <div>
          <a href='/' className="site-name">
            <h1>HONGYUN SHIPPING</h1> 
            <p>鸿 运 有 限 公 司</p>
          </a>
      </div>
        <div>
          <ul id="navbar" className={isMobile ? "#navbar active":"#navbar" } onClick={() => setIsMobile(false)}>
            
              <NavLink    to="/"  ><li className= {pathname === "/" ? "active" :"" }>Home</li> </NavLink>
              <NavLink    to="/about" ><li className= {pathname === "/about" ? "active" :"" }>About  Us</li></NavLink>
              <NavLink    to="/contact" ><li className= {pathname === "/contact" ? "active" :"" }>Contact</li></NavLink>
          </ul>

        </div>
        <button className='mobile-menu-icon' onClick={() => setIsMobile(!isMobile)}>
              {isMobile ? (<i className='fas fa-times'></i> ):(<i className='fas fa-bars'></i>)}</button>


    </nav>
  
  );
}

export default Navbar;