import React, { useEffect, useState } from "react";
import { HiPencilAlt, HiPlus, HiTrash, } from "react-icons/hi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import jsPDF from "jspdf";
import { TbListDetails } from "react-icons/tb";
import { APP_URL } from "../../config";
import Layout from "../Layout";

function VaccinationManage() {
   Modal.setAppElement('#root');

   const [vaccinationData, setVaccinationData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);

   const [vaccinationHistoryData, setVaccinationHistoryData] = useState([]);
   const [isVacinationHistoryModalOpen, setIsVacinationHistoryModalOpen] = useState(false);

   const [isvaccinationFrequencyModalOpen, setIsvaccinationFrequencyModalOpen] = useState(false);
   const [vaccinationFrequency, setVaccinationFrequency] = useState("");
   const [vaccinationId, setVaccinationId] = useState("");

   useEffect(() => {
      fetchVaccinates();
   }, []);

   const fetchVaccinates = async () => {
      const response = await fetch(APP_URL + `/api/animal`);
      const data = await response.json();
      setVaccinationData(data);
      setFilteredData(data);
   }

   const handleSearch = async () => {

      let filteredData = vaccinationData;
      const filterState = document.getElementById("filterState").value;
      const search = document.getElementById("search").value;
      const filterVaccination = document.getElementById("filterVaccination").value;


      if (filterState !== "") {
         filteredData = filteredData.filter((item) => {
            return item.state.toLowerCase().includes(filterState.toLowerCase());
         });
      }
      if (filterVaccination !== "") {
         filteredData = filteredData.filter((item) => {
            return item.vaccinationFrequency.toLowerCase().includes(filterVaccination.toLowerCase());
         });
      }
      if (search !== "") {
         filteredData = filteredData.filter((item) => {
            return item.name.toLowerCase().includes(search.toLowerCase()) ||
               item.state.toLowerCase().includes(search.toLowerCase()) ||
               item.vaccinationName.toLowerCase().includes(search.toLowerCase()) ||
               item.vaccinationFrequency.toLowerCase().includes(search.toLowerCase()) ||
               item.lastVaccination.toLowerCase().includes(search.toLowerCase());
         });
      }
      setFilteredData(filteredData);
   }

   const handleHistoryView = async (vaccinationId) => {
      const response = await fetch(APP_URL + `/api/animal/${vaccinationId}/vaccination`);
      const data = await response.json();
      setVaccinationHistoryData(data);
      setIsVacinationHistoryModalOpen(true);
   }

   const handleFundRequestSubmit = async () => {

      if (!vaccinationFrequency) {
         toast.error("Please select vaccination frequency");
         return;
      }

      const response = await fetch(APP_URL + `/api/animal/updatev/${vaccinationId}`, {
         method: "PUT",
         headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
         },
         body: JSON.stringify({
            vaccinationFrequency: vaccinationFrequency
         })
      });
      const data = await response.json();
      if (data.error) {
         toast.error(data.message);
      } else {
         toast.success(data.message);
         setIsvaccinationFrequencyModalOpen(false);
         fetchVaccinates();
      }
   }

   const handleEdit = (vaccinationId) => {
      const vaccination = vaccinationData.find((item) => item._id === vaccinationId);
      setVaccinationFrequency(vaccination.vaccinationFrequency);
      setVaccinationId(vaccinationId);
      setIsvaccinationFrequencyModalOpen(true);
   }

   const handleDownloadPDF = async () => {
      const doc = new jsPDF({
         orientation: 'landscape',
         unit: 'mm',
         format: 'a4'
      });

      const headers = [
         { title: "No", dataKey: "no" },
         { title: "Animal", dataKey: "name" },
         { title: "Animal State", dataKey: "state" },
         { title: "Vaccine", dataKey: "vaccinationName" },
         { title: "Vaccination Frequency", dataKey: "vaccinationFrequency" },
         { title: "Last Vaccinated Date", dataKey: "lastVaccination" },
      ];

      let data = [];
      filteredData.forEach((event) => {
         const row = [];
         headers.forEach((header) => {
            if (header.dataKey === "no") {
               row.push(filteredData.indexOf(event) + 1);
            } else {
               row.push(event[header.dataKey]);
            }
         });
         data.push(row);
      });

      doc.setFontSize(16)
      const topText16 = "Stray Animal Adoption and Care Platform - Vaccination Report";
      doc.text(topText16, doc.internal.pageSize.getWidth() / 2, 15, { align: 'center' });

      doc.setFontSize(12)
      const topText14 = "Report Generated: " + new Date().toLocaleString();
      doc.text(topText14, doc.internal.pageSize.getWidth() / 2, 20, { align: 'center' });

      doc.autoTable({
         head: [headers],
         margin: { top: 30 },
         body: data,
      });

      doc.save("vaccination_table.pdf");
   }

   const [svac, setSvac] = useState({});
   const [isSvacModalOpen, setIsSvacModalOpen] = useState(false);

   const handleVaccinationEdit = async (vaccinationId) => {
      setSvac(vaccinationHistoryData.find((item) => item._id === vaccinationId));
      setIsVacinationHistoryModalOpen(false);
      setIsSvacModalOpen(true);
   }

   const handleSvacEdit = async () => {
      const response = await fetch(APP_URL + `/api/vaccination/${svac._id}`, {
         method: "PUT",
         headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
         },
         body: JSON.stringify({
            vaccine: svac.vaccine,
            animal: svac.animal,
            date: svac.date
         })
      });
      const data = await response.json();
      if (data.error) {
         toast.error(data.message);
      } else {
         toast.success(data.message);
         setIsSvacModalOpen(false);
         handleHistoryView(svac.animal);
         fetchVaccinates();
      }
   }

   const handleVaccinationDelete = async (vaccinationId) => {
      const response = await fetch(APP_URL + `/api/vaccination/${vaccinationId}`, {
         method: "DELETE",
         headers: {
            'Content-Type': 'application/json',
            'Authorization': localStorage.getItem('token')
         }
      });
      const data = await response.json();
      if (data.error) {
         toast.error(data.message);
      } else {
         toast.success(data.message);
         handleHistoryView(svac.animal);
         fetchVaccinates();
      }
   }

   const calculateDueDate = (vaccinationFrequency, lastVaccination) => {
      if (lastVaccination === "Not Vaccinated") {
         return "Not Vaccinated";
      }
      let date = new Date(lastVaccination);
      switch (vaccinationFrequency) {
         case "ONCE_A_WEEK":
            date.setDate(date.getDate() + 7);
            break;
         case "TWICE_A_MONTH":
            date.setDate(date.getDate() + 15);
            break;
         case "ONCE_A_MONTH":
            date.setMonth(date.getMonth() + 1);
            break;
         case "ONCE_A_YEAR":
            date.setFullYear(date.getFullYear() + 1);
            break;
         case "TWICE_A_YEAR":
            date.setFullYear(date.getFullYear() + 2);
            break;
         case "THRISE_A_YEAR":
            date.setFullYear(date.getFullYear() + 3);
            break;
         default:
            break;
      }
      return date.toISOString().slice(0, 10).replace('T', ' ');
   }

   return (
      <Layout>
         <div className="p-10">
            <h1 className="text-2xl font-bold">Manage Vaccination</h1>
            <div className="flex space-x-3">
               <button onClick={handleDownloadPDF} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-3 flex items-center"><HiPlus className="mr-3" /> Download PDF</button>
            </div>
            <div className="flex justify-between space-x-10 bg-slate-100 p-3 mb-3 border border-slate-400">
               <div>
                  <label htmlFor="filterState" className="text-sm font-medium mr-3">Filter by Animal State: </label>
                  <select id="filterState" className="border border-gray-300 rounded-md px-2 py-1" onChange={() => handleSearch()}>
                     <option value="">All</option>
                     <option value="AVAILABLE">Available</option>
                     <option value="ADOPTED">Adopted</option>
                  </select>
               </div>
               <div>
                  <label htmlFor="filterVaccination" className="text-sm font-medium mr-3">Filter by Vaccination State: </label>
                  <select id="filterVaccination" className="border border-gray-300 rounded-md px-2 py-1" onChange={() => handleSearch()}>
                     <option value="">All</option>
                     <option value="NOT_SET">Not Set</option>
                     <option value="ONCE_A_WEEK">Once a week</option>
                     <option value="TWICE_A_MONTH">Twice a month</option>
                     <option value="ONCE_A_MONTH">Once a month</option>
                     <option value="ONCE_A_YEAR">Once a year</option>
                     <option value="TWICE_A_YEAR">Twice a year</option>
                     <option value="THRISE_A_YEAR">Thrise a year</option>
                  </select>
               </div>
               <div>
                  <input id="search" type="text" placeholder="Search everyware" className="border border-gray-300 rounded-md px-2 py-1" onInput={() => handleSearch()} />
               </div>
            </div>
            <table className="w-full">
               <thead>
                  <tr>
                     <th className="border px-4 py-1 bg-slate-400">ID</th>
                     <th className="border px-4 py-1 bg-slate-400">Animal Name</th>
                     <th className="border px-4 py-1 bg-slate-400">Animal State</th>
                     <th className="border px-4 py-1 bg-slate-400">Vaccine</th>
                     <th className="border px-4 py-1 bg-slate-400">Vaccination Frequency</th>
                     <th className="border px-4 py-1 bg-slate-400">Due Date</th>
                     <th className="border px-4 py-1 bg-slate-400">Last Vaccinated Date</th>
                     <th className="border px-4 py-1 bg-slate-400">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {filteredData.map((vaccination, index) => (
                     <tr key={vaccination._id} className="bg-white">
                        <td className="border px-4 py-1">{index + 1}</td>
                        <td className="border px-4 py-1">{vaccination.name}</td>
                        <td className="border px-4 py-1">{vaccination.state}</td>
                        <td className="border px-4 py-1">{vaccination.vaccinationName}</td>
                        <td className="border px-4 py-1">{vaccination.vaccinationFrequency}</td>
                        <td className="border px-4 py-1">{calculateDueDate(vaccination.vaccinationFrequency, vaccination.lastVaccination)}</td>
                        <td className="border px-4 py-1">{vaccination.lastVaccination === "Not Vaccinated" ? "Not Vaccinated" : new Date(vaccination.lastVaccination).toISOString().slice(0, 10).replace('T', ' ')}</td>
                        <td className="border px-4 py-1 ">
                           <div className="flex justify-between">
                              {vaccination.state !== "ADOPTED" ? <HiPencilAlt onClick={() => handleEdit(vaccination._id)} size={20} className="mr-4 hover:cursor-pointer" /> : <></>}
                              {vaccination.lastVaccination !== "Not Vaccinated" ? <TbListDetails onClick={() => handleHistoryView(vaccination._id)} size={20} className="mr-4 hover:cursor-pointer" /> : ""}
                           </div>
                        </td>
                     </tr>
                  ))}
               </tbody>
            </table>

            <Modal isOpen={isVacinationHistoryModalOpen} onRequestClose={() => setIsVacinationHistoryModalOpen(false)} className="modal lg empty" overlayClassName="modal-overlay" appElement={document.getElementById('root')}>
               <div className=" bg-sky-200 p-3 rounded-lg shadow-[2px_2px_2px_1px_#0004]">
                  <h2 className="text-center text-lg font-bold">Vaccination Information</h2>
                  <table className="w-full">
                     <thead>
                        <tr>
                           <th className="border px-4 py-1 bg-slate-400">Animal ID</th>
                           <th className="border px-4 py-1 bg-slate-400">Vaccination</th>
                           <th className="border px-4 py-1 bg-slate-400">Vaccination Date</th>
                           <th className="border px-4 py-1 bg-slate-400">Action</th>
                        </tr>
                     </thead>
                     <tbody>
                        {vaccinationHistoryData.length > 0 && vaccinationHistoryData.map((item) => (
                           <tr key={item._id} className="bg-white">
                              <td className="border px-4 py-1 text-sm">{item.animal}</td>
                              <td className="border px-4 py-1 text-sm">{item.vaccine}</td>
                              <td className="border px-4 py-1 text-sm">{new Date(item.createdAt).toISOString().slice(0, 19).replace('T', ' ')}</td>
                              <td className="border px-4 py-1 text-sm flex justify-between">
                                 <HiPencilAlt onClick={() => handleVaccinationEdit(item._id)} size={20} className="mr-4 hover:cursor-pointer" />
                                 <HiTrash onClick={() => handleVaccinationDelete(item._id)} size={20} className="mr-4 hover:cursor-pointer" />
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </table>
               </div>
            </Modal>

            <Modal isOpen={isvaccinationFrequencyModalOpen} onRequestClose={() => setIsvaccinationFrequencyModalOpen(false)} className="modal lg empty" overlayClassName="modal-overlay" appElement={document.getElementById('root')}>
               <div className=" bg-sky-200 p-3 rounded-lg shadow-[2px_2px_2px_1px_#0004]">
                  <h2 className="text-center text-lg font-bold mb-4">Vacination Frequency Scheduling</h2>

                  <div className="flex items-center mb-4">
                     <div className="w-[200px] text-sm font-semibold leading-4">Vaccination Frequency</div>
                     <div className="w-[10px] px-5">:</div>
                     <select className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={vaccinationFrequency} onChange={(e) => setVaccinationFrequency(e.target.value)}>
                        <option value="">-- Select Vaccination Frequency --</option>
                        <option value="ONCE_A_WEEK">Once a week</option>
                        <option value="TWICE_A_MONTH">Twice a month</option>
                        <option value="ONCE_A_MONTH">Once a month</option>
                        <option value="ONCE_A_YEAR">Once a year</option>
                        <option value="TWICE_A_YEAR">Twice a year</option>
                        <option value="THRISE_A_YEAR">Thrise a year</option>
                     </select>
                  </div>
                  <div className="text-right">
                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleFundRequestSubmit}>Submit</button>
                  </div>
               </div>
            </Modal>
            <Modal isOpen={isSvacModalOpen} onRequestClose={() => setIsSvacModalOpen(false)} className="modal lg empty" overlayClassName="modal-overlay" appElement={document.getElementById('root')}>
               <div className=" bg-sky-200 p-3 rounded-lg shadow-[2px_2px_2px_1px_#0004]">
                  <h2 className="text-center text-lg font-bold mb-4">Vacination Edit</h2>
                  <div className="border-2 border-gray-800 rounded-md mb-2 px-2 py-1 bg-white">
                     <input type="email" placeholder="Vaccination Name" className="placeholder-slate-600 w-full outline-none" value={svac.vaccine} onChange={(e) => setSvac({ ...svac, vaccine: e.target.value })} />
                  </div>

                  <div className="text-right">
                     <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSvacEdit}>Submit</button>
                  </div>
               </div>
            </Modal>
            <ToastContainer />
         </div>
      </Layout>
   );
}

export default VaccinationManage;