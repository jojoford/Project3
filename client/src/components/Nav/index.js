import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';

function Nav() {
    function showNavigation() {
        // add if/else statement to this once auth page in utils folder is done
            return (
                <ul>
                    <li>
                        <Link to="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <a href="/" onClick={() => Auth.logout()}>
                            Logout
                        </a>
                    </li>
                </ul>
            );
       // this is for the auth functinality
            // return (
            //     <ul>
            //         <li>
            //             <Link to="/signup">
            //                 Signup
            //             </Link>
            //         </li>
            //         <li>
            //             <Link to="/login">
            //                 Login
            //             </Link>
            //         </li>
            //     </ul>
            // );
        }
        return (
            <header>
                <h1>
                <Link to="/"></Link>
                </h1>
    
                <nav>
                    {showNavigation()}
                </nav>
            </header>
        );
    }

   


export default Nav;