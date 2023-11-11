"use client"
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/Loadingscreen';
import Spline from "@splinetool/react-spline";


const splineURLs = [
  "https://prod.spline.design/Gy2lrYdDiCKyuqRf/scene.splinecode",
  "https://prod.spline.design/Jkhswu59xqkGtptb/scene.splinecode",
  "https://prod.spline.design/IVIqXQvsajU0LdRE/scene.splinecode",
  "https://prod.spline.design/Gy2lrYdDiCKyuqRf/scene.splinecode",
  "https://prod.spline.design/A2uUhI48PQ6qiNP2/scene.splinecode"
];

export default function Home() {
  const [loadedCount, setLoadedCount] = useState(0);

  const handleLoad = () => {
    setLoadedCount((prevCount) => prevCount + 1);
  };

  const totalSplineElements = splineURLs.length;
  const loadingPercentage = (loadedCount / totalSplineElements) * 100;

  useEffect(() => {
    if (loadedCount === totalSplineElements) {
      setLoading(false);
    }
  }, [loadedCount]);

  const [loading, setLoading] = useState(true);

  return (
    <main className="flex min-h-screen flex-col p-4 md:p-24">  {/* flex min-h-screen flex-col p-24 */}
      <div>Hello</div>
      {loading && <LoadingScreen percentage={loadingPercentage} />}

      {splineURLs.map((url, index) => (
        <div key={index} className='mb-4 md:mb-8 lg:mb-12 xl:mb-16'>
          <Spline
            onLoad={handleLoad}
            scene={url}
            className='w-full h-full md:w-96 lg:w-2/3 xl:w-3/4 mx-auto'
          />
        </div>
      ))}
    </main>
  );
}


// "use client"
// import React, { useState, useEffect } from 'react';
// import LoadingScreen from '../components/Loadingscreen';
// import Spline from "@splinetool/react-spline";

// const splineURLs = [
//   "https://prod.spline.design/Gy2lrYdDiCKyuqRf/scene.splinecode",
//   "https://prod.spline.design/Jkhswu59xqkGtptb/scene.splinecode",
//   "https://prod.spline.design/IVIqXQvsajU0LdRE/scene.splinecode",
//   "https://prod.spline.design/Gy2lrYdDiCKyuqRf/scene.splinecode",
//   "https://prod.spline.design/A2uUhI48PQ6qiNP2/scene.splinecode"
// ];

// export default function Home() {
//   const [loadedCount, setLoadedCount] = useState(0);
//   const [loading, setLoading] = useState(true);

//   const handleLoad = () => {
//     setLoadedCount((prevCount) => prevCount + 1);
//   };

//   const totalSplineElements = splineURLs.length;
//   const loadingPercentage = (loadedCount / totalSplineElements) * 100;

//   useEffect(() => {
//     if (loadedCount === totalSplineElements) {
//       setLoading(false);
//     }
//   }, [loadedCount]);

//   return (
//     <main className="flex min-h-screen flex-col p-4 md:p-24"> {/* Adjusted padding for larger screens */}
//       <div className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl mb-4">Hello</div> {/* Responsive text size */}
//       {loading && <LoadingScreen percentage={loadingPercentage} />}

//       {splineURLs.map((url, index) => (
//         <div key={index} className="mb-4 md:mb-8 lg:mb-12 xl:mb-16"> {/* Adjusted margin for larger screens */}
//           <Spline
//             onLoad={handleLoad}
//             scene={url}
//             className="w-full h-full md:w-96 lg:w-2/3 xl:w-3/4 mx-auto"  
//           />
//         </div>
//       ))}
//     </main>
//   );
// }

