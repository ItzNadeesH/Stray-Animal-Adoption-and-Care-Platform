import React, { useState } from 'react';
import { useUsers } from '../../../hooks/useUsers';
import TablePaginator from '../../common/TablePaginator';
import UserRow from './UserRow';
import Loader from '../../../utils/Loader';

const UsersList = () => {
  const { data, setData } = useUsers();
  const [currentData, setCurrentData] = useState();

  const handleOnRemove = (id) => {
    setData(data.filter((data) => id !== data._id));
  };
  return (
    <>
      {!currentData && (
        <div className="mt-[-80px]">
          <Loader />
        </div>
      )}
      <section className="bg-gray-50 p-3 sm:p-5 antialiased">
        <div className="mx-auto max-w-screen-full">
          <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            {currentData && (
              <>
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
