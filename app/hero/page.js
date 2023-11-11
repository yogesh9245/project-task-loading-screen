"use client";
import React,{useState} from "react";
import Spline from "@splinetool/react-spline";
const page = () => {
  const [loading, setLoading] = useState(true)
  return (  
    <div className=" flex min-h-screen flex-col p-24">
      hero
      <div>
        <Spline 
        onLoad={()=>setLoading(false)}
        scene="https://prod.spline.design/Gy2lrYdDiCKyuqRf/scene.splinecode" />
      </div>
      <div>
        <Spline
        onLoad={()=>setLoading(false)}
         scene="https://prod.spline.design/Jkhswu59xqkGtptb/scene.splinecode" />
      </div>
      <div>
        <Spline
        onLoad={()=>setLoading(false)}
         scene="https://prod.spline.design/IVIqXQvsajU0LdRE/scene.splinecode" />
      </div>
      <div>
        <Spline
        onLoad={()=>setLoading(false)}
         scene="https://prod.spline.design/Gy2lrYdDiCKyuqRf/scene.splinecode" />
      </div>
      <div>
        <Spline
        onLoad={()=>setLoading(false)}
         scene="https://prod.spline.design/A2uUhI48PQ6qiNP2/scene.splinecode" />
      </div>

    </div>
  );
};

export default page;
