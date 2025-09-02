import CertificateCard from './CertificateCard';

export default function CertificateList() {
    const certificates = [
        {
            title: "Data Structures and Algorithm Certificate",
            image: "/dsa_certificate.webp",
            description: "Successfully completed the Alpha course on Data Structures and Algorithms with Java from Apna College.",
            viewLink: "/dsa_certificate.webp"
        },
        {
            title: "Full Stack Web Development Certificate",
            image: "/web_development_completion_certificate.jpg",
            description: "Successfully completed the Delta (Full Stack Web Development) course from Apna College under the mentorship of Shradha Khapra.",
            viewLink: "/web_development_completion_certificate.jpg"
        },
        {
            title: "Python 3.4.3 Certificate",
            image: "/python3.4.3_certificate.webp",
            description: "Successfully completed Python 3.4.3 training and passed the online exam conducted by IIT Bombay's Spoken Tutorial Project at G H Raisoni College of Engineering, Nagpur.",
            viewLink: "/python3.4.3_certificate.webp"
        },
        {
            title: "Advanced C++ Training Certificate",
            image: "/advance_cpp_spoken_tutorial_certificate.jpg",
            description: "Successfully completed Advanced C++ Training with 100% score organised under Spoken Tutorial, IIT Bombay.",
            viewLink: "/advance_cpp_spoken_tutorial_certificate.jpg"
        },
        {
            title: "Speakathon Certificate",
            image: "/speakathon_certificate.webp",
            description: "Participated as a Speaker in India's Largest Speakathon for Limca Book of Records at GHRCE, Nagpur.",
            viewLink: "/speakathon_certificate.webp"
        },
        {
            title: "CodeForge'25 Certificate",
            image: "/codeforge25_certificate_of_participation.jpg",
            description: "Participated in CodeForge'25 Hackathon organised by WebForge as part of Team glitchX.",
            viewLink: "/codeforge25_certificate_of_participation.jpg"
        },
        {
            title: "Hacksagon 2025 Certificate",
            image: "/iiitm_certificate_of_participation.jpg",
            description: "Participated in Hacksagon 2025 organised by ABV-IIITM, Gwalior as part of Team glitchX.",
            viewLink: "/iiitm_certificate_of_participation.jpg"
        },
        {
            title: "Adobe India Hackathon Certificate",
            image: "/adobe_india_hackathon_participation.jpg",
            description: "Participated in Round 1 - Online MCQ Assessment + Coding of Adobe India Hackathon organised by Adobe as part of Team Hugs4Bugs.",
            viewLink: "/adobe_india_hackathon_participation.jpg"
        }
    ];

    return (
        <div className="row px-3">
            {certificates.map((cert, idx) => (
                <CertificateCard
                    key={idx}
                    title={cert.title}
                    image={cert.image}
                    description={cert.description}
                    viewLink={cert.viewLink}
                />
            ))}
        </div>
    );
}
