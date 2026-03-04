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
                            "Frontend: React.js, Material UI, Bootstrap CSS",
                            "Backend: Node.js, Express.js, RESTful APIs",
                        ]
                    },
                    {
                        title: "Architectural Fundamentals",
                        icon: "fa-solid fa-sitemap text-warning",
                        items: [
                            "System Design: HLD & LLD",
                            "CS Core: DSA, OS, DBMS, CN",
                            "OOPs: Design Patterns & SOLID Principles"
                        ]
                    },
                    {
                        title: "Data Mastery",
                        icon: "fa-solid fa-database text-secondary",
                        items: [
                            "Relational: MySQL, PostgreSQL",
                            "NoSQL: MongoDB",
                        ]
                    },
                    {
                        title: "AI & Agentic Systems",
                        icon: "fa-solid fa-robot text-info-emphasis",
                        items: [
                            "Agentic Frameworks: LangChain, CrewAI, LangGraph",
                            "GenAI Patterns: RAG, Multi-Agent Orchestration",
                            "Models: Gemini API, IBM Watsonx, Hugging Face",
                            "Vector DBs: ChromaDB, Pinecone"
                        ]
                    },
                    {
                        title: "Cloud & DevOps",
                        icon: "fa-solid fa-cloud-arrow-up text-danger",
                        items: [
                            "Azure: AI Services, Azure Functions",
                            "Google Cloud: Cloud Skills Boost",
                            "Tools: Git/GitHub",
                            "Platforms: Firebase"
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
