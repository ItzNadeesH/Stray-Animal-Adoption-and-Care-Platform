import React, { createContext, useContext, useEffect, useState } from 'react';
import { APP_URL } from '../config';
import { useUsers } from '../hooks/useUsers';
import userAuth from '../reducers/userAuth';
import { loadUser } from '../actions/auth';
import { useSelector } from 'react-redux';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {


   const isAuthenticated = useSelector(
      (state) => state.userAuth.isAuthenticated
   );

   const [user, setUser] = useState(null);
   const [hasNotifications, setHasNotifications] = useState(false);

   useEffect(() => {
      if (localStorage.getItem("token") === null || !isAuthenticated) return;
      fetch(APP_URL + `/api/auth`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
         },
      })
         .then((res) => res.json())
         .then((d) => {
            if (d.error) {
               console.log(d);
            } else {
               setUser(d);

               fetch(APP_URL + `/api/notification/receiverunread/${d._id}`, {
                  method: "GET",
                  headers: {
                     "Content-Type": "application/json",
                     "x-auth-token": localStorage.getItem("token"),
                  },
               })
                  .then((res) => res.json())
                  .then((d) => {
                     if (d.error) {
                        console.log(d);
                     } else {
                        setHasNotifications(d.length > 0);
                     }
                  });
            }
         });
      console.log("run");
   }, [isAuthenticated]);

   const sync = () => {
      fetch(APP_URL + `/api/auth`, {
         method: "GET",
         headers: {
            "Content-Type": "application/json",
            "x-auth-token": localStorage.getItem("token"),
         },
      })
         .then((res) => res.json())
         .then((d) => {
            if (d.error) {
               console.log(d);
            } else {
               setUser(d);

               fetch(APP_URL + `/api/notification/receiverunread/${d._id}`, {
                  method: "GET",
                  headers: {
                     "Content-Type": "application/json",
                     "x-auth-token": localStorage.getItem("token"),
                  },
               })
                  .then((res) => res.json())
                  .then((d) => {
                     if (d.error) {
                        console.log(d);
                     } else {
                        setHasNotifications(d.length > 0);
                     }
                  });
            }
         });
   }

   return (
      <UserContext.Provider value={{ user, hasNotifications, sync }}>
         {children}
      </UserContext.Provider>
   );
};

export default UserContext;