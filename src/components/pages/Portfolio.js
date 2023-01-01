import React from "react";
import Project from "../Project";
import Weather_Dashboard from "../images/weatherDashboard.png";
import Work_Day_Scheduler from "../images/workDayScheduler.png";
import Egaugnal from "../images/egaugnal.png";
import Note_Taker from "../images/noteTaker.png"
import Tech_Blog from "../images/techBlog.png"
import Text_Editor from "../images/textEditor.png"
import Prima_Materia from "../images/prima-materia-home.jpg";
import "../styles/Portfolio.css"

// props for the Project component
const projects = [
    {
        imageSource: Prima_Materia,
        projectName: "Prima-Materia",
        repo: "https://github.com/bordanattila/Prima-Materia/",
        deployed: "https://attilamagic-app.herokuapp.com/"
    },
    {
        imageSource: Egaugnal,
        projectName: "Egaugnal",
        repo: "https://github.com/BryanBorek/egaugnal/",
        deployed: "https://egaugnal.herokuapp.com/"
    },
    {
        imageSource: Tech_Blog,
        projectName: "Tech Blog",
        repo: "http://github.com/bordanattila/Tech_Blog",
        deployed: "https://tech-blog-attila.herokuapp.com/"
    },
    {
        imageSource: Text_Editor,
        projectName: "PWA Text Editor",
        repo: "http://github.com/bordanattila/Text_Editor",
        deployed: "https://attilatexteditor-app.herokuapp.com/"
    },
    {
        imageSource: Note_Taker,
        projectName: "Note Taker",
        repo: "http://github.com/bordanattila/Note_taker",
        deployed: "http://bordanattila.github.io/Note_taker"
    },
    {
        imageSource: Work_Day_Scheduler,
        projectName: "Work Day Scheduler",
        repo: "http://github.com/bordanattila/Work_Day_Scheduler",
        deployed: "http://bordanattila.github.io/Work_Day_Scheduler"
    },
    {
        imageSource: Weather_Dashboard,
        projectName: "Weather Dashboard",
        repo: "http://github.com/bordanattila/Weather_Dashboard",
        deployed: "http://bordanattila.github.io/Weather_Dashboard"
    },
];

function Portfolio () {
    return (
        <div className="fullPortfolio">
                <h1 className="projectsh1">Projects I created</h1>
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
