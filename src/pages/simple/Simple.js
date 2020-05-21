import React from 'react';

function Simple() {
  return (
    <div className="content">
      <object
        data="https://www.eurofound.europa.eu/sites/default/files/ef_publication/field_ef_document/ef1710en.pdf"
        type="application/pdf"
        width="100%"
        height="100%"
      >
        <iframe
          src="https://www.eurofound.europa.eu/sites/default/files/ef_publication/field_ef_document/ef1710en.pdf"
          width="320"
          height="500"
        >
          <p>Your browser does not support PDFs.
      <a href="https://www.eurofound.europa.eu/sites/default/files/ef_publication/field_ef_document/ef1710en.pdf">Download the PDF</a>.</p>
        </iframe>
      </object>
    </div>
  );
}

export default Simple;
