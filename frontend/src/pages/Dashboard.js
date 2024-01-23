import React, { useState } from 'react';
import Sidebar from '../components/Admin/Sidebar';
import AddProductForm from '../components/Admin/AddProductForm';
import { useSpring, animated } from '@react-spring/web';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const [resetAnimation, setResetAnimation] = useState(false);

  const springs = useSpring({
    from: { x: 100, opacity: 0 },
    to: { x: 0, opacity: 1 },
    reset: resetAnimation,
    onRest: () => setResetAnimation(false),
  });

  let content;
  switch (selectedTab) {
    case 'Products':
      content = <AddProductForm />;
      break;
    case 'Users':
      content = <div>Users</div>;
      break;
    default:
      content = <div>Dashboard</div>;
      break;
  }

  const handleTabSelect = (tab) => {
    setResetAnimation(true);
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="bg-[#f6f6f6] min-h-screen overflow-hidden">
        <Sidebar selected={selectedTab} onSelect={handleTabSelect} />
        <div className="ml-[270px]">
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
