import Project from './Project.jsx';

export default function ProjectList() {
    const projects = [
        {
            id: "aarogyam",
            title: "Aarogyam",
            src: "/aarogyam_image.webp",
            description: "A secure, cross-platform digital solution for managing student healthcare within educational institutions. Features include passport-based user authentication, student dashboards, automated leave documentation, and initial appointment booking. Built with EJS, Express.js, Node.js, and MongoDB, the system enhances accessibility, data security, and administrative efficiency.",
            codeUrl: "https://github.com/Yash-Atkari/Aarogyam",
            projectUrl: "https://aarogyam-hypg.onrender.com/",
            category: "Healthcare",
            date: "2025"
        },
        {
            id: "wanderlust",
            title: "Wanderlust",
            src: "/wanderlust_image.webp",
            description: "A full-stack Airbnb clone that allows users to explore and book stays across various destinations. Features include property listing, booking management, authentication, and responsive UI. The application is built using Node.js, Express.js, MongoDB, and EJS for server-side rendering. It also exposes RESTful APIs for various operations, ensuring a scalable and modular architecture.",
            codeUrl: "https://github.com/Yash-Atkari/Wanderlust",
            projectUrl: "https://airbnb-clone-1-2et5.onrender.com",
            category: "Travel",
            date: "2024"
        },
        {
            id: "vibesync",
            title: "VibeSync",
            src: "/vibesync_image.webp",
            description: "A compassionate mental health chatbot designed to detect emotions and provide gentle, thoughtful responses. Powered by OpenAI, it creates a safe, calming space where users can express themselves freely and feel truly heard. With a focus on emotional awareness and simplicity, VibeSync blends powerful AI with a human-centered design to support mental well-being.",
            codeUrl: "https://github.com/Yash-Atkari/VibeSync",
            projectUrl: "https://vibesync-ao2c.onrender.com/chatbot",
            category: "Wellness",
            date: "2025"
        },
        {
            id: "portfolio",
            title: "Portfolio",
            src: "/portfolio_image.webp",
            description: "A personal developer portfolio showcasing projects, skills, and experience in a visually engaging layout. Built with React and styled using Bootstrap and custom CSS, it serves as a professional online presence.",
            codeUrl: "https://github.com/Yash-Atkari/Yash-Atkari-Portfolio.git",
            projectUrl: "https://yash-atkari-portfolio-3.onrender.com",
            category: "Portfolio",
            date: "2025"
        }
    ];

    return (
        <div className="row project-list">
            {projects.map((project) => (
                <Project
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
    );
}
