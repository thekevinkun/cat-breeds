"use client"

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useMediaQuery } from "react-responsive";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

import { DonutCursor } from "@/components";

import { cardTitleVariants } from "@/lib/motion";
import { slugify } from "@/lib/helpers";

const MotionDiv = motion.div;
const MotionLink = motion.create(Link);

const ContentCard = ({name, poster, bgColor}) => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [isClicked, setIsClicked] = useState(false);
  const [showDonutCursor, setShowDonutCursor] = useState(false);
  const router = useRouter();

  const handleClick = useCallback((e) => {
    if (isMobile) {
      e.preventDefault();
      setIsClicked(true);

      setTimeout(() => {
        setIsClicked(false); 
      }, 1000);

      setTimeout(() => {
        router.push(`/cats/${slugify(name)}`);
      }, 1200);
    }
  }, [isMobile, name, router])

  return (
    <>
      <DonutCursor isVisible={showDonutCursor}/>

      <MotionLink
        href={`/cats/${slugify(name)}`}
        whileHover={!isMobile ? "hover" : undefined}
        initial="hidden"
        style={{background: bgColor, pointerEvents: isClicked ? "none" : "auto"}} 
        className="content-card"
        onClick={handleClick}
        onMouseEnter={() => setShowDonutCursor(true)}
        onMouseLeave={() => setShowDonutCursor(false)}
      >
        <div className="card_image-wrapper">
          <Image 
            src={poster}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="card_image"
          />
        </div>

        <div className="card_overlay"/>

        {isMobile ? (
          <MotionDiv
            key="mobile"
            variants={cardTitleVariants}
            initial="hidden"
            animate={isClicked ? "hover" : "hidden"}
            style={{ 
              background: `linear-gradient(to top, rgba(0, 0, 0, 0.6), ${bgColor}20, transparent)`, 
              pointerEvents: isClicked ? "none" : "auto" 
            }}
            className="card_title"
          >
            <h2 className="text-content">{name}</h2>
          </MotionDiv>
        ) : (
          <MotionDiv
            key="desktop"
            variants={cardTitleVariants}
            style={{ background: `linear-gradient(to top, rgba(0, 0, 0, 0.6), ${bgColor}20, transparent)` }}
            className="card_title"
          >
            <h2 className="text-content">{name}</h2>
          </MotionDiv>
        )}
      </MotionLink>
    </>
  )
}

export default ContentCard;