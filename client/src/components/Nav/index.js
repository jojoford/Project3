import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

function Nav() {

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li>
            <Link to="/about">
              About
            </Link>
          </li>

          <li>
            <Link to="/portraits">
            Portraits 
            </Link>
          </li>

          <li>
            <Link to="/landscapes">
              Landscapes
            </Link>
          </li>

          <li className="mx-1">
            <Link to="/contact">
              Contact
            </Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/signup">
              Signup
            </Link>
          </li>
          <li className="mx-1">
            <Link to="/login">
              Login
            </Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <h1>
        <Link to="/">
          Photo-List
        </Link>
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;

/*import React from 'react';
import { Link } from "react-router-dom";
import './Nav.css';
import Login from "../Login"
import Logout from "../Logout"
export default class Navbar extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className='navbtn-grid' >
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav-content" aria-controls="nav-content" aria-expanded="false" aria-label="Toggle navigation" ><i className="fas fa-bars fa-2x nav-btn"></i></button>
                </div>
                <div className='nav-grid collapse' id='nav-content'>
                    <div>
                        <div className="router-link">
                            <Link className="text-decor" to="/">home</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/photos">photos</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/artists">artists</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/shopcart">shop</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/about">about</Link>
                        </div>
                        <div className="router-link">
                            <Link className="text-decor" to="/contact">contact</Link>
                        </div>
                        <div className="router-link">
                            <Login></Login>
                        </div>
                        <div className="router-link">
                            <Logout></Logout>
                        </div>
                        
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
*/