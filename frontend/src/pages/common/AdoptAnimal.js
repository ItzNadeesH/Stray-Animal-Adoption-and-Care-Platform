import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUser } from "../../contexts/UserContext";
import { APP_URL } from '../../config';
import Layout from "../Layout";

function AdoptAnimal() {
   const navigate = useNavigate();

   const { user, sync } = useUser();

   const [applicant_name, setApplicantName] = useState("");
   const [spouse_name, setSpouseName] = useState("");
   const [applicant_occupation, setApplicantOccupation] = useState("");
   const [spouse_occupation, setSpouseOccupation] = useState("");
   const [email, setEmail] = useState("");
   const [address, setAddress] = useState("");
   const [phone, setPhone] = useState("");
   const [cell, setCell] = useState("");
   const [no_of_children, setNoOfChildren] = useState("");
   const [no_of_adults, setNoOfAdults] = useState("");
   const [animal_cruelty, setAnimalCruelty] = useState("");
   const [animal_cruelty_explanation, setAnimalCrueltyExplanation] = useState("");


   const [animalId, setAnimalId] = useState("");

   useEffect(() => {
      setAnimalId(window.location.pathname.split("/")[2]);
   }, []);

   const handleAdd = async () => {
      if (!applicant_name || !spouse_name || !applicant_occupation || !spouse_occupation || !email || !address || !phone || !cell || !no_of_children || !no_of_adults || !animal_cruelty || !animal_cruelty_explanation) {
         toast.error("Please fill in all fields");
         return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
         toast.error("Please enter a valid email address");
         return;
      }

      const phoneRegex = /^\d{10}$/;
      if (!phoneRegex.test(phone)) {
         toast.error("Please enter a valid phone number");
         return;
      }
      const cellRegex = /^\d{10}$/;
      if (!cellRegex.test(cell)) {
         toast.error("Please enter a valid cell number");
         return;
      }
      const noOfChildrenRegex = /^\d+$/;
      if (!noOfChildrenRegex.test(no_of_children)) {
         toast.error("Please enter a valid number for the number of children");
         return;
      }
      const noOfAdultsRegex = /^\d+$/;
      if (!noOfAdultsRegex.test(no_of_adults)) {
         toast.error("Please enter a valid number for the number of adults");
         return;
      }

      await fetch(APP_URL + `/api/adoption`, {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            applicant_name,
            spouse_name,
            applicant_occupation,
            spouse_occupation,
            email,
            address,
            phone,
            cell,
            no_of_children,
            no_of_adults,
            animal_cruelty,
            animal_cruelty_explanation,
            animal: animalId,
            user: user._id
         })
      }).then((res) => res.json())
         .then((data) => {
            console.log(data);
            if (data.error) {
               toast.error(data.message);
            } else {
               navigate("/animal");
            }
         });
      sync();
   }

   return (
      <Layout>
         <div className="p-10" style={{
            backgroundImage: `url(${process.env.PUBLIC_URL}/images/bg-2.jpg)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            minHeight: '100vh'
         }}>
            <div className="w-[1000px] m-auto p-4 mb-2 rounded-lg" style={{ background: '#0007', backdropFilter: `blur(8px)` }}>
               <div className="text-xl text-white font-bold">Personal Information</div>
            </div>
            <div className="w-[1000px] m-auto py-4 px-2 rounded-lg mb-8 " style={{ background: '#0007', backdropFilter: `blur(8px)` }}>
               <div className="flex mb-2">
                  <div className="w-2/3 mx-2">
                     <label className="block text-sm text-white font-[600]">Applicant Name</label>
                     <input type="text" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={applicant_name} onChange={(e) => setApplicantName(e.target.value)} />
                  </div>
                  <div className="w-1/3 mx-2">
                     <label className="block text-sm text-white font-[600]">Applicant Occupation</label>
                     <input type="text" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={applicant_occupation} onChange={(e) => setApplicantOccupation(e.target.value)} />
                  </div>
               </div>
               <div className="flex mb-2">
                  <div className="w-2/3 mx-2">
                     <label className="block text-sm text-white font-[600]">Spouse Name</label>
                     <input type="text" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={spouse_name} onChange={(e) => setSpouseName(e.target.value)} />
                  </div>
                  <div className="w-1/3 mx-2">
                     <label className="block text-sm text-white font-[600]">Spouse Occupation</label>
                     <input type="text" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={spouse_occupation} onChange={(e) => setSpouseOccupation(e.target.value)} />
                  </div>
               </div>
               <div className="flex mb-2">
                  <div className="w-1/2 mx-2">
                     <label className="block text-sm text-white font-[600]">Email</label>
                     <input type="email" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={email} onChange={(e) => setEmail(e.target.value)} />
                  </div>
                  <div className="w-1/2 mx-2">
                     <label className="block text-sm text-white font-[600]">Address</label>
                     <input type="text" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={address} onChange={(e) => setAddress(e.target.value)} />
                  </div>
               </div>
               <div className="flex mb-2">
                  <div className="w-1/2 mx-2">
                     <label className="block text-sm text-white font-[600]">Phone</label>
                     <input type="text" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                  <div className="w-1/2 mx-2">
                     <label className="block text-sm text-white font-[600]">Cell</label>
                     <input type="text" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={cell} onChange={(e) => setCell(e.target.value)} />
                  </div>
               </div>
               <div className="flex mb-2">
                  <div className="w-1/2 mx-2">
                     <label className="block text-sm text-white font-[600]">No of Children</label>
                     <input type="number" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={no_of_children} onChange={(e) => setNoOfChildren(e.target.value)} />
                  </div>
                  <div className="w-1/2 mx-2">
                     <label className="block text-sm text-white font-[600]">No of Adults</label>
                     <input type="number" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={no_of_adults} onChange={(e) => setNoOfAdults(e.target.value)} />
                  </div>
               </div>

               <div className="flex mb-2">
                  <div className="w-1/5 mx-2">
                     <label className="block text-sm text-white font-[600]">Animal Cruelty</label>
                     <input type="text" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={animal_cruelty} onChange={(e) => setAnimalCruelty(e.target.value)} />
                  </div>
                  <div className="w-4/5 mx-2">
                     <label className="block text-sm text-white font-[600]">Animal Cruelty Explanation</label>
                     <input type="text" className="border p-1 w-full rounded-md" style={{ background: '#fdfdfd' }} value={animal_cruelty_explanation} onChange={(e) => setAnimalCrueltyExplanation(e.target.value)} />
                  </div>
               </div>
            </div>

            <div className="w-[1000px] m-auto">
               <button onClick={handleAdd} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full">Submit The Adoption Form</button>
            </div>
            <ToastContainer />
         </div >
      </Layout>
   );
}

export default AdoptAnimal;