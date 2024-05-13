import React, { useState } from 'react';
import ProductRow from './ProductRow';
import { useProducts } from '../../../hooks/useProducts';
import TablePaginator from '../../common/TablePaginator';
import Loader from '../../../utils/Loader';

const ProductList = ({ onSelect, setRowData }) => {
  const { data, setData } = useProducts();
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
      <section className="bg-gray-50 p-3 sm:p-4 antialiased">
        <div className="mx-auto max-w-screen-full">
          <div className="bg-white relative shadow-md sm:rounded-lg overflow-hidden">
            {currentData && (
              <>
                <div className="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                  <div className="w-full md:w-1/2"></div>
                  <div className="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                    <button
                      onClick={() => {
                        onSelect('Add Product');
                      }}
                      type="button"
                      id="createProductModalButton"
                      data-modal-target="createProductModal"
                      data-modal-toggle="createProductModal"
                      className="flex items-center justify-center text-white bg-cyan-blue hover:bg-black font-medium rounded-lg text-sm px-4 py-2 outline-none transition-all"
                    >
                      <svg
                        className="h-3.5 w-3.5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          clipRule="evenodd"
                          fillRule="evenodd"
                          d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                        />
                      </svg>
                      Add Product
                    </button>
                    <div className="flex items-center space-x-3 w-full md:w-auto"></div>
                  </div>
                </div>
                <div className="overflow-x-auto h-[660px]">
                  <table className="w-full text-sm text-left pb-5">
                    <thead className="text-xs text-white uppercase bg-cyan-blue">
                      <tr>
                        <th scope="col" className="px-4 py-4">
                          Product name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Category
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Manufactrer
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Price
                        </th>
                        <th scope="col" className="px-4 py-3 text-center">
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentData.map((product) => (
                        <ProductRow
                          key={product._id}
                          item={product}
                          onRemove={handleOnRemove}
                          onSelect={onSelect}
                          setRowData={setRowData}
                        />
                      ))}
                      <tr>
                        <td className="pb-[80px]"></td>
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

export default ProductList;
