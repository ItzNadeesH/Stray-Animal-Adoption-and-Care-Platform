import React, { useEffect, useState } from "react";
import { APP_URL } from "../../config";
import Layout from "../Layout";

function AdoptionView() {

   const [adoptionData, setAdoptionData] = useState([]);

   useEffect(() => {
      fetchAdoption();
   }, []);

   const fetchAdoption = async () => {
      const response = await fetch(APP_URL + `/api/adoption/${window.location.pathname.split("/")[4]}`);
      const data = await response.json();
      setAdoptionData(data);
   }

   return (
      <Layout>
      <div className="p-10">
         <h3 className="text-2xl font-bold text-center mb-5">Adoption Details - {adoptionData._id}</h3>
         <div className="w-[800px] shadow-md shadow-neutral-300 m-auto p-4  bg-white">
            {Object.keys(adoptionData).length > 0 && (
               <div className="grid grid-cols-2 gap-4">
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Adoption ID</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData._id} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Animal ID</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.animal} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">User Name</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.username} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Adoption State</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.state} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Applicant Name</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.applicant_name} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Spouse Name</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.spouse_name} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Applicant Occupation</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.applicant_occupation} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Spouse Occupation</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.spouse_occupation} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Email</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.email} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Address</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.address} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Phone</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.phone} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Cell</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.cell} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Number of Children</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.no_of_children} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Number of Adults</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.no_of_adults} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">Animal Cruelty</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.animal_cruelty} disabled />
                  </div>
                  <div className="col-span-2">
                     <div className="text-sm font-semibold leading-4 mb-2">Animal Cruelty Explanation</div>
                     <textarea className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.animal_cruelty_explanation} disabled />
                  </div>
                  <div>
                     <div className="text-sm font-semibold leading-4 mb-2">State</div>
                     <input type="text" className="w-full p-2 text-sm border border-slate-300 shadow-tremor-card" value={adoptionData.state} disabled />
                  </div>
               </div>
            )}
         </div>
      </div>
      </Layout>
   );
}

export default AdoptionView;