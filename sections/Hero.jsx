"use client"

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { heroVideos } from "@/data/videos";

const Hero = ({ onVideoReady }) => {
  const [playedVideo, setPlayedVideo] = useState(null);
  const { ref, inView } = useInView();
  const videoRef = useRef(null);

  // Pick a random video once mount
  useEffect(() => {
    if (heroVideos.length > 0) {
      const randomIndex = Math.floor(Math.random() * heroVideos.length);

      setTimeout(() => {
        setPlayedVideo(heroVideos[randomIndex]);
      }, 3000);
    }
  }, [])

  useEffect(() => {
    if (!playedVideo || !videoRef.current) return;

    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView, playedVideo]);

  return (
    <section id="home" className="hero">
      {playedVideo &&
      <>
        <div ref={ref} className="hero__video-wrapper"> 
          <video
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            controls={false}
            onCanPlay={onVideoReady}
            className="hero-video"
          >
            <source src={playedVideo.videoUrl} type="video/mp4"/>
          </video>
        </div>
        
        <div className="hero-overlay"/>
      </>
      }
    </section>
  )
}

export default Hero;