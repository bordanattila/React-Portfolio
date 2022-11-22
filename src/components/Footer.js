import React from "react";
import GitHubIcon from "./images/github-icon.png";
import LinkedInIcon from "./images/Linkedin-icon.png";
import "./styles/Footer.css";

function Footer() {
    return (
        <div>
            <span>© 2022 Attila Bordán</span>
            <a target="_blank" href="https://www.github.com"><img className="contact_img" src={GitHubIcon} alt="GitHub icon"></img></a>

            <a target="_blank" href="https://www.linkedin.com"><img className="contact_img" src={LinkedInIcon} alt="LinkedIn icon"></img></a>

            <a target="_blank" href="https://www.github.com"><img className="contact_img" src="./images/github-icon.png" alt="Maybe instagram or something"></img></a>
        </div>

    );
}

export default Footer;