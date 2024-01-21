import Navbar from '../components/navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="animate-fadeOut">{children}</div>
    </>
  );
};

export default Layout;
