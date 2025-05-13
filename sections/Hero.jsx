"use client"

import { useEffect, useState, useRef } from "react";
import { useInView } from "react-intersection-observer";

import { LoadingDotLottie } from "@/components";

import { heroVideos } from "@/data/videos";

const Hero = () => {
  const [playedVideo, setPlayedVideo] = useState(null);
  const [videoReady, setVideoReady] = useState(false);
  const { ref, inView } = useInView();
  const videoRef = useRef(null);

  // Pick a random video once mount
  useEffect(() => {
    if (heroVideos.length > 0) {
      const randomIndex = Math.floor(Math.random() * heroVideos.length);
      setPlayedVideo(heroVideos[randomIndex]);
    }
  }, [])

  // Play/Pause video inView of Hero
  useEffect(() => {
    if (!playedVideo || !videoRef.current) return;

    if (inView) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  }, [inView, playedVideo])

  return (
    <section id="home" className="hero">
      {playedVideo ?
      <>
        <div ref={ref} className="hero__video-wrapper"> 
          <video
            ref={videoRef}
            loop
            autoPlay
            muted
            playsInline
            controls={false}
            onCanPlay={() => setVideoReady(true)}
            className="hero-video"
          >
            <source src={playedVideo.videoUrl} type="video/mp4"/>
          </video>
        </div>
        
        {videoReady &&
          <div className="hero-overlay"/>
        }
      </>
      :
      <LoadingDotLottie />
      }
    </section>
  )
}

export default Hero;