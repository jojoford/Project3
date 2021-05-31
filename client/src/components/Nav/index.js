import React from 'react';
import { Link } from "react-router-dom";
// import SignupForm from './SignupForm';
// import LoginForm from './LoginForm';
// import Auth from '../../utils/auth';
import Cart from '../Cart';
import './nav.css';

function Nav() {
    

      return (
          <div>
        <nav className="nav">
        <h1 className="header">
          <Link to="/">Photo-Album📸</Link>
         </h1>
        <Cart />
        <div className="nav-items">
        <Link className="nav-item" to="/about">About</Link>
                 
        
        <Link className="nav-item" to="/artists">Artists</Link>
                 
        
        <Link className="nav-item" to="/contact">Contact</Link>
                
          
        <Link className="nav-item"  to="/gallery">Shop Gallery</Link>
        
        <Link className="nav-item"  to="/shopping">Shop </Link>

        <ul className="right">
                        
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                
                   
  
      

          </div>  
   </nav>
   </div>

      );
    };

                      

    export default Nav;

                
            
      
  