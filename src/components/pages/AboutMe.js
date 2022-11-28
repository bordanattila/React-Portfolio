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
            <img className="profile_img" style={styles.ProfilePictureStyle} src={ProfilePicture} alt={"Profile picture"}></img>
            <div className="aboutMeText">
                <div className="top">

                    <h1>Hi I'm Attila</h1>
                    <h2>a supply chain professional and programmer.</h2>
                    <img className="package" src={Package} alt="log_img"></img>
                        <img className="computer" src={Computer} alt="computer-img"></img>
                </div>
                        <p className="bio">It is a common name in Hungary where I am from. I currently reside and work in Virginia in the United States.
                            I earned my Master's degree from the Florida Institute of Technology in Supply Chain Management. Right now I am working in this field which is very enjoyable.
                            However, it can become very tedious and frustrating when the right tools are not available.</p>
                        <p className="bio">The lack of tools made me revisit an old interest of mine, and that was coding.
                            I started learning Python which I was fascinated by. It was amazing to be able to make programs for myself that make everyday life easier and fun little games as well. 
                            I am still improving that skill.</p>
                        <p className="bio">Currently, I am enrolled in a full-stack web developer course through the University of Minnesota.</p>
                        <p className="bottom bio">In my free time when I'm not sharpening my coding skills I enjoy CrossFit or a good Formula-1 race on a Sunday.</p>
            </div>
        </div>
            );
}