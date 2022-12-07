import React from "react";
import GitHubIcon from "./images/github-icon.png";
import LinkedInIcon from "./images/Linkedin-icon.png";
import backgroundImg from "./images/Whale.png"
import FaceBookIcon from "./images/facebook-icon.png"
import "./styles/Footer.css";

function Footer() {
    return (
        <div className="footer" style={{ backgroundImage: `url(${backgroundImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <span>© 2022 Attila Bordán</span>
            <a target="_blank" href="https://github.com/bordanattila"><img className="contact_img" src={GitHubIcon} alt="GitHub icon"></img></a>

            <a target="_blank" href="https://www.linkedin.com/in/attila-bord%C3%A1n-7621a941/"><img className="contact_img" src={LinkedInIcon} alt="LinkedIn icon"></img></a>

            <a target="_blank" href="https://www.facebook.com/attila.bordan.7"><img className="contact_img" src={FaceBookIcon} alt="Facebook icon"></img></a>
        </div>

    );
}

export default Footer;