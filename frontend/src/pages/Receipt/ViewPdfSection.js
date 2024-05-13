import React from 'react'
import RightPdfPanel from '../../components/Receipts/RighPdfPanel';
import ViewPdf from '../../components/Receipts/ViewPdf';

const ViewPdfSection = () => {
    return (
        <div className="flex min-h-screen">
          <div className="w-3/5 p-4">
            <ViewPdf/>
          </div>
          <div className="w-1/3 fixed right-0 top-0 h-full overflow-auto bg-gray-100 p-4">
            <RightPdfPanel/>
          </div>
        </div>
      );
}

export default ViewPdfSection