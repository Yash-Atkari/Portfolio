import "../styles/Codolio.css";

export default function Codolio() {
    return (
        <div className="codolio-container py-5">
            <div className="text-center text-white mb-4">
                <h2 className="fw-bold codolio-title">My Codolio Profile</h2>
                <p className="text-secondary codolio-subtitle">
                    Track my live journey, challenges, and achievements in coding!
                </p>
            </div>

            <div className="d-flex justify-content-center">
                <iframe
                    src="https://codolio.com/profile/Yash-Atkari"
                    title="Codolio Profile"
                    className="codolio-iframe"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <a
                    href="https://codolio.com/profile/Yash-Atkari"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn gradient-btn mt-4"
                    aria-label="Visit Codolio Profile"
                >
                    <i className="fa-solid fa-eye"></i>{" "}
                    <span className="fw-semibold">Visit</span>
                </a>
            </div>
        </div>
    );
}
