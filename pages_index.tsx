import React from 'react';
import OmikujiIcon from '../components/OmikujiIcon';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">おみくじアイコン</h1>
      <div className="flex space-x-8">
        <div className="flex flex-col items-center">
          <OmikujiIcon size={192} />
          <p className="mt-2">192x192</p>
        </div>
        <div className="flex flex-col items-center">
          <OmikujiIcon size={512} />
          <p className="mt-2">512x512</p>
        </div>
      </div>
    </div>
  );
};

export default Home;

