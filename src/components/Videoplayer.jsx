import { useEffect } from "react";
import { useRef } from "react";
import { useState } from "react";

function Videoplayer() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !video.paused) {
          video.pause();
        }
      },
      {
        threshold: 0.3,
      }
    );


    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="img-box">
      <video preload="none" controls poster="./Foysol ss.jpg" id="video" ref={videoRef}>
        <source src="./Foysol.mp4" type="video/mp4" />r
      </video>
    </div>
  );
}

export default Videoplayer;
