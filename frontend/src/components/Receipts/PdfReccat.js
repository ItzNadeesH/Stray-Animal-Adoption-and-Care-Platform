import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation


const PdfReccat = () => {
    const [pdfs, setPdfs] = useState([]);
    const navigate = useNavigate(); // Initialize useNavigate hook

  useEffect(() => {
    fetchPdfs();
  }, []);

    const fetchPdfs = async () => {
        try {
            const response = await axios.get('http://localhost:5000/getfile');
            setPdfs(response.data.data); // Access the `data` property of the response
        } catch (error) {
            console.error('Error fetching PDFs:', error);
        }
    };

    const deletePdf = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:5000/deleteFile/${id}`);
            if (response.status === 200) {
                alert('File deleted successfully');
                // Remove the deleted PDF from the state
                setPdfs(prevPdfs => prevPdfs.filter(pdf => pdf._id !== id));
            }
        } catch (error) {
            console.error('Error deleting PDF:', error);
            alert('Failed to delete PDF');
        }
    };

    const viewPdf = (pdfUrl) => {
        navigate(`/shelter/Viewpdf?url=${encodeURIComponent(pdfUrl)}`);
    };

    return (
        <div className="border-3 border-blue-500 p-3">
            <h1 className="text-2xl font-bold mb-4">PDF Section</h1>
            <div className="grid grid-cols-3 gap-4">
                {pdfs.map(pdf => (
                    <div key={pdf._id} className="border p-4 mb-2 shadow-sm">
                        <p>{pdf.title}</p> {/* Display the title instead of filename */}
                        <div className="flex justify-between items-center mt-2">
                            <button 
                                onClick={() => viewPdf(`/uploads/${pdf.pdf}`)} // Access pdf property
                                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                            >
                                View
                            </button>
                            <button 
                                onClick={() => deletePdf(pdf._id)}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PdfReccat;
