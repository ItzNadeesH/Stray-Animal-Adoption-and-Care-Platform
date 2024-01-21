import { Link } from 'react-router-dom';
import Layout from './Layout';

const Home = () => {
  return (
    <>
      <Layout>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
      </Layout>
    </>
  );
};

export default Home;
