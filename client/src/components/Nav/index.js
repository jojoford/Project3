import React from 'react';
import { Link } from "react-router-dom";
// import SignupForm from './SignupForm';
// import LoginForm from './LoginForm';
// import Auth from '../../utils/auth';
import './nav.css';

function Nav() {
    

      return (
          <div>
        <nav className="nav">
        <h1 className="header">
          <Link to="/">Photo-Album📸</Link>
         </h1>
        
        <div className="nav-items">
        <Link className="nav-item" to="/about">About</Link>
                 
        
        <Link className="nav-item" to="/artists">Artists</Link>
                 
        
        <Link className="nav-item" to="/contact">Contact</Link>
                
          
        <Link className="nav-item"  to="/gallery">Shop Gallery</Link>
                   
  
      

          </div>  
   </nav>
   </div>

      );
    };

                      

    export default Nav;

                
            
      
  