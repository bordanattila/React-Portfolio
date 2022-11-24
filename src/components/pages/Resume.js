import React, { useState } from "react";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import resumePDF from "../assets/Attila_Bordan_Resume.pdf";
import "../styles/Resume.css";

// Create Document Component
function Resume() {

  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offSet){
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function changePageBack(){
    changePage(-1)
  }

  function changePageNext(){
    changePage(+1)
  }

  return (
    <div>
      <a href={resumePDF} download="../assets/Attila_Bordan_Resume.pdf" target='_blank'>
   <button >Download a PDF</button>
</a>
      {/* <header className="page-header">
        <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
          <Page height="600" pageNumber={pageNumber} />
        </Document>
        <p> Page {pageNumber} of {numPages}</p>
        { pageNumber > 1 && 
        <button onClick={changePageBack}>Previous Page</button>
        }
        {
          pageNumber < numPages &&
          <button onClick={changePageNext}>Next Page</button>
        }
      </header> */}
      <center>
        <div>
          <Document file={resumePDF} onLoadSuccess={onDocumentLoadSuccess}>
            {Array.from(
              new Array(numPages),
              (el,index) => (
                <Page 
                  key={`page_${index+1}`}
                  pageNumber={index+1}
                />
              )
            )}
          </Document>
        </div>
      </center>
    </div>
  );
}
export default Resume;