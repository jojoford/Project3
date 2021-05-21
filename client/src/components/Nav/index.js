import React from "react";
// import Auth from "../../utils/auth";
// import { Link } from "react-router-dom";
import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

  const {
    categories = [],
    setCurrentCategory,
    // currentCategory,
    // contactSelected,
    setContactSelected
  } = props;

 
    return (
      <header>
    <h1>
      <a href="/">
        Photo-Album📸
      </a>
    </h1>
    <nav>
      <ul className="flex-row">
        <button><li>
          <span>
            <a href="#about" onClick={() => setContactSelected(false)}>
            About
          </a></span>
        </li></button>

        {categories.map((category) => (
         <button> <li><span onClick={() => {
            setCurrentCategory(category);
            setContactSelected(false);
          }}
          >{capitalizeFirstLetter(category.name)}
            </span>
          </li></button>
        ))}

        <button><li className="mx-1"><span>
            <a href="#contact" onClick={() => setContactSelected(true)}>
              Contact
            </a>
          </span></li></button>
           </ul>
    </nav>
    </header>
 );
}
export default Nav;

        // { <li>
        //   <Link to="/portraits">
        //   Portraits 
        //   </Link>
        // </li>

        // <li>
        //   <Link to="/blackandwhites">
        //     Black and Whites
        //   </Link>
        // </li>

        // <li>
        //   <Link to="/landscapes">
        //     Landscapes
        //   </Link>
        // </li> }
   


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