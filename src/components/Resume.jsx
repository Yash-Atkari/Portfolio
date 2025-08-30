import "../styles/Resume.css";

export default function Resume() {
  return (
    <div className="resume-container">
      <div className="d-flex flex-column align-items-center py-4">
        <h2 className="resume-title fw-bold mb-4">My Resume</h2>

        <section className="resume-section">
          <div className="d-flex align-items-center justify-content-center">
            <img
              src="/Resume.jpg"
              title="PDF Viewer"
              alt="Yash Atkari Resume Preview"
              className="img-fluid resume-image"
            />
          </div>
        </section>

        <a
          href="/Yash_Atkari_Resume.pdf"
          download
          className="btn text-white mt-4 resume-download-btn"
          rel="noopener noreferrer"
          aria-label="Download Resume PDF"
        >
          <i class="fa-solid fa-circle-down"></i>{" "}
          <span className="fw-semibold">Download</span>
        </a>
      </div>
    </div>
  );
}
