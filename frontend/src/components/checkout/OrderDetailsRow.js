import React from 'react';
import { useProduct } from '../../hooks/useProduct';

const OrderDetailsRow = ({ product }) => {
  const { productId, quantity, price } = product;
  const { data } = useProduct(productId);

  return (
    <>
      <div className="text-[14px] flex justify-between items-center py-2 border-b border-[#e6e6e6]">
        <p className="max-w-[270px] font-medium my-2">
          {data && data.name} × {quantity}
        </p>
        <p>Rs.{quantity * price}.00</p>
      </div>
    </>
  );
};

export default OrderDetailsRow;
