import React from 'react';
import { useProduct } from '../../../hooks/useProduct';

const OrderDetails = ({ product }) => {
  const { data } = useProduct(product.productId);

  return (
    <>
      {data && (
        <div className="flex flex-wrap sm:items-center p-6 bg-white border border-[#e6e6e6] max-w-[768px]">
          <img
            className="max-w-[250px] max-h-[250px] mx-auto sm:mx-0 sm:w-[135px] sm:h-[135px] rounded-lg"
            src={data.image}
            alt="bokdok"
          />
          <div className="sm:w-2/3 text-[14px] sm:ml-10">
            <h2 className="text-[16px]">{data.name}</h2>
            <p className="mt-2">Rs.{data.price}.00</p>
            <p className="mt-3 text-[#767676]">{data.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderDetails;
