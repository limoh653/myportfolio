import React from "react";
import "./Intro.css"
import pprofile from "./Assets/pprofile.jpeg"

const Intro = () => {
    return(
        <section id="Home">
            <div className="introcontent">
                <span className="hello">Hello  </span>
                <span className="introText">I'm  <span className="introName">Hesbon<br/></span> A Geospatial Developer</span>
                <p className="introPara"> I'm a skilled Geospatial Engineer and web designer with experience in<br/> creating websites and web maps </p>

            </div>
            <img src={pprofile} alt="profile" className="profile" />
        </section>
    )
}
export default Intro;