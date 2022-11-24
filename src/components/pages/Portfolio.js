import React from "react";
import Project from "../Project";
import Weather_Dashboard from "../images/weatherDashboard.png";
import Work_Day_Scheduler from "../images/workDayScheduler.png";
import Egaugnal from "../images/egaugnal.png";
import Note_Taker from "../images/noteTaker.png"
import Tech_Blog from "../images/techBlog.png"
import Text_Editor from "../images/textEditor.png"
import "../styles/Portfolio.css"

const projects = [
    {
        imageSource: Egaugnal,
        repo: "http://github.com/https://github.com/BryanBorek/egaugnal/",
        deployed: "https://egaugnal.herokuapp.com/"
    },
    {
        imageSource: Tech_Blog,
        repo: "http://github.com/bordanattila/Tech_Blog",
        deployed: "https://tech-blog-attila.herokuapp.com/"
    },
    {
        imageSource: Text_Editor,
        repo: "http://github.com/bordanattila/Text_Editor",
        deployed: "https://attilatexteditor-app.herokuapp.com/"
    },
    {
        imageSource: Note_Taker,
        repo: "http://github.com/bordanattila/Note_taker",
        deployed: "http://bordanattila.github.io/Note_taker"
    },
    {
        imageSource: Work_Day_Scheduler,
        repo: "http://github.com/bordanattila/Work_Day_Scheduler",
        deployed: "http://bordanattila.github.io/Work_Day_Scheduler"
    },
    {
        imageSource: Weather_Dashboard,
        repo: "http://github.com/bordanattila/Weather_Dashboard",
        deployed: "http://bordanattila.github.io/Weather_Dashboard"
    },
];

function Portfolio () {
    return (
        <div className="col-12-lg col-6-md col-3-sm">
              <div className="project justify-content-center">
            <Project
                projects={projects}
            ></Project>
        </div>
         </div>
    );
}

export default Portfolio;
