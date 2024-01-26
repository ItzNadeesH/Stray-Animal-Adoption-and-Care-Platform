import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import Sidebar from '../components/dashboard/admin/Sidebar';
import ProductList from '../components/dashboard/admin/ProductList';
import AddProductForm from '../components/dashboard/admin/AddProductForm';
import Settings from '../components/dashboard/admin/Settings';
import UsersList from '../components/dashboard/admin/UsersList';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('Dashboard');
  const [resetAnimation, setResetAnimation] = useState(false);

  const springs = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    reset: resetAnimation,
    onRest: () => setResetAnimation(false),
  });

  const handleTabSelect = (tab) => {
    setResetAnimation(true);
    setSelectedTab(tab);
  };

  let content;
  switch (selectedTab) {
    case 'Settings':
      content = <Settings />;
      break;
    case 'Add Product':
      content = <AddProductForm onSelect={handleTabSelect} />;
      break;
    case 'Products':
      content = <ProductList onSelect={handleTabSelect} />;
      break;
    case 'Users':
      content = <UsersList />;
      break;
    default:
      content = <div>Dashboard</div>;
      break;
  }

  return (
    <>
      <div className="bg-[#f6f6f6] min-h-screen overflow-hidden">
        <Sidebar selected={selectedTab} onSelect={handleTabSelect} />
        <div className="md:ml-[270px]">
          <animated.div
            style={{
              ...springs,
            }}
          >
            {content}
          </animated.div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
