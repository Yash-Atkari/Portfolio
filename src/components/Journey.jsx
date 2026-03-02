import "../styles/Journey.css";

const journeySections = [
  {
    id: "dsa",
    period: "DSA · 24th Dec → 16th April",
    title: "Foundation in Data Structures & Algorithms",
    items: [
      "1st month: 4 mentorship sessions (Orientation, LinkedIn, GSoC, Coding Platforms).",
      "2nd month: 1 mentorship session (Resume Building, Time Complexity).",
      "3rd month: Devin (Fake NEWS) — learned to stay focused and not get distracted by hype.",
      "4th month: Appeared for TCS NQT Test.",
      "Completed DSA syllabus and problem dry runs by 24th Dec, followed by a 7-day gap before Web Dev."
    ],
  },
  {
    id: "webdev",
    period: "Web Dev · 26th April → 26th Sept",
    title: "Full Stack Web Development & Self-Discovery",
    items: [
      "1st month: Biggest time wasters self‑assessment — identified habits slowing progress.",
      "2nd month: Took a session for 1st and 2nd year students.",
      "3rd month: Attended an off‑campus placements & internship guidance session.",
      "4th month: Aptitude session — 800 questions (400 Easy + 400 Medium) and 10 sample papers (Level 1: 65 Qs, Level 2: 15 Qs). Strategy: directly jump to medium level or sample papers.",
      "5th month: Placement celebration and Job sheet focus.",
      "6th month: Honest mentorship session with Aman Sir.",
      "By 30th Dec: Completed DSA problem dry runs and full web dev track with 1 project.",
    ],
  },
  {
    id: "hackathons",
    period: "Hackathons · 14th Feb → 18th March 2025",
    title: "Hackathon Sprint Across Cities",
    items: [
      "Code of Phoenix Hackathon – IIIT Naya Raipur (15–16 Feb 2025).",
      "HackOn 2025 – Government College of Engineering (GCOE), Nagpur (21st Feb 2025).",
      "Ecothon 4.0 – Sipna College of Engineering and Technology, Amravati (10th March 2025).",
      "Healthcare Management System Hackathon – Fluxus, IIT Indore (15th March 2025).",
      "Key projects during this phase: Wanderlust, Aarogyam, VibeSync, Bridgepay, Trasho.",
    ],
  },
  {
    id: "portfolio-resume",
    period: "April → May 2025",
    title: "Portfolio & Resume Crafting",
    items: [
      "Built and polished personal portfolio (frontend focus) during April–May 2025.",
      "Designed multiple resume formats — Horizontal, Vertical, and Frontend‑focused.",
    ],
  },
  {
    id: "academics",
    period: "4th & 5th Semesters",
    title: "Theory Subjects & Conceptual Depth",
    items: [
      "4th sem + vacation: Focused on theory subjects and strengthening fundamentals.",
      "Theory subjects: OOP in 4th sem; CN, OS, DBMS in 5th sem.",
      "Aptitude prepared as taught by college faculty in 5th sem (most topics covered).",
    ],
  },
  {
    id: "project-refinement",
    period: "21st Aug → 8th Sept",
    title: "Project Refinement & Feature Upgrades",
    items: [
      "Aarogyam: After the hackathon, refined till May by adding Firebase Auth; from Aug–Sept, added extra features.",
      "Wanderlust: Already built; made focused refinements from 1st Sept to 8th Sept.",
      "Portfolio: Completed between May–June, then refined again from 30th Aug to 8th Sept.",
    ],
  },
  {
    id: "open-source",
    period: "Oct 2025",
    title: "Open Source Contributions",
    items: [
      "Participated in Hacktoberfest 2025.",
      "Completed 6 pull requests in open‑source projects.",
    ],
  },
  {
    id: "voice-agents",
    period: "Nov → Dec 2025",
    title: "Voice Agents & GSoC Exploration",
    items: [
      "10 Days of Voice Agents — explored and experimented, but later decided to quit.",
      "Planned to start GSoC 2026 preparation, but consciously chose to step back.",
    ],
  },
  {
    id: "agentic-ai",
    period: "Dec 2025",
    title: "Agentic AI, System Design & PlanX",
    items: [
      "Started learning Agentic AI and System Design.",
      "Built PlanX as a practical project around these concepts.",
    ],
  },
  {
    id: "arcade-internships",
    period: "Jan 2026",
    title: "Arcade Program & Dual AICTE Internships",
    items: [
      "Started the Arcade Program; continued System Design studies till 21st Jan.",
      "Selected for IBM SkillsBuild AICTE Internship – AIML (6 weeks, 15th Jan → 26th Feb).",
      "Selected for MS Elevate AICTE Internship – Azure (4 weeks, 20th Jan → 12th Feb).",
    ],
  },
  {
    id: "pwc-launchpad",
    period: "Feb 2026 → July 2026",
    title: "PwC LaunchPad Program",
    items: [
      "PwC LaunchPad Program started on 9th Feb and continues till July.",
      "Parallelly balancing internships, college, and self‑driven learning.",
    ],
  },
];

export default function Journey() {
  return (
    <div className="journey-page px-3 py-4 text-white">
      <div className="container">
        <header className="journey-header text-center mb-5">
          <h1 className="journey-title display-5 fw-bold">Journey</h1>
          <p className="text-secondary px-1 codolio-subtitle">
            Track my journey across DSA, Web Development, hackathons, projects, open source,
            AI, internships, and more — step by step.
          </p>
        </header>

        <section className="journey-timeline">
          {[...journeySections].reverse().map((section, index) => (
            <article
              key={section.id}
              className={`journey-item ${index % 2 === 0 ? "left" : "right"}`}
            >
              <div className="journey-dot" aria-hidden="true" />
              <div className="journey-content card bg-transparent border-0">
                <div className="card-body">
                  <span className="journey-period badge rounded-pill mb-2">
                    {section.period}
                  </span>
                  <h2 className="h4 fw-bold mb-3">{section.title}</h2>
                  <ul className="journey-list">
                    {section.items.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
}

