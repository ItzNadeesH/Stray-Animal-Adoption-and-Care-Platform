import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminNav from "../AdminNav/AdminNav";
import backgroundImage from "../DonationHomePage/background.png";
import PdfComp from "./PdfComp";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

function SendPdf() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [allPdf, setAllPdf] = useState([]);
  const [pdfFile, setPDFFile] = useState(null);

  useEffect(() => {
    getpdf();
  }, []);

  const getpdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/getFile");
      console.log(result.data.data);
      setAllPdf(result.data.data || []);
    } catch (error) {
      console.error("Error fetching PDFs: " + error.message);
    }
  };

  const submitPdf = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);

    try {
      const result = await axios.post(
        "http://localhost:5000/uploadfile",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(result);

      if (result.data.status === 200) {
        alert("Upload successful");
        getpdf();
      } else {
        alert("Upload failed");
      }
    } catch (error) {
      console.error("Error uploading: " + error.message);
      alert("Error uploading: " + error.message);
    }
  };

  const showPdf = (pdf) => {
    setPDFFile(`http://localhost:5000/file/${pdf}`);
  };

  const saveFile = (selectedFile) => {
    setFile(selectedFile);
  };

  return (
    <div>
      <AdminNav />

      <div
        className="main flex items-center justify-center h-screen bg-cover"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="bg-blue-100 rounded p-8 max-w-md w-full">
          <h2 className="text-2xl font-bold mb-4">
            Send Receipt to Shelter Maintenance Manager
          </h2>
          <form onSubmit={submitPdf}>
            <div className="mb-4">
              <label className="block">PDF Title:</label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border border-gray-400 p-2 rounded w-full bg-blue-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block" htmlFor="pdfFile">
                Select PDF file:
              </label>
              <input
                type="file"
                id="pdfFile"
                name="pdfFile"
                accept="application/pdf"
                onChange={(e) => saveFile(e.target.files[0])}
                className="border border-gray-400 p-2 rounded w-full bg-blue-100 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
              >
                Upload
              </button>
            </div>
          </form>
          <h4 className="mt-5 text-2xl font-bold mb-4">
            sent receipts to shelter maintanace
          </h4>
          {allPdf.map((data) => (
            <div key={data._id}>
              <h1>title: {data.title}</h1>
              <button onClick={() => showPdf(data.pdf)}>show pdf</button>
            </div>
          ))}
        </div>
      </div>
      {pdfFile && <PdfComp pdfFile={pdfFile} />}
    </div>
  );
}

export default SendPdf;
