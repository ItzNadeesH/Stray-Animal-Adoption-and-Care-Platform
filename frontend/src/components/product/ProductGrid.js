import ProductItem from './ProductItem';
import { useProducts } from '../../hooks/useProducts';
import ProductItemSkelton from './ProductItemSkelton';
import Searchbar from '../common/Searchbar';
import { useEffect, useState } from 'react';

const ProductGrid = ({ petType, category }) => {
  const { data, isLoading, error } = useProducts();
  const [results, setResults] = useState(data);

  useEffect(() => {
    setResults(data);
  }, [data]);

  useEffect(() => {
    if (data) {
      setResults(
        data.filter(
          (item) =>
            (petType === 'All' || item.petType === petType) &&
            (category === 'All' || item.category === category)
        )
      );
    }
  }, [data, category, petType]);

  return (
    <>
      <div>
        <div className="mt-[32px] max-w-[348px] px-6 mx-auto xl:mx-0">
          <Searchbar
            data={data}
            setResult={setResults}
            filters={{ petType, category }}
          />
        </div>
        <div className="mt-2 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center border-t border-[#e6e6e6] mx-auto">
          {isLoading ? (
            <>
              <ProductItemSkelton />
              <ProductItemSkelton />
              <ProductItemSkelton />
              <ProductItemSkelton />
              <ProductItemSkelton />
              <ProductItemSkelton />
            </>
          ) : (
            results &&
            results.map((item) => <ProductItem key={item._id} product={item} />)
          )}
          {error && <div className="error">{error}</div>}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;
