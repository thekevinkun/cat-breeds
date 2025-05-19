"use client"

import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import { LoadingDotLottie, PrevNextPage } from "@/components";
import { Header, HeroDetail, ContentDetail, Footer } from "@/sections";

const DetailClient = ({ cat, prevCat, nextCat }) => {
  const isMobile = useMediaQuery({ query: "(max-width: 992px)" });
  const [zIdxHero, setZIdxHero] = useState(2);
  const [zIdxFooter, setZIdxFooter] = useState(1);
  const [showContent, setShowContent] = useState(false); 

  useEffect(() => {
    // Show actual content after 5s
    const timeout = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (isMobile) return;
      
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

  if (!showContent) {
    return <LoadingDotLottie />;
  }

  return (
    <>
        <Header />
        <HeroDetail cat={cat} zIdx={zIdxHero}/>
        <main id="main" className="main-detail">
            <div id="main-sentinel" />
            <ContentDetail cat={cat}/>
            <PrevNextPage prevCat={prevCat} nextCat={nextCat}/>
        </main>
        <Footer zIdx={zIdxFooter}/>
    </>
  )
}

export default DetailClient;