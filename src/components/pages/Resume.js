import React from "react";
import resumePDF from "../assets/Attila_Bordan_Resume.pdf";
import Iframe from 'react-iframe';
import "../styles/Resume.css";
import Python from "../images/python-icon.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JS from "../images/javascript-icon.png";

// Use Iframe library to display resume in pdf format

function Resume() {
  return (
    <div className="summary">
      <h3>Summary</h3>
      <p>Full Stack Web Developer with over a decade experience in logistics and supply chain management.</p>
      <p>Knowledgeable of data and root cause analysis, freight distribution, and process flow optimization.</p>
      <p>Recognized as a high performer for going above and beyond the job description and taking on additional projects.</p>
      <h3>Education</h3>
      <ul>
        <li> University of Minnesota - Full Stack Web Developer</li>
        <li><strong>MS</strong> Florida Institute of Technology - Supply Chain Management</li>
        <li><strong>BA</strong> American Military University - Logistics and Transportation Management</li>
      </ul>
      <h3>Skills</h3>

      <p>Lean Six Sigma Yellow Belt Certificate</p>

      <p>CPIM part 1</p>

      <p>HTML <img src={HTML}></img></p>

      <p>CSS <img src={CSS}></img></p>

      <p>Javascript <img src={JS}></img></p>

      <p>Node.js</p>

      <p>React</p>

      <p>MongoDB</p>

      <p>Python <img src={Python}></img></p>

      <Iframe src={resumePDF}
        width="100%"
        height="800px"
        id=""
        className=""
        display="block"
        position="relative" />
    </div>
  )
}
export default Resume;
