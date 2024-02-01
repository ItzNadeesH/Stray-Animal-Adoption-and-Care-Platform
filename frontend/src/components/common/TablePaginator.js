import React, { useEffect, useState } from 'react';

const TablePaginator = ({ data, setCurrentData, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    if (data) {
      data.length > currentPage + itemsPerPage
        ? setCurrentData(data.slice(currentPage, currentPage + itemsPerPage))
        : setCurrentData(data.slice(currentPage, data.length));
    }
  }, [data, currentPage, itemsPerPage, setCurrentData]);

  return (
    <>
      {data && (
        <nav
          className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
          aria-label="Table navigation"
        >
          <span className="text-sm font-normal ">
            Showing
            <span className="font-normal">
              {' '}
              {currentPage + 1} -{' '}
              {data &&
                (currentPage + itemsPerPage < data.length
                  ? currentPage + itemsPerPage
                  : data.length)}{' '}
            </span>
            of
            <span className="font-normal"> {data && data.length} </span>
          </span>
          <ul className="inline-flex items-stretch -space-x-px">
            <li>
              <button
                disabled={currentPage < 10}
                onClick={() => setCurrentPage(currentPage - itemsPerPage)}
                className="flex items-center justify-center h-full py-1.5 px-3 ml-0 bg-white rounded-l-lg border border-gray-300"
              >
                <span className="sr-only">Previous</span>
                <svg
                  className={`w-5 h-5 ${currentPage < 10 && 'text-[#767676]'}`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
            <li>
              <p className="flex items-center justify-center text-sm w-[46px] py-2 px-3 leading-tight bg-white border border-gray-300 select-none">
                {currentPage / itemsPerPage + 1}
              </p>
            </li>
            <li>
              <button
                disabled={data && data.length < currentPage + itemsPerPage}
                onClick={() => setCurrentPage(currentPage + itemsPerPage)}
                className="flex items-center justify-center h-full py-1.5 px-3 leading-tight bg-white rounded-r-lg border border-gray-300"
              >
                <span className="sr-only">Next</span>
                <svg
                  className={`w-5 h-5 ${
                    data &&
                    data.length < currentPage + itemsPerPage &&
                    'text-[#767676]'
                  }`}
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default TablePaginator;
