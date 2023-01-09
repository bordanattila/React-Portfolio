import React from "react";
import "./styles/Footer.css";

const currentDate = new Date();
const year = currentDate.getFullYear();

function Footer() {
    return (
        <div className="footer" >
            <span>© {year} Attila Bordán</span>
            <ul className="footerList">
                <li>
                    <a target="_blank" href="https://github.com/bordanattila" className="github footerIcon"><i class="fa-brands fa-github"></i></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/attila-bord%C3%A1n-7621a941/" className="linkedin footerIcon"><i class="fa-brands fa-linkedin"></i></a>
                </li>
                <li>
                    <a target="_blank" href="https://www.facebook.com/attila.bordan.7" className="facebook footerIcon"><i class="fa-brands fa-facebook"></i></a>
                </li>
            </ul>
        </div>

    );
}

export default Footer;