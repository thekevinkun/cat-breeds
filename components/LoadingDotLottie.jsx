import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "@/public/animations/loading-lottie.json";

const LoadingDotLottie = () => {
  return (
    <div 
        style={{
            width: "100%",
            height: "100svh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}
    >
        <div style={{width: "125px", height: "125px"}}>
            <Lottie animationData={loadingAnimation} loop autoplay />
        </div>
    </div>
  );
};

export default LoadingDotLottie;