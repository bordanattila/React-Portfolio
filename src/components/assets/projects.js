// props for the Project component
import Weather_Dashboard from "../images/weatherDashboard.png";
import Work_Day_Scheduler from "../images/workDayScheduler.png";
import Egaugnal from "../images/egaugnal.png";
import Note_Taker from "../images/noteTaker.png"
import Tech_Blog from "../images/techBlog.png"
import Text_Editor from "../images/textEditor.png"
import Prima_Materia from "../images/prima-materia-home.jpg";

const projects = [
    {
        imageSource: Prima_Materia,
        projectName: "Prima-Materia",
        description: "A MERN application for users who love Magic the Gathering. It allows users to create an account, manage a wishlist, build decks, and complete refined searches.",
        repo: "https://github.com/bordanattila/Prima-Materia/",
        deployed: "https://attilamagic-app.herokuapp.com/"
    },
    {
        imageSource: Egaugnal,
        projectName: "Egaugnal",
        description: "A language learning application that follow the MVC framework. Users can learn the spelling of words in over 90 languages through the Google Translate API and the pronunciation through Google TextToSpeech API. The app was built using Handlebars, Sequelize, and MySQL.",
        repo: "https://github.com/bordanattila/egaugnal/",
        deployed: "https://egaugnal.herokuapp.com/"
    },
    {
        imageSource: Tech_Blog,
        projectName: "Tech Blog",
        description: "This is an application where tech enthusiasts can share thoughts and comments on various topics. The application was developed following the MVC framework and utilizes Sequelize and Handlebars.js.",
        repo: "http://github.com/bordanattila/Tech_Blog",
        deployed: "https://tech-blog-attila.herokuapp.com/"
    },
    {
        imageSource: Text_Editor,
        projectName: "PWA Text Editor",
        description: "A Progressive Web Application (PWA) that help users to jot down any ideas or code snippets at any time. It works online and offline and can be installed using chromium based browsers. It colour codes the text like an IDE. the app was built using Webpack and Workbox.",
        repo: "http://github.com/bordanattila/Text_Editor",
        deployed: "https://attilatexteditor-app.herokuapp.com/"
    },
    {
        imageSource: Note_Taker,
        projectName: "Decentralised Note Taker",
        description: "This simple note taking application with a React fronted. The application was built with Motoko for the backend for the Internet Computer. ",
        repo: "https://github.com/bordanattila/Decentralised-Note-Taker",
        deployed: "Not deployed"
    },
    {
        imageSource: Work_Day_Scheduler,
        projectName: "Work Day Scheduler",
        description: "It is a simple front-end application to replace traditional planners. The local storage is used to store data. The app was built with jQuery and Bootstrap.",
        repo: "http://github.com/bordanattila/Work_Day_Scheduler",
        deployed: "http://bordanattila.github.io/Work_Day_Scheduler"
    },
    {
        imageSource: Weather_Dashboard,
        projectName: "Weather Dashboard",
        description: "A front-end application powered by OpenWeather API. Users can look up weather forecast for any travel destination. It uses the local storage to store the search history.",
        repo: "http://github.com/bordanattila/Weather_Dashboard",
        deployed: "http://bordanattila.github.io/Weather_Dashboard"
    },
];

export default projects;