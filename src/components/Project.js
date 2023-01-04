import React from "react";

function Project(props) {
    // map through the props to insert data for HTML elements
    return props.projects.map((item) => (    
        // <div className="col align-items-center justify-content-center">

            <div className="project-card col-lg-5 col-md-8">
                <p className="projectName">{item.projectName}</p>
                <img className="project_img" src={item.imageSource} alt={"Project"}></img>
                <p><a href={item.repo} target={"_blank"}> GitHub Repository </a></p>
                <p><a href={item.deployed} target={"_blank"}> View application »</a></p>
            </div>
        // </div>
       
    ));
}

export default Project;