import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/animations/loading-lottie.json";

const LoadingDotLottie = ({ videoReady }) => {
  return (
    <div 
        style={{
            position: "absolute",
            inset: "0",
            zIndex: "9999",
            background: "white",
            width: "100%",
            height: "100svh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: videoReady ? 0 : 1,
            pointerEvents: videoReady ? "none" : "all",
            transition: "opacity 0.5s ease",
        }}
    >
        <div style={{width: "125px", height: "125px"}}>
            <Lottie animationData={loadingAnimation} loop autoplay />
        </div>
    </div>
  );
};

export default LoadingDotLottie;