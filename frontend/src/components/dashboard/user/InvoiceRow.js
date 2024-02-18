import React from 'react';
import { useProduct } from '../../../hooks/useProduct';

const InvoiceRow = ({ product }) => {
  const { data } = useProduct(product.productId);

  return (
    <>
      {data && (
        <tr>
          <td className="text-[14px] p-4">{data.name}</td>
          <td className="text-[14px] p-4 text-center">Rs.{product.price}.00</td>
          <td className="text-[14px] p-4 text-center">{product.quantity}</td>
          <td className="text-[14px] p-4 text-center">
            Rs.{product.price * product.quantity}.00
          </td>
        </tr>
      )}
    </>
  );
};

export default InvoiceRow;
