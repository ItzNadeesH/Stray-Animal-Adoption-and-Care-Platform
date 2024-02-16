import React from 'react';

const Invoice = () => {
  return (
    <>
      <div className="p-8 max-w-screen-md mx-auto">
        <div className="p-8">
          <div className="flex">
            <div>
              <p className="text-[30px] font-bold">Invoice #0473</p>
            </div>
            <div className="flex-1 text-right">
              <p>LOGO</p>
              <p className="font-bold">Themesberg Inc.</p>
              <p className="text-[14px]">
                291 N 4th St, San Jose, CA 95112, USA
              </p>
              <p className="text-[14px] text-[#767676]">August 1, 2021</p>
            </div>
          </div>
          <div>
            <p className="font-bold mb-4">BILL TO</p>
            <p className="w-[300px] text-[#767676]">
              Themesberg Inc., LOUISVILLE, Selby 3864 Johnson Street, United
              States of America VAT Code: AA-1234567890
            </p>
          </div>
          <div className="mt-4 border-b border-[#e6e6e6]">
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="text-[12px] p-4 bg-[#e6e6e6] rounded-l-lg">
                    ITEM
                  </th>
                  <th className="text-[12px] p-4 bg-[#e6e6e6]">PRICE</th>
                  <th className="text-[12px] p-4 bg-[#e6e6e6]">QTY</th>
                  <th className="text-[12px] p-4 bg-[#e6e6e6] text-center rounded-r-lg">
                    TOTAL
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="text-[14px] p-4">Pixel Design System</td>
                  <td className="text-[14px] p-4">$128.00</td>
                  <td className="text-[14px] p-4">2</td>
                  <td className="text-[14px] p-4 text-center">$256.00</td>
                </tr>
                <tr>
                  <td className="text-[14px] p-4">Pixel Design System</td>
                  <td className="text-[14px] p-4">$128.00</td>
                  <td className="text-[14px] p-4">2</td>
                  <td className="text-[14px] p-4 text-center">$256.00</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="ml-auto w-[300px] text-[14px] mt-4">
            <div className="flex justify-between py-2">
              <p>SUBTOTAL</p>
              <p>00.00</p>
            </div>
            <div className="flex justify-between py-2">
              <p>SHIPPING</p>
              <p>00.00</p>
            </div>
            <div className="flex justify-between py-2">
              <p className="font-bold">TOTAL</p>
              <p>00.00</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
