import React from "react";
import resumePDF from "../assets/Attila_Bordan_resume.pdf";
import "../styles/Resume.css";
import Python from "../images/python-icon.png";
import HTML from "../images/html.png";
import CSS from "../images/css.png";
import JS from "../images/javascript-icon.png";
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';

// Use Iframe library to display resume in pdf format

function Resume() {
  return (
    <div className="summary">
      <a href={resumePDF} download="../assets/Attila_Bordan_Resume.pdf" target='_blank'>
         <div className="ui icon button" data-tooltip="Download resume in PDF">
         <CloudDownloadIcon  className="icon" name="cloud download" />
         </div>
      </a>
      <div className="highlights container text-center">
<div className="row justify-content-md-center">
<div className="col-md-auto">

      <h2>Summary</h2>
      <p>Passionate and solutions-driven full stack web developer with lots of experience in supply chain management and retail. </p>
      <p>Strong communication, collaboration, problem-solving, and analytical skills. </p>
      <p>Recognized as a high performer for going above and beyond the job description and taking on additional projects.</p>
      <p>Ability to work in a fast-paced and diverse team environment developing solutions and exceeding expectations.</p>
      <h2>Education</h2>
      <ul>
        <li> University of Minnesota - Full Stack Web Developer</li>
        <li><strong>MS</strong> Florida Institute of Technology - Supply Chain Management</li>
        <li><strong>BA</strong> American Military University - Logistics and Transportation Management</li>
      </ul>
</div>
</div>
      </div>
      <h2>Skills</h2>

      <p>Lean Six Sigma Yellow Belt Certificate</p>

      <p>CPIM part 1</p>

      <p>HTML <img src={HTML}></img></p>

      <p>CSS <img src={CSS}></img></p>

      <p>Javascript <img src={JS}></img></p>

      <p>Node.js <i title='Node.js' class="devicon-nodejs-plain dev"></i></p>

      <p>React <i title='React.js' class="devicon-react-original dev"></i></p>

      <p>MongoDB <i title='MongoDB' class="devicon-mongodb-plain dev"></i></p>

      <p>Python <img src={Python}></img></p>

      {/* <Iframe src={resumePDF}
        width="100%"
        height="800px"
        id=""
        className=""
        display="block"
        position="relative" /> */}

    </div>
  )
}
export default Resume;
