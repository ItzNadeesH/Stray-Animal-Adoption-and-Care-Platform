import React, { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useSelector } from 'react-redux';
import Layout from './Layout';
import Sidebar from '../components/dashboard/admin/Sidebar';
import ProductList from '../components/dashboard/admin/ProductList';
import AddProductForm from '../components/dashboard/admin/AddProductForm';
import Settings from '../components/dashboard/admin/Settings';
import UsersList from '../components/dashboard/admin/UsersList';
import DashboardHome from '../components/dashboard/admin/DashboardHome';
import MyOrders from '../components/dashboard/user/MyOrders';

const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState('');
  const [resetAnimation, setResetAnimation] = useState(false);
  const role = useSelector((state) => state.userAuth.user.role);

  useEffect(() => {
    if (role === 'Admin') {
      setSelectedTab('Dashboard');
    } else if (role === 'User') {
      setSelectedTab('My Orders');
    }
  }, [role]);

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

  const content =
    selectedTab === 'Settings' ? (
      <Settings />
    ) : selectedTab === 'Add Product' ? (
      <AddProductForm onSelect={handleTabSelect} />
    ) : selectedTab === 'Products' ? (
      <ProductList onSelect={handleTabSelect} />
    ) : selectedTab === 'Users' ? (
      <UsersList />
    ) : selectedTab === 'My Orders' ? (
      <MyOrders />
    ) : (
      <DashboardHome />
    );

  return (
    <>
      <Layout>
        <div
          className="bg-[#f6f6f6] min-h-screen overflow-hidden border-t border-[#e6e6e6] mt-[-1px]"
          style={{ minHeight: 'calc(100vh - 80px)' }}
        >
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
      </Layout>
    </>
  );
};

export default Dashboard;
