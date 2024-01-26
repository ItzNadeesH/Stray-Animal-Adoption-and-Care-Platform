import Layout from './Layout';
import Loader from '../utils/Loader';

// Components
import ProductGrid from '../components/product/ProductGrid';
import ProductFilter from '../components/product/ProductFilter';

const Store = () => {
  return (
    <>
      <Loader>
        <Layout>
          <div className="max-w-screen-xl mx-auto xl:flex mt-4">
            <ProductFilter />
            <ProductGrid />
          </div>
        </Layout>
      </Loader>
    </>
  );
};

export default Store;
