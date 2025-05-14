"use client"

import { useEffect, useState } from "react";

const DonutCursor = ({ isVisible }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  if (!isVisible) return null

  return (
    <div
      style={{
        display: isVisible ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        pointerEvents: "none",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        background: "conic-gradient(red, orange, yellow, green, blue, indigo, violet, red)",
        maskImage: "radial-gradient(circle, transparent 55%, black 56%)",
        WebkitMaskImage: "radial-gradient(circle, transparent 55%, black 56%)",
        maskRepeat: "no-repeat",
        WebkitMaskRepeat: "no-repeat",
        maskSize: "100% 100%",
        WebkitMaskSize: "100% 100%",
        zIndex: 9999,
        transform: `translate(${mousePosition.x - 20}px, ${mousePosition.y - 20}px)`
      }}
    />
  )
}

export default DonutCursor;