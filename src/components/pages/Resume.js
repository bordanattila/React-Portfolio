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

  function changePage(offSet) {
    setPageNumber(prevPageNumber => prevPageNumber + offSet);
  }

  function previousPage() {
    changePage(-1)
  }

  function nextPage() {
    changePage(+1)
  }

  return (
    <div>
      <div className="download">
        <a href={resumePDF} download="../assets/Attila_Bordan_Resume.pdf" target='_blank'>
          <button>Download as a PDF</button>
        </a>
      </div>
      <Document
        file={resumePDF}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="navigation">
        <p>
          Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
        </p>
        <button
          type="button"
          disabled={pageNumber <= 1}
          onClick={previousPage}
        >
          Previous
        </button>
        <button
          type="button"
          disabled={pageNumber >= numPages}
          onClick={nextPage}
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default Resume;