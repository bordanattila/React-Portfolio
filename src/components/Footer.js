import React from "react";
import GitHubIcon from "./images/github-icon.png";
import LinkedInIcon from "./images/Linkedin-icon.png";
import FaceBookIcon from "./images/facebook-icon.png"
import "./styles/Footer.css";

function Footer() {
    return (
        <div className="footer" >
            <span>© 2022 Attila Bordán</span>
            <ul className="footerList">
                <li>
                    <a target="_blank" href="https://github.com/bordanattila" className="github footerIcon"><i class="fa-brands fa-github"></i></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/attila-bord%C3%A1n-7621a941/" className="linkedin footerIcon"><i class="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                <a target="_blank" href="https://www.facebook.com/attila.bordan.7" className="facebook footerIcon"><i class="fa-brands fa-facebook-f"></i></a>
                </li>
            </ul>
        </div>

    );
}

export default Footer;