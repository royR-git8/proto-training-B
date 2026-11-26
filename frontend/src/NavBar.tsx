import React from 'react';
import { BiLogoReact } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import './NavBar.css'
const NavBar = () => {
    return (
        <nav className="navbar">

            <Link to="/" className="navbar-logo">
                <BiLogoReact className="react-icon" />
                <span>react logo</span>
            </Link>

            <div className="navbar-links">

                <Link to="/" className="navbar-link">
                    placeholder
                </Link>

                <Link to="/" className="navbar-link">
                    ifk
                </Link>

                <Link to="/" className="navbar-link">
                    home
                </Link>

            </div>

        </nav>
    );
}

export default NavBar;