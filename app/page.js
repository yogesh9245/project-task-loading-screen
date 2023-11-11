// import LoadingScreen from '../components/Loadingscreen';
// export default function Home() {
  
//   return (
//     <main className="flex min-h-screen flex-col p-24">
//       <div>Hello</div>
//       <LoadingScreen/>
//     </main>
//   )
// }

// "use client"
// import React,{useState} from 'react';
// import LoadingScreen from '../components/Loadingscreen';
// import Spline from "@splinetool/react-spline";

// export default function Home() {
//   const [loading, setLoading] = useState(true)
//   return (
//     <main className="flex min-h-screen flex-col p-24">
//       <div>Hello</div>
//       {loading && <LoadingScreen /> }

//       <div>
//         <Spline 
//         onLoad={()=>setLoading(false)}
//         scene="https://prod.spline.design/Gy2lrYdDiCKyuqRf/scene.splinecode" />
//       </div>
//       <div>
//         <Spline
//         onLoad={()=>setLoading(false)}
//          scene="https://prod.spline.design/Jkhswu59xqkGtptb/scene.splinecode" />
//       </div>
//       <div>
//         <Spline
//         onLoad={()=>setLoading(false)}
//          scene="https://prod.spline.design/IVIqXQvsajU0LdRE/scene.splinecode" />
//       </div>
//       <div>
//         <Spline
//         onLoad={()=>setLoading(false)}
//          scene="https://prod.spline.design/Gy2lrYdDiCKyuqRf/scene.splinecode" />
//       </div>
//       <div>
//         <Spline
//         onLoad={()=>setLoading(false)}
//          scene="https://prod.spline.design/A2uUhI48PQ6qiNP2/scene.splinecode" />
//       </div>
//     </main>
//   )
// }


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
    <main className="flex min-h-screen flex-col p-24">
      <div>Hello</div>
      {loading && <LoadingScreen percentage={loadingPercentage} />}

      {splineURLs.map((url, index) => (
        <div key={index}>
          <Spline
            onLoad={handleLoad}
            scene={url}
          />
        </div>
      ))}
    </main>
  );
}

