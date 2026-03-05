import ProjectCard from './ProjectCard.jsx';
import "../styles/ProjectList.css";

export default function ProjectList() {
    const projects = [
        {
            id: "planx",
            title: "PlanX",
            src: "/planx_project_banner.png",
            description: "Autonomous project architect powered by multi‑agent orchestration, turning high‑level ideas into structured, end‑to‑end software plans. Allows students and developers to automate their daily repetitive tasks.",
            codeUrl: "https://github.com/Yash-Atkari/planx-agent",
            projectUrl: "https://planx-agent.netlify.app/",
            category: "AI / Agentic",
            date: "2026"
        },
        {
            id: "aarogyam",
            title: "Aarogyam",
            src: "/aarogyam_project_banner.webp",
            description: "Secure healthcare data management system for institutions, built to protect sensitive student records with strict access control and scalable infrastructure.",
            codeUrl: "https://github.com/Yash-Atkari/Aarogyam",
            projectUrl: "https://aarogyam-v6ig.onrender.com/",
            category: "Healthcare",
            date: "2025"
        },
        {
            id: "wanderlust",
            title: "Wanderlust",
            src: "/wanderlust_project_banner.png",
            description: "Full‑stack travel stay platform showcasing solid CRUD flows, RESTful API design, and polished UI/UX using Bootstrap.",
            codeUrl: "https://github.com/Yash-Atkari/Wanderlust",
            projectUrl: "https://wanderlust-cl02.onrender.com/listings",
            category: "Travel",
            date: "2024"
        },
        // {
        //     id: "vibesync",
        //     title: "VibeSync",
        //     src: "/vibesync_project_banner.webp",
        //     description: "Simple mental‑health chatbot integrated with the Together API to provide conversational support in a calm, focused interface.",
        //     codeUrl: "https://github.com/Yash-Atkari/VibeSync",
        //     projectUrl: "https://vibesync-ao2c.onrender.com/chatbot",
        //     category: "Wellness",
        //     date: "2025"
        // },
        {
            id: "portfolio",
            title: "Portfolio",
            src: "/portfolio_project_banner.png",
            description: "Developer portfolio built with React and Bootstrap, designed to highlight projects, skills, and experience in a clean, performance‑focused layout.",
            codeUrl: "https://github.com/Yash-Atkari/Yash-Atkari-Portfolio.git",
            projectUrl: "https://yashatkari.netlify.app/",
            category: "Portfolio",
            date: "2025"
        }
    ];

    return (
        <div className="container py-4 text-white">
            <header className="mb-4">
                <h2 className="h2 fw-bold mt-0">Projects</h2>
            </header>
            <div className="row project-list">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        src={project.src}
                        description={project.description}
                        codeUrl={project.codeUrl}
                        projectUrl={project.projectUrl}
                        category={project.category}
                        date={project.date}
                    />
                ))}
            </div>
        </div>
    );
}
