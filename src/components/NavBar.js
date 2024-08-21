import React from "react";
import "./NavBar.css"
import { Link } from "react-scroll";
//import { renderToStaticMarkup } from "react-dom/server";

const NavBar = () =>{
    return (
        <nav className="navbar">
            <div className="desktopMenu">
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Contacts</Link>
            </div>
        </nav>
    )
}
export default NavBar;