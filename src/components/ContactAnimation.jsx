import Lottie from 'lottie-react';
import animationData from '../animations/Contact.json';

export default function ContactAnimation() {
    return (
        <div>
            <Lottie animationData={animationData} loop={true} />
        </div>
    );
}
