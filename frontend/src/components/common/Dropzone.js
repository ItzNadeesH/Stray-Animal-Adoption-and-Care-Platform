import React from 'react';

const Dropzone = ({ imageProp, setImageProp }) => {
  // Image input handle
  const handleChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImageProp(e.target.result);
      };

      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="flex items-center justify-center w-full flex-wrap">
        {imageProp && (
          <div className="mb-6 border border-[#e6e6e6] rounded-lg overflow-hidden grow">
            <img
              className="my-2 mx-auto"
              src={imageProp}
              alt="Preview"
              style={{ width: '256px', height: '256px' }}
            />
          </div>
        )}
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-cyan-blue border-dashed rounded-lg cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF
            </p>
          </div>
          <input
            id="dropzone-file"
            type="file"
            name="image"
            className="hidden"
            onChange={handleChange}
          />
        </label>
      </div>
    </>
  );
};

export default Dropzone;
