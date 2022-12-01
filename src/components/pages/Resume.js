import React from "react";
import resumePDF from "../assets/Attila_Bordan_Resume.pdf";
import Iframe from 'react-iframe';

// Use Iframe library to display resume in pdf format

function Resume() {
  return (
    <Iframe src={resumePDF}
      width="100%"
      height="800px"
      id=""
      className=""
      display="block"
      position="relative" />
  )
}
export default Resume;
