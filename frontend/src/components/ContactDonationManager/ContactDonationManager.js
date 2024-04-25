import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Nav from "../Nav/Nav"; // Import the Nav component
import backgroundImage from "../DonationHomePage/background.png";

export const ContactDonationManager = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47pk29s",
        "template_ldwy6bc",
        form.current,
        "Y5qXf8UMJIDZB-235"
      )

      .then(
        (result) => {
          console.log(result.text);
          alert("SUCCESS!");
        },
        (error) => {
          console.log(error.text);
          alert("error!");
        }
      );
  };

  return (
    <div>
      <Nav /> {/* Render the Nav component */}
      <div className="max-w-md mx-auto mt-10 ">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Contact Donation Manager
        </h1>
        <p className="text-gray-700 mb-6">
          Please fill out the form below to get in touch with our donation
          manager.
        </p>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name="user_name"
              type="text"
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="user_email"
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="requestType"
            >
              Request Type
            </label>
            <select
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="requestType"
              name="request_type"
            >
              <option value="Name">Change Name</option>
              <option value="email">Change Email</option>
              <option value="amount">Change Amount</option>
              <option value="description">Change Description</option>
              <option value="delete">Request to Delete Donation</option>
              <option value="none">None</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactDonationManager;
