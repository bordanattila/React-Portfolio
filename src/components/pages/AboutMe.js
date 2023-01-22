import React from "react";
import ProfilePicture from "../images/aboutme_img.jpg";
import "../styles/AboutMe.css"

export default function AboutMe() {
    return (

        <div className="container aboutMe">
            <div className="row top align-items-center justify-content-center">
                <div className="col-lg-6 col-md-8 ">
                    <h1>Hi I'm Attila</h1>
                    <h2>a full stack web developer with a background in retail and supply chain management.</h2>
                    <i title='HTML5' className="devicon-html5-plain dev"></i>
                    <i title='CSS3' className="devicon-css3-plain dev"></i>
                    <i title='JavaScript' className="devicon-javascript-plain dev"></i>
                    <i title='Express.js' className="devicon-express-original dev"></i>
                    <i title='Node.js' className="devicon-nodejs-plain dev"></i>
                    <i title='React.js' className="devicon-react-original dev"></i>
                    <br></br>
                    <i title='jQuery' className="devicon-jquery-plain dev"></i>
                    <i title='MySQL' className="devicon-mysql-plain-wordmark dev"></i>
                    <i title='MongoDB' className="devicon-mongodb-plain dev"></i>
                    <i title='Heroku' className="devicon-heroku-original dev" ></i>
                    <i title='Github' className="devicon-github-original dev"></i>
                    <i title='Python' className="devicon-python-plain dev"></i>
                </div>
                <img className="profile_img col-lg-6 col-md-8" src={ProfilePicture} alt={"Profile picture"}></img>
            </div>
            <div className="aboutMeText container text-center">
                <div className="bio row justify-content-center">
                    <div className="col-md-auto">
                        <p >Recently earned a certificate in full stack development form the University of Minnesota and developed skills in
                            HTML, CSS, JavaScript, Bootstrap, MERN, Material UI, Handlebars, MySQL, jQuery, Apollo, and a bit of Python. </p>
                        <p >Having an appetite for continuous learning and problem solving. I enjoy collaborating and connecting with co-workers. <br></br>
                            Passionate about building applications that assist people to make their lives easier. </p>
                        <p className="bottom">Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}