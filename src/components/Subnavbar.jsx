import { useState } from "react";
import "../styles/Subnavbar.css";

export default function Subnavbar() {
  const [activeLink, setActiveLink] = useState("me");

  return (
    <div className="sub-navbar-container">
      <div className="sub-navbar">
        <a
          href="#me"
          onClick={() => setActiveLink("me")}
          className={`text-decoration-none py-1 px-2 rounded ${activeLink === "me" ? "active" : ""}`}
          aria-label="Me"
        >
          <i className="fa-regular fa-user"></i><span> Me</span>
        </a>

        <a
          href="#skills"
          onClick={() => setActiveLink("skills")}
          className={`text-decoration-none py-1 px-2 rounded ${activeLink === "skills" ? "active" : ""}`}
          aria-label="Skills"
        >
          <i className="fa-regular fa-keyboard"></i><span> Skills</span>
        </a>

        <a
          href="#events"
          onClick={() => setActiveLink("events")}
          className={`text-decoration-none py-1 px-2 rounded ${activeLink === "events" ? "active" : ""}`}
          aria-label="Hackathons and Events"
        >
          <i className="fa-regular fa-calendar"></i><span> Hackathons & Events</span>
        </a>

        <a
          href="#certifications"
          onClick={() => setActiveLink("certifications")}
          className={`text-decoration-none py-1 px-2 rounded ${activeLink === "certifications" ? "active" : ""}`}
          aria-label="Certifications"
        >
          <i className="fa-solid fa-medal"></i><span> Certifications</span>
        </a>

        <a
          href="#achievements"
          onClick={() => setActiveLink("achievements")}
          className={`text-decoration-none py-1 px-2 rounded ${activeLink === "achievements" ? "active" : ""}`}
          aria-label="Achievements"
        >
          <i className="fa-solid fa-trophy"></i><span> Achievements</span>
        </a>
      </div>
    </div>
  );
}
