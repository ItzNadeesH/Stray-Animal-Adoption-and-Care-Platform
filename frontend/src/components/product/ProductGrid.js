import { useEffect, useState } from 'react';
import axios from 'axios';
import ProductItem from './ProductItem';

const ProductGrid = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };

      const res = await axios.get('/api/products', config);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="mt-8 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center border-t border-[#e6e6e6] mx-auto xl:mt-[78px]">
        {data &&
          data.map((item) => <ProductItem key={item._id} product={item} />)}
      </div>
    </>
  );
};

export default ProductGrid;
