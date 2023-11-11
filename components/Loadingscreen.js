// "use client";
// // LoadingScreen.js
// import React, { useEffect, useState } from 'react';

// const LoadingScreen = () => {
//   const [timer, setTimer] = useState(0);

//   useEffect(() => {
//     // Simulate loading with a timer
//     const interval = setInterval(() => {
//       // Increase the timer value
//       setTimer((prevTimer) => (prevTimer < 100 ? prevTimer + 1 : prevTimer));
//     }, 50); // Adjust the interval based on your needs

//     // Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-blue-400 z-10">
//       <div className="relative w-full h-4 bg-white rounded-full overflow-hidden mb-4">
//         <div
//           className="absolute top-0 left-0 h-full bg-gradient-to-r from-black-500 to-black-100"
//           style={{ width: `${timer}%` }}
//         ></div>
//       </div>
//       <div className="text-white text-9xl absolute z-10">{timer}</div>
//     </div>
//   );
// };

// export default LoadingScreen;


// LoadingScreen.js
import React from 'react';

const LoadingScreen = ({ percentage }) => {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center bg-blue-400 z-10">
      <div className="relative w-full h-4 bg-white rounded-full overflow-hidden mb-4">
        <div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-black-500 to-black-100"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-white text-9xl absolute z-10">{percentage}%</div>
    </div>
  );
};

export default LoadingScreen;
