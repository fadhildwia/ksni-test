import React from 'react';

export const HomeSection = () => {
  return (
    <div id="home" className="w-full h-96 flex flex-col justify-center items-center pt-20">
      <h1 className="flex flex-col items-center md:text-7xl text-3xl font-bold text-center">
        <span>Hello Welcome to</span>
        <span className="bg-gradient-to-b from-blue-500 to-blue-900 inline-block text-transparent bg-clip-text">
          Online Shop
        </span>
      </h1>
      <p className="text-zinc-400 text-center mx-2 mt-5">
        Transform Your Space with Our Premium Products
      </p>
    </div>
  );
};
