"use client"

import { useEffect, useState, useRef } from "react";

import { LoadingDotLottie, PrevNextPage } from "@/components";
import { Header, HeroDetail, ContentDetail, Footer } from "@/sections";

const DetailClient = ({ cat, prevCat, nextCat }) => {
  const [zIdxHero, setZIdxHero] = useState(2);
  const [zIdxFooter, setZIdxFooter] = useState(1);

  const heroRef = useRef(null);
  const mainRef = useRef(null);
  const [heroHeight, setHeroHeight] = useState(0);

  useEffect(() => {
    const adjustMainOffset = () => {
      if (heroRef.current) {
        const height = heroRef.current.getBoundingClientRect().height;
        setHeroHeight(height);
      }
    };

    window.addEventListener("resize", adjustMainOffset);
    return () => window.removeEventListener("resize", adjustMainOffset);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      if (scrollY >= 1100) {
        setZIdxHero(1);
        setZIdxFooter(2);
      } else if (scrollY < 1100) {
        setZIdxFooter(1);
        setZIdxHero(2);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
        {heroHeight > 0 &&
          <Header />
        }

        <HeroDetail 
          heroRef={heroRef} 
          cat={cat} 
          zIdx={zIdxHero}
          onImageLoad={() => {
            if (heroRef.current) {
              const height = heroRef.current.getBoundingClientRect().height;
              setHeroHeight(height);

              // force mobile Safari repaint
              requestAnimationFrame(() => {
                window.scrollBy(0, 1);
                window.scrollBy(0, -1);
              });
            }
          }}
        />

        {heroHeight > 0 &&
        <>
          <main 
            ref={mainRef}
            id="main-detail" 
            className="main-detail"
            style={{ 
              marginTop: `${heroHeight-1}px`,
              marginBottom: "420px"
            }}
          >
              <div id="main-sentinel" />
              <ContentDetail cat={cat}/>
              <PrevNextPage prevCat={prevCat} nextCat={nextCat}/>
          </main>
          <Footer zIdx={zIdxFooter}/>
        </>
        }

        <LoadingDotLottie isReady={heroHeight > 0}/>
    </>
  )
}

export default DetailClient;