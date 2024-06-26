import React, { useEffect, useState } from "react";
import { HiPencilAlt, HiPlus, } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import jsPDF from "jspdf";
import { APP_URL } from "../../config";
import Layout from "../Layout";

function FundManage() {
   Modal.setAppElement('#root');

   const [fundData, setFundData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);

   const [isFundRequestModalOpen, setIsFundRequestModalOpen] = useState(false);
   const [selectedFundId, setSelectedFundId] = useState("");
   const [fundingEvent, setFundingEvent] = useState([]);
   const [fundState, setFundState] = useState("");


   useEffect(() => {
      fetchFunds();
   }, []);

   const fetchFunds = async () => {
      const response = await fetch(APP_URL + `/api/eventFundRequest`);
      const data = await response.json();
      setFundData(data);
      setFilteredData(data);
   }

   const handleSearch = async () => {
      let filteredData = fundData;
      const search = document.getElementById("search").value;
      const filterState = document.getElementById("filterState").value;

      if (search) {
         filteredData = filteredData.filter((item) => {
            return item.event.toLowerCase().includes(search.toLowerCase()) ||
               item.eventName.toLowerCase().includes(search.toLowerCase()) ||
               item.fundAmount.toString().includes(search.toLowerCase()) ||
               item.fundState.toLowerCase().includes(search.toLowerCase()) ||
               new Date(item.createdAt).toISOString().slice(0, 19).replace('T', ' ').toLowerCase().includes(search.toLowerCase()) ||
               new Date(item.updatedAt).toISOString().slice(0, 19).replace('T', ' ').toLowerCase().includes(search.toLowerCase());
         });
      }

      if (filterState) {
         filteredData = filteredData.filter((item) => item.fundState === filterState);
      }

      setFilteredData(filteredData);
   }

   const handleSubmit = async () => {
      fetch(APP_URL + `/api/eventFundRequest/${selectedFundId}`, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token'),
         },
         body: JSON.stringify({
            state: fundState,
         }),
      })
         .then(response => response.json())
         .then(data => {
            if (data.error) {
               toast.error(data.message);
            } else {
               toast.success("Fund request updated successfully");
               setFundingEvent([]);
               setSelectedFundId("");
               setFundState("");
               setIsFundRequestModalOpen(false);
               fetchFunds();

            }
         })
         .catch((error) => {
            alert(error.message);
         });
   }

   const handleEdit = async (id) => {
      const fundRequest = fundData.find((item) => item._id === id);
      const response = await fetch(APP_URL + `/api/event/${fundRequest.event}`);
      const data = await response.json();
      setFundingEvent(data);
      setSelectedFundId(id);
      setIsFundRequestModalOpen(true);
   }

   const handleDownloadPDF = async () => {
      const doc = new jsPDF({
         orientation: 'landscape',
         unit: 'mm',
         format: 'a4'
      });

      const headers = [
         { title: 'No', dataKey: 'no' },
         { title: 'Event', dataKey: 'event' },
         { title: 'Event Name', dataKey: 'eventName' },
         { title: 'Fund Amount', dataKey: 'fundAmount' },
         { title: 'State', dataKey: 'fundState' },
         { title: 'Requested On', dataKey: 'createdAt' },
         { title: 'Updated On', dataKey: 'updatedAt' },
      ];

      let data = [];
      filteredData.forEach((event) => {
         const row = [];
         headers.forEach((header) => {
            if (header.dataKey === "no") {
               row.push(filteredData.indexOf(event) + 1);
            } else if (header.dataKey === "createdAt" || header.dataKey === "updatedAt") {
               row.push(new Date(event[header.dataKey]).toISOString().slice(0, 19).replace('T', ' '));
            } else {
               row.push(event[header.dataKey]);
            }
         });
         data.push(row);
      });

      doc.setFontSize(16)
      const topText16 = "Stray Animal Adoption and Care Platform - Fund Requests Report";
      doc.text(topText16, doc.internal.pageSize.getWidth() / 2, 15, { align: 'center' });

      doc.setFontSize(12)
      const topText14 = "Report Generated: " + new Date().toLocaleString();
      doc.text(topText14, doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });

      doc.autoTable({
         head: [headers],
         margin: { top: 30 },
         body: data,
      });

      doc.save("fund_requests.pdf");
   }

   return (
      <Layout>
      <div className="p-10">
         <h1 className="text-2xl font-bold">Manage Event Fundings</h1>
         <div className="flex space-x-3">
            <button onClick={handleDownloadPDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3 flex items-center"><HiPlus className="mr-3" /> Download PDF</button>
         </div>
         <div className="flex justify-between space-x-10 bg-slate-100 p-3 mb-3 border border-slate-400">
            <div>
               <label htmlFor="filterState" className="text-sm font-medium mr-3">Filter by Funding State: </label>
               <select id="filterState" className="border border-gray-300 rounded-md px-2 py-1" onChange={() => handleSearch()}>
                  <option value="">All</option>
                  <option value="PENDING">Pending</option>
                  <option value="APPROVED">Approved</option>
                  <option value="REJECTED">Rejected</option>
               </select>
            </div>
            <div>
               <input id="search" type="text" placeholder="Search everyware" className="border border-gray-300 rounded-md px-2 py-1" onInput={() => handleSearch()} />
            </div>
         </div>
         <table className="w-full">
            <thead>
               <tr>
                  <th className="border px-4 py-1 bg-slate-400">Event</th>
                  <th className="border px-4 py-1 bg-slate-400">Event Name</th>
                  <th className="border px-4 py-1 bg-slate-400">Fund Amount</th>
                  <th className="border px-4 py-1 bg-slate-400">State</th>
                  <th className="border px-4 py-1 bg-slate-400">Requestd On</th>
                  <th className="border px-4 py-1 bg-slate-400">Updated On</th>
                  <th className="border px-4 py-1 bg-slate-400">Actions</th>
               </tr>
            </thead>
            <tbody>
               {filteredData.map((item) => (
                  <tr key={item._id} className="bg-white">
                     <td className="border px-4 py-1">{item.event}</td>
                     <td className="border px-4 py-1">{item.eventName}</td>
                     <td className="border px-4 py-1">{item.fundAmount}</td>
                     <td className="border px-4 py-1">{item.fundState}</td>
                     <td className="border px-4 py-1">{new Date(item.createdAt).toISOString().slice(0, 19).replace('T', ' ')}</td>
                     <td className="border px-4 py-1">{new Date(item.updatedAt).toISOString().slice(0, 19).replace('T', ' ')}</td>
                     <td className="border px-4 py-1 ">
                        <div className="flex justify-center">
                           <HiPencilAlt onClick={() => handleEdit(item._id)} size={20} className="mr-4 hover:cursor-pointer" />
                        </div>
                     </td>
                  </tr>
               ))}
            </tbody>
         </table>
         <Modal isOpen={isFundRequestModalOpen} onRequestClose={() => setIsFundRequestModalOpen(false)} className="modal lg empty" overlayClassName="modal-overlay" appElement={document.getElementById('root')}>
            <div className="bg-sky-200 p-3 rounded-lg shadow-[2px_2px_2px_1px_#0004]">
               <h2 className="text-center text-lg font-bold mb-4">Fund Request Details</h2>

               <div className="flex items-center mb-4">
                  <div className="w-[200px] text-sm font-semibold leading-4">Event</div>
                  <div className="w-[10px] px-5">:</div>
                  <div>{fundingEvent.name}</div>
               </div>

               <div className="flex items-center mb-4">
                  <div className="w-[200px] text-sm font-semibold leading-4">Fund State</div>
                  <div className="w-[10px] px-5">:</div>

                  <select onChange={(e) => setFundState(e.target.value)} value={fundState} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="fundState">
                     <option value="">-- Select Fund State --</option>
                     <option value="APPROVED">Approved</option>
                     <option value="REJECTED">Rejected</option>
                  </select>
               </div>

               <div className="text-right">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>Submit</button>
               </div>
            </div>
         </Modal>

         <ToastContainer />
      </div>
      </Layout>
   );
}

export default FundManage;