import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import backgroundImage from "../../images/add.jpeg";

const AllFeedback = () => {
  const [feedbackList, setFeedbackList] = useState([]); // State to store feedback list
  const [loading, setLoading] = useState(true); // State to manage loading state
  const [searchQuery, setSearchQuery] = useState(""); // State to manage search query
  const feedbackContainerRef = useRef(null); // Reference to feedback container for scrolling

  useEffect(() => {
    // Function to fetch feedback data
    const fetchFeedback = async () => {
      try {
        // Fetch feedback data from api
        const response = await axios.get(
          "http://localhost:5000/api/Doctorfeedback/"
        );
        setFeedbackList(
          response.data.doctorFeedback.filter(
            (feedback) => feedback.status === true
          )
        ); // Filter feedback list to show only those with status true

        setLoading(false);

        if (feedbackContainerRef.current) {
          feedbackContainerRef.current.scrollIntoView({ behavior: "smooth" });
        }
      } catch (error) {
        console.error("Error fetching feedback:", error);
        setLoading(false); // Set loading to false if there's an error
      }
    };

    fetchFeedback(); // Invoke fetchFeedback function on component mount
  }, []);

  const handleDelete = async (id) => {
    try {
      const confirmed = window.confirm(
        "Are you sure you want to delete this feedback?"
      );
      if (confirmed) {
        await axios.delete(`http://localhost:5000/api/Doctorfeedback/${id}`);
        setFeedbackList((prevFeedback) =>
          prevFeedback.filter((feedback) => feedback._id !== id)
        );
        toast.success("Feedback deleted successfully!");
      }
    } catch (error) {
      console.error("Error deleting feedback:", error);
      toast.error("Failed to delete feedback!");
    }
  };
  // Function to handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Filter feedback based on search query
  const filteredFeedback = feedbackList.filter(
    (feedback) =>
      feedback.customerName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.doctorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      feedback.doctorrfeedback.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
    <header className="flex justify-between sticky top-0 p-4 bg-white shadow-sm items-center">
      
      <h2 className="cursor-pointer uppercase font-medium">
        <Link to="/all-feedback "> Feedback Doctor  </Link>
      </h2>
      <h2 className="cursor-pointer uppercase font-medium">
        <Link to="/all-servies"> Service Feedback</Link>
      </h2>
      <ul className="hidden md:flex gap-4 uppercase font-medium">
        <>
          <li className="bg-blue-500 text-white hover:bg-blue-600 font-medium rounded-md">
            <Link to="/add-feedback" className="block w-full h-full px-4 py-2">
              {" "}
              <i className="fa-solid fa-plus"></i> Add Doctor Feedback{" "}
            </Link>
          </li>
          {/* <li className='py-2 px-3 cursor-pointer hover:bg-gray-200 transition rounded-sm' >Logout</li> */}
        </>
        
      </ul>
    </header>
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        minHeight: "100vh",
      }}
    >
      <br></br>
      <div
        ref={feedbackContainerRef}
        className="my-2 mx-auto max-w-[700px] py-7 bg-cover p-4 bg-white bg-opacity-50 border-2 shadow-md rounded-md "
        style={{}}
      >
        <ToastContainer />
        <h2 style={{ color: "white" }} className="my-2 ml-2 md:ml-0 text-xl">
          All Feedback
        </h2>
        <div className="my-4">
          <input
            type="text"
            placeholder="Search feedback"
            value={searchQuery}
            onChange={handleSearch}
            className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-md text-sm focus:outline-none"
          />
        </div>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div>
            {filteredFeedback.length === 0 ? (
              <div className="w-[600px] h-[300px] flex items-center justify-center gap-4">
                <span>No feedback available.</span>
              </div>
            ) : (
              <div>
                {filteredFeedback.map((feedback) => (
                  <div
                    key={feedback._id}
                    className="bg-white my-4 p-4 text-gray-600 rounded-md shadow-md"
                  >
                    <div className="flex items-center">
                      <p>
                        <strong>Customer Name:</strong> {feedback.customerName}
                      </p>
                      <div className="ml-auto">
                        <Link
                          to={`/Doctorfeedback/${feedback._id}`}
                          className="text-blue-500 cursor-pointer mr-2"
                        >
                          Edit
                        </Link>
                        <button
                          onClick={() => handleDelete(feedback._id)}
                          className="px-4 py-2 bg-red-500 text-white rounded-md"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                    <p>
                      <strong>Doctor Name:</strong> {feedback.doctorName}
                    </p>
                    <p>
                      <strong>Rating:</strong> {feedback.doctorRating}
                    </p>
                    <p>
                      <strong>Feedback:</strong> {feedback.doctorrfeedback}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div></>
  );
};

export default AllFeedback;
