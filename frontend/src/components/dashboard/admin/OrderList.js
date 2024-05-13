import React, { useState } from 'react';
import { useAllOrders } from '../../../hooks/useAllOrders';
import TablePaginator from '../../common/TablePaginator';
import OrderRow from './OrderRow';
import Loader from '../../../utils/Loader';

const OrderList = () => {
  const { data } = useAllOrders();
  const [currentData, setCurrentData] = useState();

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
                          Order ID
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Address
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Phone
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Date
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((item) => (
                        <OrderRow key={item._id} item={item} />
                      ))}
                      <tr>
                        <td className="pb-[150px]"></td>
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

export default OrderList;
