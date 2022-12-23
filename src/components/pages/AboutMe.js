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

        <div className="container-fluid aboutMe">
            <div className="top">
                <div>

                    <h1>Hi I'm Attila</h1>
                    <h2>a full stack web developer with a background in retail and supply chain management.</h2>
                    {/* <img className="package" src={Package} alt="log_img"></img>
                    <img className="computer" src={Computer} alt="computer-img"></img> */}
                </div>
                <div className="profile_image">

                    <img className="profile_img"  src={ProfilePicture} alt={"Profile picture"}></img>
                </div>
            </div>
            <div className="aboutMeText">
                <div className="bio">
                    <p >Recently earned a certificate in full stack development form the University of Minnesota and developed skills in HTML, CSS, JavaScript, Bootstrap, MERN, Material UI, Handlebars, MySQL, jQuery, Apollo, and a bit of Python. </p>
                    <p >Having an appetite for continuous learning and problem solving. I enjoy collaborating and connecting with co-workers. Passionate about building applications that assist people to make their lives easier. </p>
                    {/* <p >Currently, I am enrolled in a full-stack web developer course through the University of Minnesota.</p> */}
                    <p className="bottom">Looking to bring my attention to detail and technical skills to a company to grow and become a valuable asset.</p>
                </div>
            </div>
        </div>
    );
}