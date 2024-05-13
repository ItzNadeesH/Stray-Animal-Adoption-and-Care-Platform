import React, { useEffect, useState } from 'react';
import { APP_URL } from '../config';
import { useUser } from '../contexts/UserContext';
import { HiTrash } from 'react-icons/hi';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from './Layout';
import { Link } from 'react-router-dom';


function Profile() {
   const { user } = useUser();

   const [notifications, setNotifications] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const response = await fetch(APP_URL + '/api/user/profile/' + user._id);
      const data = await response.json();
      setNotifications(data.notifications);
   }

   const handleDelete = async (volunteerId) => {
      const response = await fetch(APP_URL + `/api/volunteerRespond/${volunteerId}`, {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            "Authorization": localStorage.getItem("token"),
         },
         body: JSON.stringify({ userId: user._id }),
      });
      const data = await response.json();
      if (data.error) {
         toast.error(data.message);
      } else {
         toast.success(data.message);
         fetchData();
      }
   }

   const handleNotificationDelete = async (id) => {

      const response = await fetch(APP_URL + '/api/notification/' + id, {
         method: 'DELETE',
         headers: {
            'Content-Type': 'application/json',
         },
      });
      const data = await response.json();
      if (data.error) {
         console.log(data.message);
      } else {
         setNotifications(notifications.filter((item) => item._id !== id));
      }
   }

   return (
      <Layout>
         <div className="p-10">
            <h1 className="text-2xl font-bold mb-10">Manage Profile</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
               <div className="border col-span-2 p-4 shadow-[2px_2px_2px_1px_#0004] hover:shadow-[2px_2px_2px_1px_#0006] rounded-lg hover:cursor-pointer bg-white">
                  <div className="mb-8">
                     <h3 className="text-lg font-bold mb-2">Notifications</h3>
                     {notifications.map((item) => (
                        <div key={item._id} className="bg-orange-100 hover:bg-orange-200 border grid grid-cols-[1fr,40px]  p-4 mb-4 rounded-lg shadow-lg">
                           <div>
                              <Link to={item.link} className="">
                                 <div className="text-gray-800">
                                    <p className="font-bold text-sm">{item.title}</p>
                                    <p className=" text-xs">{item.message}</p>
                                 </div>
                              </Link>
                              <div className="text-xs text-gray-800">
                                 <p className='ms-auto w-fit'>{new Date(item.createdAt).toISOString().slice(0, 19).replace('T', ' ')}</p>
                              </div>
                           </div>
                           <div className='flex justify-end items-end'>
                              <button className="text-red-800 hover:text-red-900" onClick={() => handleNotificationDelete(item._id)}>  <HiTrash size={20} className="hover:cursor-pointer" /></button>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
               <div className="border p-4 shadow-[2px_2px_2px_1px_#0004] hover:shadow-[2px_2px_2px_1px_#0006] rounded-lg hover:cursor-pointer bg-white">
                  {user && (
                     <div className="">
                        <h2 className="text-xl font-bold mb-4">User Details </h2>
                        <p>User ID: {user._id}</p>
                        <p>User Email: {user.email}</p>
                        <p>User Role: {user.role}</p>
                     </div>
                  )}
               </div>


            </div>
         </div >
         <ToastContainer />
      </Layout>

   );
};

export default Profile;