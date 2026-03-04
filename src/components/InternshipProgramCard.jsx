import { useState } from "react";
import { FaEye } from "react-icons/fa";
import "../styles/InternshipProgramCard.css";

export default function InternshipProgramCard({
  title,
  company,
  duration,
  image,
  description,
  status,
}) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const statusClass =
    status === "In Progress"
      ? "badge bg-warning text-dark"
      : status
        ? "badge bg-success"
        : "badge bg-secondary";

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div
          className={`internship-card shadow-lg ${hovered ? "hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={image}
            alt={`${title} - ${company}`}
            className="internship-bg"
            loading="lazy"
          />

          <div className="internship-overlay" />

          <div className={`internship-content ${hovered ? "expanded" : ""}`}>
            <div className="d-flex align-items-start justify-content-between gap-2">
              <div>
                <h5 className="internship-title fw-bold mb-1">{title}</h5>
                <div className="internship-meta text-light opacity-75">
                  <span className="fw-semibold">{company}</span>
                  <span className="mx-2">•</span>
                  <span>{duration}</span>
                </div>
              </div>
              {status ? (
                <span className={statusClass} aria-label={`Status: ${status}`}>
                  {status}
                </span>
              ) : null}
            </div>

            <p className={`internship-desc text-light ${hovered ? "expanded" : ""}`}>
              {description}
            </p>
          </div>

          <div className="internship-action">
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-sm text-dark"
              aria-label="View certificate"
              type="button"
            >
              <FaEye className="fs-4" />
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div
          className="internship-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowModal(false)}
        >
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={image} alt={title} className="img-fluid rounded shadow" />
          </div>
        </div>
      )}
    </>
  );
}

