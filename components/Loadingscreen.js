"use client";
import React from 'react';

const LoadingScreen = ({ percentage }) => {
  const gradientStyle = {
    background: `-webkit-linear-gradient(45deg, white, pink, violet)`,
    WebkitBackgroundClip: 'text',
    color: 'transparent',
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-gray-900 z-10">
        <div className='text-white text-2xl fixed left-4 top-10 ' style={gradientStyle}>
          va<span style={{ color: 'white' }}>:LABS</span>
        </div>
        <div className="flex justify-between w-full mb-8">
          <div className="text-4xl ml-4" style={gradientStyle}>
            You think
          </div>
          <div className="text-4xl mr-4" style={gradientStyle}>
            We create
          </div>
        </div>
        <div className="relative w-full h-4 bg-white rounded-full overflow-hidden mb-4 drop-shadow-2xl">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-white to-pink-500 via-purple-500"
            style={{ width: `${ percentage}%` }}
          ></div>
        </div>
        <div className="text-white text-9xl absolute z-10">{percentage}%</div>
      </div>
      <style>
        {`
          @media screen and (max-width: 768px) {
           
            .text-2xl {
              font-size: 1.5rem; 
            }
            .text-4xl {
              font-size: 2rem; 
            }
            .text-9xl {
              font-size: 4rem;  
            }
            .mb-8 {
              margin-bottom: 1rem; 
            }
            .ml-4, .mr-4 {
              margin-left: 1rem; 
              margin-right: 1rem; 
            }
            
          }
        `}
      </style>
    </>
  );
};

export default LoadingScreen;
