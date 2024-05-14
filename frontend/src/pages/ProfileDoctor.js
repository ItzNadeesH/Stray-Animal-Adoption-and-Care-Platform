import React, { useEffect, useState } from 'react';
import { APP_URL } from '../config';
import { useUser } from '../contexts/UserContext';
import Layout from './Layout';
import { Link } from 'react-router-dom';
import { HiEye, HiTrash } from 'react-icons/hi';


function ProfileDoctor() {
   const { user } = useUser();

   const [appointments, setAppointments] = useState([]);
   const [notifications, setNotifications] = useState([]);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      const response = await fetch(APP_URL + '/api/user/doctor/' + user._id);
      const data = await response.json();
      setAppointments(data.appointments);
      setNotifications(data.notifications);
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

   const handleNotificationRead = async (id) => {
      const n = notifications.find((item) => item._id === id);
      n.status = "read";
      const response = await fetch(APP_URL + '/api/notification/' + id, {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify(n),
      });
      const data = await response.json();
      if (data.error) {
         console.log(data.message);
      } else {
         setNotifications(notifications.map((item) => (item._id === id ? data : item)));
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
                           <div className=''>
                              <HiTrash size={20} className="hover:cursor-pointer" onClick={() => handleNotificationDelete(item._id)} />

                              {item.status === "unread" && <HiEye size={20} className="hover:cursor-pointer" onClick={() => handleNotificationRead(item._id)} />
                              }

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
      </Layout>

   );
};

export default ProfileDoctor;