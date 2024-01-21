import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import Layout from './Layout';
import { MdPets } from 'react-icons/md';

const LoadingScreen = () => {
  return (
    <Layout>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="relative">
          <TailSpin
            height="100"
            width="100"
            color="#002842"
            outerCircleColor="#002842"
            innerCircleColor="#002842"
            barColor="#ffffff"
            ariaLabel="TailSpin"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
          />
          <MdPets
            color="#002842"
            size={56}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
        </div>
      </div>
    </Layout>
  );
};

export default LoadingScreen;
