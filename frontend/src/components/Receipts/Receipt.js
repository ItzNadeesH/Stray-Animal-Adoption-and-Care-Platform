import React, { useState } from 'react';
import axios from 'axios';
//import jsPDF from 'jspdf';
//import html2canvas from 'html2canvas';

const Receipt = () => {
  const [invoiceDetails, setInvoiceDetails] = useState({
    date: 'Add Date',
    invoiceNumber: 'Invoice Number',
    totalAmount: 0.00 // Fix typo here
  });

  const [items, setItems] = useState([
    { description: 'Details here', amount: 0.00 },
  ]);

  const handleInvoiceChange = (e) => {
    setInvoiceDetails({ ...invoiceDetails, [e.target.name]: e.target.value });
  };

  const handleItemChange = (index, e) => {
    const updatedItems = items.map((item, i) =>
      i === index
        ? {
            ...item,
            [e.target.name]:
              e.target.type === 'number'
                ? parseFloat(e.target.value)
                : e.target.value,
          }
        : item
    );
    setItems(updatedItems);
  };

  const handleAddItem = () => {
    setItems([...items, { description: 'Details here', amount: 0 }]);
  };

  const handleRemoveItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const calculateTotal = () => {
    return items.reduce((acc, item) => acc + parseFloat(item.amount), 0); // Adjusted calculation
  };

  //const savePdf = () => {
  //  const input = document.getElementById('pdf-content');
  //  html2canvas(input)
   //   .then((canvas) => {
    //    const imgData = canvas.toDataURL('image/png');
     //   const pdf = new jsPDF({
     //     orientation: 'p',
     //     unit: 'px',
     //     format: [canvas.width, canvas.height]
     //   });
     //   pdf.addImage(imgData, 'PNG', 0, 0, canvas.width, canvas.height);
      //  pdf.save('${invoiceDetails.invoiceNumber}.png');
    //  })
    //  .catch(err => {
    //    console.error('Error saving PDF:', err);
    //  });
 // };

  const handleSave = () => {
    const totalamount = calculateTotal(); // Calculate total amount

    const data = {
      invoiceNumber: invoiceDetails.invoiceNumber,
      date: invoiceDetails.date,
      items: items,
      totalAmount: totalamount // Assign the calculated total amount
    };

    axios.post('http://localhost:5000/Receipts/add', data)
      .then(response => {
        console.log('Saved successfully:', response.data);
        alert('Invoice saved successfully!');
      })
      .catch((error) => {
        console.error('Error saving the invoice:', error);
        alert('Failed to save the invoice.');
      });
  };

  return (
    <div id="pdf-content">
      <div className="bg-white border rounded-lg shadow-lg px-6 py-8 max-w-md mx-auto mt-8">
        <h1 className="font-bold text-2xl my-4 text-center text-blue-600">
          Shelter Maintenance
        </h1>
        <h1 className="font-bold text-1xl my-2 text-center text-blue-600">
          Fund Receipt
        </h1>
        <div className="flex justify-between mb-6">
          <div className="text-gray-700">
            <input
              type="date"
              name="date"
              value={invoiceDetails.date}
              onChange={handleInvoiceChange}
              className="mb-2 p-1"
            />
            <input
              type="text"
              name="invoiceNumber"
              value={invoiceDetails.invoiceNumber}
              onChange={handleInvoiceChange}
              className="p-1"
            />
          </div>
        </div>
        <table className="w-full mb-4">
          <thead>
            <tr>
              <th className="text-left font-bold text-gray-700">Description</th>
              <th className="text-right font-bold text-gray-700">Amount</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, index) => (
              <tr key={index}>
                <td className="text-left text-gray-700">
                  <input
                    type="text"
                    name="description"
                    className="p-1 w-full"
                    value={item.description}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </td>
                <td className="text-right text-gray-700">
                  <input
                    type="number"
                    name="amount"
                    className="p-1 w-full text-right"
                    value={item.amount.toFixed(2)}
                    onChange={(e) => handleItemChange(index, e)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleRemoveItem(index)}
                    className="text-red-500"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td className="text-left font-bold text-gray-700">Total</td>
              <td className="text-right font-bold text-gray-700">
                {calculateTotal().toFixed(2)}
              </td>
              <td></td>
            </tr>
          </tfoot>
        </table>
        <div className="flex justify-end mt-4 space-x-2">
           <button onClick={handleAddItem} className="bg-green-500 text-white px-4 py-2 rounded">Add Item</button>
          <button onClick={handleSave} className="bg-blue-500 text-white px-8 py-2 rounded">Save</button>
        </div>
      </div>
    </div>
  );
};

export default Receipt;
