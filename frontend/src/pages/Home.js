import Layout from './Layout';
import Loader from '../utils/Loader';

const Home = () => {
  return (
    <>
      <Loader>
        <Layout></Layout>
      </Loader>
    </>
  );
};

export default Home;
