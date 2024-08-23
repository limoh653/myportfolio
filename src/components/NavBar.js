import React from "react";
import "./NavBar.css"
import { Link } from "react-scroll";
//import { renderToStaticMarkup } from "react-dom/server";

const NavBar = () =>{
    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link activeClass="active" to="Home" spy={true} smooth={true} duration={500}   className="desktopMenuListItem">Home</Link>
                <Link activeClass="active" to="About" spy={true} smooth={true} duration={500}   className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="Projects" spy={true} smooth={true} duration={500}   className="desktopMenuListItem">Portfolio</Link>
                <Link activeClass="active" to="Contacts" spy={true} smooth={true} duration={500}   className="desktopMenuListItem">Contacts</Link>
            </div>
        </nav>
    )
}
export default NavBar;