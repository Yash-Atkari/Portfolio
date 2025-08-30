import { useState } from "react";
import { FaEye } from "react-icons/fa";

export default function CertificateCard({ title, image, description }) {
  const [hovered, setHovered] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div
          className="certificate-card position-relative overflow-hidden rounded-4 shadow-lg"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            height: "360px",
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
          }}
        >
          {/* Background Image */}
          <img
            src={image}
            alt={title}
            className="position-absolute w-100 h-100"
            loading="lazy"
            style={{
              objectFit: "cover",
              transition: "transform 0.2s ease",
              transform: hovered ? "scale(1.08)" : "scale(1)",
              filter: hovered ? "brightness(0.75)" : "brightness(1)",
              zIndex: 1,
            }}
          />

          {/* Gradient Overlay */}
          <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.85) 40%, rgba(0,0,0,0) 100%)",
              zIndex: 2,
              pointerEvents: "none",
            }}
          />

          {/* Content Overlay */}
          <div
            className="position-relative p-4 d-flex flex-column justify-content-end"
            style={{
              zIndex: 3,
              height: hovered ? "auto" : "100px",
              transition: "height 0.35s ease-in-out",
              overflow: "hidden",
            }}
          >
            {/* Title */}
            <h5 className="fw-bold mb-2" style={{ color: "violet" }}>{title}</h5>

            {/* Description */}
            <p
              className="text-light"
              style={{
                lineHeight: "1.4",
                maxHeight: hovered ? "8rem" : "3rem",
                overflow: "hidden",
                textOverflow: "ellipsis",
                transition: "all 0.5s ease-in-out",
                marginBottom: "1rem",
              }}
            >
              {description}
            </p>
          </div>

          {/* Action Button */}
            <div className="d-flex justify-content-start position-absolute" style={{ zIndex: "3", top: "1rem", right: "1rem"}}>
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
            <div className="certificate-modal" role="dialog" aria-modal="true" onClick={() => setShowModal(false)}>
                <div className="modal-content" onClick={e => e.stopPropagation()}>
                    <img src={image} alt={title} className="img-fluid rounded shadow" />
                </div>
            </div>
        )}
    </>
  );
}
