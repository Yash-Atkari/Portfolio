import { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function CertificateCard({ title, image, description }) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div
          className={`certificate-card shadow-lg ${hovered ? "hovered" : ""}`}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/* Background Image */}
          <img
            src={image}
            alt={title}
            className="certificate-bg"
            loading="lazy"
          />

          {/* Gradient Overlay */}
          <div className="certificate-overlay" />

          {/* Content Overlay */}
          <div className={`certificate-content ${hovered ? "expanded" : ""}`}>
            {/* Title */}
            <h5 className="certificate-title fw-bold mb-2">{title}</h5>

            {/* Description */}
            <p className={`certificate-desc text-light ${hovered ? "expanded" : ""}`}>
              {description}
            </p>
          </div>

          {/* Action Button */}
          <div className="certificate-action">
            <button
              onClick={() => setShowModal(true)}
              className="btn btn-sm text-dark"
            >
              <FaEye className="fs-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          className="certificate-modal"
          role="dialog"
          aria-modal="true"
          onClick={() => setShowModal(false)}
        >
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={image} alt={title} className="img-fluid rounded shadow" />
          </div>
        </div>
      )}
    </>
  );
}
