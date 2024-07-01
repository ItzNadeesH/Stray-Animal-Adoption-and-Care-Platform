import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';

function PdfComp(props) {
  const [numPages, setNumPages] = useState(null); // Changed from undefined to null
  const [pageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      {props.pdfFile ? (
        <Document file={props.pdfFile} onLoadSuccess={onDocumentLoadSuccess}>
          {[...Array(numPages).keys()].map((page) => (
            <Page
              key={`page_${page + 1}`}
              pageNumber={page + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          ))}
        </Document>
      ) : (
        <p>pdf file not available</p>
      )}
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}

export default PdfComp;
