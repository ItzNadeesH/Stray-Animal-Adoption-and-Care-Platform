import React, { useState, useEffect } from 'react';
import Dropdown from '../../common/Dropdown';
import { format } from 'date-fns';
import axios from 'axios';

const OrderRow = ({ item }) => {
  const formattedDate = format(new Date(item.date), 'MMMM d, yyyy');
  const [selected, setSelected] = useState(item.status);

  useEffect(() => {
    const changeStatus = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ selected });

      await axios.put('/api/orders/' + item._id, body, config);
    };
    changeStatus();
  }, [selected, item._id]);

  return (
    <>
      <>
        <tr className="border-b">
          <th scope="row" className="px-4 py-3 font-medium whitespace-nowrap">
            #{parseInt(item._id.substr(-5).toUpperCase(), 16)}
          </th>
          <td className="px-4 py-3">{item.firstname + ' ' + item.lastname}</td>
          <td className="px-4 py-3">{item.address}</td>
          <td className="px-4 py-3">{item.phone}</td>
          <td className="px-4 py-3">{formattedDate}</td>
          <td className="text-center px-4 py-3">
            <Dropdown
              items={['Pending', 'Shipped', 'Delivered', 'Canceled']}
              selectedProp={selected}
              setSelectedProp={setSelected}
            />
          </td>
        </tr>
      </>
    </>
  );
};

export default OrderRow;
