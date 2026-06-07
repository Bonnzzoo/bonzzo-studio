"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Disable scrolling while preloader is active
    document.body.style.overflow = "hidden";
    
    // Simulate loading time (you can adjust this or tie it to actual asset loading)
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.style.overflow = "";
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader ${isLoading ? "" : "preloader-hidden"}`}>
      <div className="preloader-content">
        <h1 className="preloader-text">BONZZO</h1>
      </div>
    </div>
  );
}
