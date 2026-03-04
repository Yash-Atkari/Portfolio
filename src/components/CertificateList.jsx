import CertificateCard from './CertificateCard';

export default function CertificateList() {
    const certificates = [
        {
            title: "Data Structures and Algorithm Certificate",
            image: "/DSA_Certificate.jpg",
            description: "Successfully completed the Alpha course on Data Structures and Algorithms with Java from Apna College.",
            viewLink: "/DSA_Certificate.jpg"
        },
        {
            title: "Full Stack Web Development Certificate",
            image: "/web_development_completion_certificate.jpg",
            description: "Successfully completed the Delta (Full Stack Web Development) course from Apna College under the mentorship of Shradha Khapra.",
            viewLink: "/web_development_completion_certificate.jpg"
        },
        {
            title: "Advanced C++ Training Certificate",
            image: "/advance_cpp_spoken_tutorial_certificate.jpg",
            description: "Successfully completed Advanced C++ Training with 100% score organised under Spoken Tutorial, IIT Bombay.",
            viewLink: "/advance_cpp_spoken_tutorial_certificate.jpg"
        },
        {
            "title": "5-Day AI Agents Intensive Course",
            "image": "/5-Day_AI_Agents_Intensive_Course.png",
            "description": "Earned a specialized badge from Google & Kaggle for mastering the orchestration of AI Agents and building autonomous agentic workflows.",
            "viewLink": "/5-Day_AI_Agents_Intensive_Course.png"
        },
        {
            "title": "AI Masterclass 2.0 Certification",
            "image": "/AI_Masterclass_2.0_Certificate_page-0001.jpg",
            "description": "Mastered advanced prompt engineering using CREATE, PROFILE, and PICTURE formulas. Proficient in a multimodal stack of 40+ tools including Midjourney, Eleven Labs, Google Veo 3.1, and Framer for high-impact AI-driven development.",
            "viewLink": "/AI_Masterclass_2.0_Certificate_page-0001.jpg"
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
