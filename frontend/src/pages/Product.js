import Layout from './Layout';
import Loader from '../utils/Loader';

// Components
import ProductPreview from '../components/product/ProductPreview';

const Product = () => {
  return (
    <>
      <Loader>
        <Layout>
          <ProductPreview />
        </Layout>
      </Loader>
    </>
  );
};

export default Product;
