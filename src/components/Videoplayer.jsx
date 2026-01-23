import { useRef } from "react";
import { useState } from "react";

function Videoplayer() {
    const [playing, setPlaying] = useState(false);
    const videoRef = useRef(null);
  
    async function handlePlay() {
      const video = videoRef.current;
      console.log(video.paused);
  
      try {
        video.paused ? await video.play() : video.pause();
      } catch (error) {
        console.error("playback failed", error);
      }
    }
  
    function toggleFullScreen() {
      const video = videoRef.current;
      console.log("DBBBB");
      if (!document.fullscreenElement) {
        video.requestFullscreen();
      } else {
        document.exitFullscreen();
      }
    }
  return (
    <div className={`img-box ${playing ? "playing" : ""}`}>
      <video
        preload="metadata"
        poster="./Foysol ss.jpg"
        id="video"
        onPlay={() => setPlaying(true)} 
        onPause={() => setPlaying(false)}
        ref={videoRef}
        onDoubleClick={toggleFullScreen}
      >
        <source src="./Foysol.mp4" type="video/mp4" />r
      </video>

      {!playing && (
        <div className="overlay" onClick={handlePlay}>
          <img src="./Vector (1).png" alt="" />
        </div>
      )}
    </div>
  );
}

export default Videoplayer;
