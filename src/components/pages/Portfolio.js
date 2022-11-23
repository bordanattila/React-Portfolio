import React from "react";
import Project from "../Project";
import Weather_Dashboard from "../images/menu.jpg";
import Work_Day_Scheduler from "../images/snake_game.jpg";

const projects = [
    {
        imageSource: Work_Day_Scheduler,
        repoName: "Work_Day_Scheduler",
        repo: "http://github.com/bordanattila/",
        deployed: "http://bordanattila.github.io/"
    },
    {
        imageSource: Weather_Dashboard,
        repoName: "Weather_Dashboard",
        repo: "http://github.com/bordanattila/",
        deployed: "http://bordanattila.github.io/"
    }
];

function Portfolio () {
    return (
        <div className="container">
            <Project
                projects={projects}
            ></Project>
        </div>
    );
}

export default Portfolio;
