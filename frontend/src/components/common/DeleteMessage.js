import React from 'react';

const DeleteMessage = ({ visibility, setVisibility, onDelete }) => {
  return (
    <>
      <div
        id="deleteModal"
        tabIndex="-1"
        aria-hidden="true"
        className={`${
          visibility && 'hidden'
        } overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full bg-[#00000030]`}
      >
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 w-full max-w-md max-h-full">
          <div className="relative p-4 text-center bg-cyan-blue rounded-lg shadow sm:p-5">
            <button
              onClick={() => setVisibility(false)}
              type="button"
              className="text-white absolute top-2.5 right-2.5 bg-transparent hover:bg-white hover:text-cyan-blue rounded-lg text-sm p-1.5 ml-auto inline-flex items-center transition-all"
              data-modal-toggle="deleteModal"
            >
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  cliprulefillrule="evenodd"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
            <svg
              className="text-white w-11 h-11 mb-3.5 mx-auto"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                cliprulefillrule="evenodd"
              />
            </svg>
            <p className="mb-4 text-white">
              Are you sure you want to delete this item?
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button
                onClick={() => setVisibility(false)}
                data-modal-toggle="deleteModal"
                type="button"
                className="py-2 px-3 text-sm font-medium text-black bg-[#e6e6e6] hover:bg-[#c6c6c6] rounded-lg outline-none transition-all"
              >
                No, cancel
              </button>
              <button
                onClick={() => {
                  onDelete();
                  setVisibility(false);
                }}
                type="submit"
                className="py-2 px-3 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 transition-all"
              >
                Yes, I'm sure
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeleteMessage;
