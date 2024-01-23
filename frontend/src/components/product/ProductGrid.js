import ProductItem from './ProductItem';
import { useProducts } from '../../hooks/useProducts';
import ProductItemSkelton from './ProductItemSkelton';

const ProductGrid = () => {
  const { data, isLoading, error } = useProducts();

  return (
    <>
      <div className="mt-8 max-w-screen-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center border-t border-[#e6e6e6] mx-auto xl:mt-[78px]">
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
          data &&
          data.map((item) => <ProductItem key={item._id} product={item} />)
        )}
        {error && <div className="error">{error}</div>}
      </div>
    </>
  );
};

export default ProductGrid;
