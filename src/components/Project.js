import React from "react";

function Project (props) {
    console.log(props)
    return props.projects.map((item) => (
        <div className="container col-12-lg col-6-md col-3-sm">
            <div className="project"><img src={item.imageSource}></img></div>
            <p><a href={item.repo+item.repoName} target={"_blank"}> GitHub Repository </a></p>
            <p><a href={item.deployed+item.repoName} target={"_blank"}> Deployed application </a></p>
        </div>
    ));
}

export default Project;