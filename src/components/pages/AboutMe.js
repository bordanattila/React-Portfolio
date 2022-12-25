import React from "react";
import ProfilePicture from "../images/profilepicture.jpg";
import Computer from "../images/computer.png";
import Package from "../images/package.png";
import "../styles/AboutMe.css"

const styles = {
    ProfilePictureStyle: {
        borderRadius: "100%"
    }
}

export default function AboutMe() {
    return (

        <div className="container aboutMe">
            {/* <div className="container text-center top"> */}
                <div className="row top align-items-center">
                    {/* <div className="col"> */}
                    <div className="col-lg-8 col-md-6 ">
                        <h1>Hi I'm Attila</h1>
                        <h2>a full stack web developer with a background in retail and supply chain management.</h2>
                        {/* <div className="icons col"> */}
                        {/* frontend */}
                        <i title='HTML5' class="devicon-html5-plain dev"></i>
                        <i title='CSS3' class="devicon-css3-plain dev"></i>
                        <i title='JavaScript' class="devicon-javascript-plain dev"></i>
                        <i title='Express.js' class="devicon-express-original dev"></i>
                        <i title='Node.js' class="devicon-nodejs-plain dev"></i>
                        <i title='React.js' class="devicon-react-original dev"></i>
                        <div className="icons col">
                            <i title='jQuery' class="devicon-jquery-plain dev"></i>
                            <i title='MySQL' class="devicon-mysql-plain-wordmark dev"></i>
                            <i title='MongoDB' class="devicon-mongodb-plain dev"></i>
                            <i title='Heroku' class="devicon-heroku-original dev" ></i>
                            <i title='Github' class="devicon-github-original dev"></i>
                            <i title='Python' class="devicon-python-plain dev"></i>
                        </div>
                    </div>
                    {/* <div className="column "> */}
                        {/* <div className="profile_image col img-fluid"> */}
                        <img className="profile_img col-lg-4 col-md-5" src={ProfilePicture} alt={"Profile picture"}></img>
                        {/* </div> */}
                        {/* </div> */}
                        {/* <div className="row justify-content-sm-start"> */}
                        {/* <div className="icons col">
                            {/* backend */}
                        {/* 
                        </div>
                        </div>  */}
                    {/* </div> */}
                {/* </div> */}
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