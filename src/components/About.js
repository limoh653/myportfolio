import React from "react";
import "./About.css"
import gis from "./Assets/GIS.jpeg"
import web from "./Assets/web.jpeg"

const About = () => {
    return(
        <section id="about">
            <span className="skillTitle"> what I do</span>
            <span className="skillDesc">I am a skilled Geospatial develepor with an experience in creating eye catching websites and web maps.I have a strong understanding of design and a keen eye for detail. I am proficient in HTML, CSS, and Javascript, as well as libraries such as react.</span>
            < div className="skillBar">
        
                <img src={gis} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>GIS development</h2>
                    <p>This is all about creating dynamic web maps for GIS analysis</p>
                </div>
            
            </div>
            < div className="skillBar">
                <img src={web} alt="" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Website Design</h2>
                    <p>This is all about creating eye catching websites for online presence</p>
                </div>
            </div>

        </section>
    )
}
export default About;