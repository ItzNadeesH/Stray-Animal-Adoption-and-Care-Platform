import React from 'react';
import { useLocation } from 'react-router-dom';

const ViewPdf = () => {
    const location = useLocation();
    const pdfUrl = new URLSearchParams(location.search).get('url');

    return (
        <div>
            <embed src={pdfUrl} type="application/pdf" width="100%" height="600px" />
        </div>
    );
};

export default ViewPdf;
