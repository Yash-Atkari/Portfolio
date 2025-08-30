import { FaCalendarAlt } from "react-icons/fa";
import "../styles/HackathonCard.css";

export default function HackathonCard({ name, organizer, duration, date, certificate, redirect }) {
  return (
    <div className="col-12 col-md-6 mb-4">
      <div className="card h-100 shadow-sm border-0 text-white hackathon-card">
        <div className="card-body rounded-4">
          <h5 className="card-title fw-bold">{name}</h5>
          <p className="card-text mb-2">{organizer}</p>
          <small className="d-flex align-items-center my-3 fw-bold text-secondary">
            <FaCalendarAlt className="me-1" />
            {date}
          </small>

          <div className="d-flex justify-content-between">
            {certificate && (
              <a
                href={certificate}
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-text btn btn-outline-primary"
                aria-label="View Certificate"
              >
                <i className="fa-solid fa-medal"></i> <span>Certificate</span>
              </a>
            )}
            {redirect && (
              <a
                href={redirect}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-warning"
                aria-label="View LinkedIn Post"
              >
                <i className="fa-brands fa-linkedin-in"></i> <span>LinkedIn</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
