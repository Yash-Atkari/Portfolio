import { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";
import { Modal } from "react-bootstrap";
import "../styles/BlogCard.css";

export default function Blog({ title, coverImage, date, excerpt, category }) {
    const [showModal, setShowModal] = useState(false);

    const handleClose = () => setShowModal(false);
    const handleShow = () => setShowModal(true);

    return (
        <>
        <div className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="blog-card h-100">
                {/* Cover Image */}
                <div className="position-relative">
                    <img src={coverImage} alt={title} loading="lazy" className="img-fluid w-100" />
                    {/* Category Tag */}
                    <span className="position-absolute top-0 start-0 m-3 badge bg-danger text-white fw-bold">
                        {category}
                    </span>
                </div>

                {/* Card Content */}
                <div className="blog-card-content">
                    <small className="d-flex align-items-center mb-2 fw-bold text-secondary">
                        <FaCalendarAlt className="me-1" />
                        {date}
                    </small>
                    <h5 className="blog-title">{title}</h5>
                    <p className="blog-excerpt">
                        {excerpt.slice(0, 150)}...
                    </p>
                    <span onClick={handleShow} className="blog-readmore">
                        Read More...
                    </span>
                </div>
            </div>

            {/* Full-Screen Modal */}
            <Modal
                show={showModal}
                onHide={handleClose}
                fullscreen
                contentClassName="glassmorphic-modal"
            >
                <Modal.Body className="px-4">
                    <div className="blog-modal-header">
                        <h2 className="blog-modal-title">{title}</h2>
                        <div className="d-flex justify-content-between align-items-center text-secondary small">
                            <small className="d-flex align-items-center fw-bold text-secondary">
                                <FaCalendarAlt className="me-1" />
                                {date}
                            </small>
                            <span className="badge bg-danger fw-bold">{category}</span>
                        </div>
                    </div>

                    {/* Cover Image */}
                    <div className="blog-modal-image text-center mb-4">
                        <img src={coverImage} alt={title} className="img-fluid rounded-4 shadow" />
                    </div>

                    {/* Blog Content */}
                    <div className="blog-modal-content">
                        {excerpt}
                    </div>
                </Modal.Body>
            </Modal>
        </div>
        </>
    );
}
