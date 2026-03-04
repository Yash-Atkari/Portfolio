import "../styles/Skills.css";

export default function Skills() {
    return (
        <div className="row g-4 text-light skills-section">
                    {[
                    {
                        title: "Core Programming",
                        icon: "fa-solid fa-code text-primary",
                        items: [
                            "Java, JavaScript",
                            "Python for AI/ML",
                        ]
                    },
                    {
                        title: "Web & Full-Stack",
                        icon: "fa-solid fa-globe text-light-emphasis",
                        items: [
                            "React.js, Material UI, Bootstrap CSS",
                            "Node.js, Express.js, RESTful APIs",
                        ]
                    },
                    {
                        title: "Data Mastery",
                        icon: "fa-solid fa-database text-secondary",
                        items: [
                            "MySQL, PostgreSQL",
                            "MongoDB",
                        ]
                    },
                    {
                        title: "Architectural Fundamentals",
                        icon: "fa-solid fa-sitemap text-warning",
                        items: [
                            "DSA, OS, DBMS, CN, OOPs",
                            "LLD - Design Patterns & SOLID Principles",
                        ]
                    },
                    {
                        title: "AI & Agentic Systems",
                        icon: "fa-solid fa-robot text-info-emphasis",
                        items: [
                            "LangChain, CrewAI, LangGraph",
                            "RAG, Multi-Agent Orchestration",
                            "Gemini API, IBM Watson, Hugging Face",
                            "ChromaDB, Pinecone"
                        ]
                    },
                    {
                        title: "Cloud & DevOps",
                        icon: "fa-solid fa-cloud-arrow-up text-danger",
                        items: [
                            "Azure, AI Services",
                            "Google Cloud Skills",
                            "Git/GitHub",
                            "Firebase"
                        ]
                    },
                    ].map((category, index) => (
                    <div key={index} className="col-md-6 col-lg-3">
                        <div className="p-3 rounded-4 h-100 shadow-sm border border-secondary skill-card">
                        <h5 className="mb-3 d-flex align-items-center gap-2" style={{color: "violet"}}>
                            <i className={`${category.icon}`}></i> {category.title}
                        </h5>
                        <ul className="list-unstyled">
                            {category.items.map((item, idx) => (
                            <li key={idx} className="mb-1">
                                <span className="bullet me-2">•</span> {item}
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                ))}
        </div>
    );
}
