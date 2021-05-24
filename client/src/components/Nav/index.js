
import React from 'react';
import { Link } from "react-router-dom";

//alyse added link 
function Nav(props) {
  const  categories = [
    { name: 'blackAndWhite', description: 'Photos in black and white' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'landscape', description: 'The beauty of nature' }
  ];

  const {
    // setCurrentCategory,
    // currentCategory,
    // contactSelected,
    // setContactSelected
  } = props;

  return (


  <nav>
    <ul className="flex-row">
      <div className="router-link">
      <Link className="text-decor" to="/about">About</Link>
      </div>
      <div className="router-link">
                            <Link className="text-decor" to="/artists">artists</Link>
                        </div>
      <div className="router-link">
                            <Link className="text-decor" to="/contact">contact</Link>
                        </div>

       {/* {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick={() => { handleClick(); }}>
            {category.name}
          </span>
          </li>
        ))} */}


        </ul>
        </nav>

  )
 
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