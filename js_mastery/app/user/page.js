// pages/index.js
import React from 'react';
import User from '@/components/user';

export const metadata = {
  title:"User Page"
}

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row items-center justify-center bg-gray-100">
      <User />
    </div>
  );
};

export default Home;
