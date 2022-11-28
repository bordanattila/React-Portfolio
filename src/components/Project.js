import React from "react";
import { Button } from "semantic-ui-react";

function Project(props) {
    // map through the props to insert data for HTML elements
    return props.projects.map((item) => (    
            <div className="project-card">
                <p>{item.projectName}</p>
                <img className="project_img" src={item.imageSource} ></img>
                <p basic color="teal"><a href={item.repo} target={"_blank"}> GitHub Repository </a></p>
                <p><a href={item.deployed} target={"_blank"}> Deployed Application </a></p>
            </div>
       
    ));
}

export default Project;