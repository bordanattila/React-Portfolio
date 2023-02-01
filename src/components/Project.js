import React from "react";

function Project(props) {
    // map through the props to insert data for HTML elements
    return props.projects.map((item) => (    
            <div className="project-card col-lg-5 col-md-8">
                <p className="textColour">{item.projectName}</p>
                <img className="project_img" src={item.imageSource} alt={"Project"}></img>
                <p className="textColour">{item.description}</p>
                <p><a href={item.repo} target={"_blank"} className="textColour"> GitHub Repository </a></p>
                <p><a href={item.deployed} target={"_blank"} className="textColour"> View application »</a></p>
            </div>
    ));
}

export default Project;