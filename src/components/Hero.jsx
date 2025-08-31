import Lottie from "lottie-react";
import animationData from "../animations/Developer.json";

export default function Hero() {
  return (
      <div>
        <Lottie animationData={animationData} loop={true} />
      </div>  
  );
}
