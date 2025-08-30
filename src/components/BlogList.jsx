import BlogCard from './BlogCard.jsx';
import aarogyamContent from "../blogContents/aarogyamContent";
import aiContent from "../blogContents/aiContent";
import hackathonContent from "../blogContents/hackathonContent";
import journeyContent from "../blogContents/journeyContent";
import vibesyncContent from "../blogContents/vibesyncContent";
import bridgepayContent from "../blogContents/bridgepayContent";

export default function BlogList() {
    const blogs = [
        {
            title: "The Future of Healthcare Management Systems",
            coverImage: "/aarogyam_blog.webp",
            date: "March 20, 2025",
            excerpt: aarogyamContent,
            category: "Healthcare Tech",
            readMoreUrl: "/blogs/healthcare-management-system"
        },
        {
            title: "How AI Impacted My Life & Career",
            coverImage: "/AI_blog.webp",
            date: "March 30, 2025",
            excerpt: aiContent,
            category: "AI & Productivity",
            readMoreUrl: "/blogs/ai-impact"
        },
        {
            title: "Hackathon Journey 2025",
            coverImage: "/hackathon_blog.webp",
            date: "April 6, 2025",
            excerpt: hackathonContent,
            category: "Tech Journey",
            readMoreUrl: "/blogs/hackathon-journey-2025"
        },
        {
            title: "My 8-Month Coding Batch Experience",
            coverImage: "/coding_blog.webp",
            date: "Jan 12, 2025",
            excerpt: journeyContent,
            category: "Learning Path",
            readMoreUrl: "/blogs/batch-coding-journey"
        },
        {
            title: "VibeSync - An AI-Driven Music Sync Platform",
            coverImage: "/vibesync_blog.webp",
            date: "Feb 23, 2025",
            excerpt: vibesyncContent,
            category: "AI Projects",
            readMoreUrl: "/blogs/vibesync"
        },
        {
            title: "Building a Web3 Remittance Platform",
            coverImage: "/blockchain_blog.webp",
            date: "Feb 18, 2025",
            excerpt: bridgepayContent,
            category: "Web3 & Blockchain",
            readMoreUrl: "/blogs/web3-remittance"
        }
    ];

    return (
        <div className="row mt-3" style={{ width: "99vw", minHeight: "99vh", margin: "0" }}>
            {blogs.map((blog, index) => (
                <BlogCard
                    key={index}
                    title={blog.title}
                    coverImage={blog.coverImage}
                    date={blog.date}
                    excerpt={blog.excerpt}
                    category={blog.category}
                    readMoreUrl={blog.readMoreUrl}
                />
            ))}
        </div>
    );
}
