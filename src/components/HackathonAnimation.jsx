import Lottie from 'lottie-react';
import animationData from '../assets/Team.json';

export default function Hackathon() {
    return (
        <div className="hackathon-animation" aria-label="Hackathon animation">
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
}
