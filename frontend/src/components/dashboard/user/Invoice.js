import React, { useRef } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { format } from 'date-fns';
import { IoPrintSharp } from 'react-icons/io5';
import { IoMdDownload } from 'react-icons/io';
import InvoiceRow from './InvoiceRow';

const Invoice = ({ data, total }) => {
  const { products } = data;
  const pdfRef = useRef(null);
  const formattedDate = format(new Date(data.date), 'MMMM d, yyyy');
  const downloadPDF = () => {
    const input = pdfRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      const width = pdf.internal.pageSize.getWidth();
      const height = pdf.internal.pageSize.getHeight() - 150;
      pdf.addImage(imgData, 'PNG', 0, 0, width, height);
      pdf.save('Invoice.pdf');
    });
  };

  const handlePrint = () => {};

  return (
    <>
      <div className="max-w-[768px] bg-white rounded-lg my-2">
        <div ref={pdfRef}>
          <div className="p-8">
            <div className="flex">
              <div>
                <p className="text-[30px] font-bold">
                  Invoice #{parseInt(data._id.substr(-5).toUpperCase(), 16)}
                </p>
              </div>
              <div className="flex-1 text-right">
                <p>LOGO</p>
                <p className="font-bold">Themesberg Inc.</p>
                <p className="text-[14px]">
                  291 N 4th St, San Jose, CA 95112, USA
                </p>
                <p className="text-[14px] text-[#767676]">{formattedDate}</p>
              </div>
            </div>
            <div>
              <p className="font-bold mb-2">BILL TO</p>
              <p className="w-[300px] text-[#767676] text-[12px]">
                {data.name}
                {data.address}
              </p>
            </div>
            <div className="mt-6 border-b border-[#e6e6e6]">
              <table className="w-full text-left">
                <thead className="border-y p-4">
                  <tr>
                    <th className="text-[12px] px-4 pb-4">ITEM</th>
                    <th className="text-[12px] px-4 pb-4 text-center">PRICE</th>
                    <th className="text-[12px] px-4 pb-4 text-center">QTY</th>
                    <th className="text-[12px] px-4 pb-4 text-center">TOTAL</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((item) => (
                    <InvoiceRow key={item._id} product={item} />
                  ))}
                </tbody>
              </table>
            </div>
            <div className="ml-auto w-[300px] text-[14px] mt-4">
              <div className="flex justify-between py-2">
                <p>SUBTOTAL</p>
                <p>Rs.{total}.00</p>
              </div>
              <div className="flex justify-between py-2">
                <p>SHIPPING</p>
                <p>Rs.650.00</p>
              </div>
              <div className="flex justify-between py-2">
                <p className="font-bold">TOTAL</p>
                <p>Rs.{total + 650}.00</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end p-8">
          <button
            onClick={handlePrint}
            className="flex items-center mx-4 mt-3 h-9 px-4 text-[12px] text-white bg-cyan-blue rounded-md hover:bg-black transition-all"
          >
            Print
            <IoPrintSharp size={16} className="ml-2" />
          </button>
          <button
            onClick={downloadPDF}
            className="flex items-center mt-3 h-9 px-4 text-[12px] text-white bg-cyan-blue rounded-md hover:bg-black transition-all"
          >
            Download
            <IoMdDownload size={16} className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Invoice;
