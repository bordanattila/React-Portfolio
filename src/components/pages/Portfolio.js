import React from "react";
import Project from "../Project";

import "../styles/Portfolio.css"
import projects from "../assets/projects";

function Portfolio () {
    return (
        <div className="fullPortfolio">
                <h1 className="projectsh1 textColour">Projects I created</h1>
              <div className="container ">
              <div className="row justify-content-around">
            <Project
                projects={projects}
            ></Project>
            </div>
        </div>
         </div>
    );
}

export default Portfolio;
