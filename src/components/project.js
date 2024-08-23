import React from "react";
import "./project.css"
import  project1 from "./Assets/project1.jpeg"
import  Project3 from "./Assets/project3.jpeg"

const Project = () => { 
    return(
        <section id="Projects">
            <h2>These are some of my projects</h2>
            <div className="project">
                
                <div className="project1">
                    <a href="https://bankminiapp.netlify.app/" target="_bbank" rel="bank ">
                        <img src={project1} className="projectImg"alt="bankingApp" />
                    </a>
                    <p>This a project that simulates a bank app</p>
                        
                </div>
            
                {/* <div className="project2">
                    <a href="https://botarmy01.netlify.app/" target="_bank" rel="bank ">
                        <img src={project2} alt="mybotarmy" />
                    </a>
                    <p>This a project that allows users to view bots and add some to their army</p>
                        
                </div> */}
                <div className="project3">
                    <a href="https://memesyangu.netlify.app/" target="_bank" rel="bank ">
                        <img src={Project3}  className="projectImg"alt="memesYangu" />
                    </a>
                    <p>This a project that allows users  browse through memes and add some  to their favourites</p>
                        
                </div>
                
            </div>
        </section>
    );
}
export default Project;