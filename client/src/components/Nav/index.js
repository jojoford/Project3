
import React from 'react';

function Nav(props) {
  const  categories = [
    { name: 'blackAndWhite', description: 'Photos in black and white' },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'landscape', description: 'The beauty of nature' }
  ];

  const handleClick = () => {
    console.log("click handled")
  }
  return (
    <header>
  <h2>

  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
      <a href="#about" onClick={() => handleClick()}>
          About 
        </a>
      </li>
      <li>
      <span onClick={() => handleClick()}>
        Contact</span>
      </li>
       {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
          <span onClick={() => { handleClick(); }}>
            {category.name}
          </span>
        </li>
      ))}
    </ul>
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
