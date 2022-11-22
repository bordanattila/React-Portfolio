import React from "react";
import ProfilePicture from "../images/profilepicture.jpg";
import "../styles/AboutMe.css"

const styles = {
    ProfilePictureStyle: {
        borderRadius: "100%"
    }
}

export default function AboutMe() {
    return (

        <div className="container-fluid">
            <img className="profile_img" style={styles.ProfilePictureStyle} src={ProfilePicture} alt={"Profile picture"}></img>
            <p>My name is Attila. It is a common name in Hungary where I came from. I currently reside and work in Virginia in the United States
                I earned my Master's degree from the Florida Institute of Technology in Supply Chain Management. I am working in this field which is very enjoyable.
                However, it can become very tedious and frustrating when the right tools are not available.
                The lack of tools made me revisit an old interest of mine, and that was coding.
                I started learning Python which I was fascinated by to be able to make tools for myself and my team and not have to use an endless number of Excel sheets.
                I am still improving that skill.
                Currently, I am enrolled in a full-stack web developer course through the University of Minnesota.
                When I'm not sharpening my coding skills I enjoy CrossFit or a good Formula-1 race on a Sunday.</p>
        </div>
    );
}