import React, { useState } from 'react';
import { useUsers } from '../../../hooks/useUsers';
import TablePaginator from '../../common/TablePaginator';
import UserRow from './UserRow';

const UsersList = () => {
  const { data, setData } = useUsers();
  const [currentData, setCurrentData] = useState();

  const handleOnRemove = (id) => {
    setData(data.filter((data) => id !== data._id));
  };
  return (
    <>
      <section className="bg-gray-50 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-full">
          <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            {currentData && (
              <>
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div className="w-full md:w-1/2">
                    <form className="flex items-center">
                      <label htmlFor="simple-search" className="sr-only">
                        Search
                      </label>
                      <div className="relative w-full">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                          <svg
                            aria-hidden="true"
                            className="w-5 h-5 text-gray-500 dark:text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <input
                          type="text"
                          id="simple-search"
                          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:border-cyan-blue block w-full pl-10 p-2 outline-0 transition-all"
                          placeholder="Search"
                        />
                      </div>
                    </form>
                  </div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <div className="flex items-center space-x-3 w-full md:w-auto">
                      <button
                        id="filterDropdownButton"
                        data-dropdown-toggle="filterDropdown"
                        className="w-full md:w-auto h-9 flex items-center justify-center py-2 px-4 text-sm font-medium outline-none bg-white rounded-lg border border-cyan-blue "
                        type="button"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                          className="h-4 w-4 mr-2 text-cyan-blue"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 3a1 1 0 011-1h12a1 1 0 011 1v3a1 1 0 01-.293.707L12 11.414V15a1 1 0 01-.293.707l-2 2A1 1 0 018 17v-5.586L3.293 6.707A1 1 0 013 6V3z"
                            clipRule="evenodd"
                          />
                        </svg>
                        Filter
                        <svg
                          className="-mr-1 ml-1.5 w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                          aria-hidden="true"
                        >
                          <path
                            clipRule="evenodd"
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm text-left pb-5">
                    <thead className="text-xs text-white uppercase bg-cyan-blue">
                      <tr>
                        <th scope="col" className="px-4 py-4">
                          Username
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Email
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Role
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Created date
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((user) => (
                        <UserRow
                          key={user._id}
                          user={user}
                          onRemove={handleOnRemove}
                        />
                      ))}
                      <tr>
                        <td className="pb-[120px]"></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}
            {data && (
              <TablePaginator
                data={data}
                setCurrentData={setCurrentData}
                itemsPerPage={10}
              />
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default UsersList;
