"use client"
import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/Loadingscreen';
import Spline from "@splinetool/react-spline";


const splineURLs = [  
  "https://prod.spline.design/IVIqXQvsajU0LdRE/scene.splinecode",
  "https://prod.spline.design/Jkhswu59xqkGtptb/scene.splinecode",
  // "https://prod.spline.design/Jkhswu59xqkGtptb/scene.splinecode",
  "https://prod.spline.design/IVIqXQvsajU0LdRE/scene.splinecode",
  
  "https://prod.spline.design/Jkhswu59xqkGtptb/scene.splinecode",

  "https://prod.spline.design/OaWug0nRJxrjRKMz/scene.splinecode"
];

export default function Home() {
  const [loadedCount, setLoadedCount] = useState(0);

  // const handleLoad = () => {
  //   setLoadedCount((prevCount) => prevCount + 1);
  // };
  const handleLoad = () => {
    setTimeout(() => {
      setLoadedCount((prevCount) => prevCount + 1);
    }, 200); // Adjust the delay as needed
  };
  

  const totalSplineElements = splineURLs.length;
  // const loadingPercentage = (loadedCount / totalSplineElements) * 100;
  // const loadingPercentage = Math.min((loadedCount / totalSplineElements) * 100, 100);

  const loadingPercentage = (loadedCount / totalSplineElements) * 100;


const cappedLoadingPercentage = loadingPercentage > 100 ? 100 : loadingPercentage;



  useEffect(() => {
    if (loadedCount === totalSplineElements) {
      setLoading(false);
    }
  }, [loadedCount]);

  const [loading, setLoading] = useState(true);

  return (
    <main className="flex min-h-screen flex-col p-4 md:p-24">  {/* flex min-h-screen flex-col p-24 */}
      <div>Hero Page</div>
      {/* {loading && <LoadingScreen percentage={loadingPercentage} />} */}
      {loading && <LoadingScreen percentage={cappedLoadingPercentage} backgroundImage="/backgroundimage.png"/>}
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


