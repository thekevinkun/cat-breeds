"use client"

import { useEffect, useState } from "react";

import { LoadingDotLottie } from "@/components";
import { Header, Hero, ContentList, Footer } from "@/sections";

const HomeClient = () => {
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    if (!videoReady)
      document.body.classList.add("modal-open");
    else
      document.body.classList.remove("modal-open");
  }, [videoReady]);

  return (
    <>
      {/* Page content (rendered right away) */}
      {videoReady &&
        <Header />
      }

      <Hero onVideoReady={() => setVideoReady(true)} />

      {videoReady &&
      <>
        <main id="main">
          <div id="main-sentinel" />
          <ContentList />
        </main>
        <Footer />
      </>}  

      {/* Loading screen: rendered on top and fades out when ready */}
      <LoadingDotLottie isReady={videoReady}/>
    </>
  )
}

export default HomeClient;