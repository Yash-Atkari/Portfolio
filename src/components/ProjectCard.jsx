import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import "../styles/ProjectCard.css"; // Import custom CSS for styling

export default function Project({ title, src, description, codeUrl, projectUrl, category, date }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div
        className={`project-card rounded-4 shadow-lg ${hovered ? "hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Background Image */}
        <img
          src={src}
          alt={`${title} project preview`}
          className="project-img position-absolute top-0 start-0 w-100 h-100"
          loading="lazy"
        />

        {/* Gradient Overlay */}
        <div className="project-overlay position-absolute top-0 start-0 w-100 h-100" />

        {/* Content Overlay */}
        <div className={`project-content p-4 d-flex flex-column justify-content-end rounded-bottom-4 ${hovered ? "expanded" : ""}`}>
          
          {/* Tag + Date */}
          <div className={`project-meta d-flex justify-content-between align-items-center mb-3 ${hovered ? "visible" : ""}`}>
            <span className="badge bg-primary text-uppercase">{category}</span>
            <small className="d-flex align-items-center fw-bold text-light">
              <FaCalendarAlt className="me-1" />
              {date}
            </small>
          </div>

          {/* Title */}
          <h4 className="project-title mb-2 fw-bold">{title}</h4>

          {/* Description */}
          <p className={`project-desc text-light ${hovered ? "expanded" : ""}`}>
            {description}
          </p>

          {/* Buttons */}
          <div className="d-flex justify-content-between">
            <a
              href={codeUrl}
              aria-label={`View source code of ${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-code text-light align-self-start"
            >
              <i className="fa-solid fa-code"></i>&nbsp;
              <span className="fw-semibold">Code</span>
            </a>

            <a
              href={projectUrl}
              aria-label={`View live project of ${title}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline-light align-self-start d-flex align-items-center gap-2"
            >
              <i className="fa-solid fa-circle text-danger live-dot"></i>
              <span className="fw-semibold">Live</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
