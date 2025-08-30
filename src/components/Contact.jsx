import ContactAnimation from "./ContactAnimation.jsx";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Notiflix from "notiflix";
import "../styles/Contact.css";

export default function Contact() {
    const form = useRef();

    Notiflix.Notify.init({
        width: '320px',
        position: 'right-top',
        distance: '12px',
        opacity: 0.95,
        borderRadius: '12px',
        timeout: 4000,
        showOnlyTheLastOne: true,
        clickToClose: true,
        pauseOnHover: true,
        fontFamily: 'Poppins, sans-serif',
        fontSize: '15px',
        cssAnimation: true,
        cssAnimationDuration: 400,
        cssAnimationStyle: 'fade',
        success: { background: '#2ecc71', textColor: '#fff' },
        failure: { background: '#e74c3c', textColor: '#fff' },
    });

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm("service_21tx0hq", "template_r12a6y5", form.current, "ld6rRmoTC4T4bQKpa")
            .then(() => Notiflix.Notify.success('Your message has been sent successfully.'))
            .catch(() => Notiflix.Notify.failure('Failed to send your message. Please try again.'));
    };

    return (
        <div className="px-3 py-2 contact-wrapper">
            <div className="d-flex flex-column align-items-center text-white">
                <ContactAnimation />
                <h2 className="fw-bold contact-title">Get In Touch</h2>
                <div className="container py-5">
                    <div className="row d-flex align-items-stretch">

                        {/* Contact Form */}
                        <div className="col-md-6 mb-4">
                            <div className="p-4 text-light h-100 contact-card">
                                <h4 className="mb-4"><b>Send me a message</b></h4>
                                <form ref={form} onSubmit={sendEmail} className="h-100 d-flex flex-column justify-content-between">
                                    <div>
                                        <div className="mb-3">
                                            <label className="form-label">Name</label>
                                            <input type="text" name="name" className="form-control contact-input" placeholder="Your name" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email</label>
                                            <input type="email" name="email" className="form-control contact-input" placeholder="Your email" required />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Message</label>
                                            <textarea name="message" rows="4" className="form-control contact-textarea" placeholder="Your message" required></textarea>
                                        </div>
                                        <button type="submit" className="btn text-light mt-3 w-100 contact-btn">
                                            <i className="fa-solid fa-paper-plane"></i>&nbsp;
                                            <span>Send</span>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="col-md-6 mb-4">
                            <div className="p-4 text-light h-100 contact-card">
                                <h4 className="mb-4"><b>Contact Information</b></h4>

                                <p className="mb-4">
                                    <i className="fa-solid fa-envelope me-2 contact-icon"></i>
                                    <span className="fs-5 fw-bold">Email</span><br />
                                    <a href="mailto:yashatkari7@gmail.com" className="text-secondary">yashatkari7@gmail.com</a>
                                </p>

                                <p className="mb-4">
                                    <i className="fa-solid fa-phone me-2 contact-icon"></i>
                                    <span className="fs-5 fw-bold">Phone</span><br />
                                    <span className="text-secondary">9529623010</span>
                                </p>

                                <p className="mb-4">
                                    <i className="fa-brands fa-linkedin me-2 contact-icon"></i>
                                    <span className="fs-5 fw-bold">LinkedIn</span><br />
                                    <a href="https://www.linkedin.com/in/yashatkari2005/" target="_blank" rel="noopener noreferrer" className="text-secondary">
                                        linkedin.com/in/yashatkari2005
                                    </a>
                                </p>

                                <p className="mb-4">
                                    <i className="fa-brands fa-github me-2 contact-icon"></i>
                                    <span className="fs-5 fw-bold">GitHub</span><br />
                                    <a href="https://github.com/Yash-Atkari" target="_blank" rel="noopener noreferrer" className="text-secondary">
                                        github.com/Yash-Atkari
                                    </a>
                                </p>

                                <p className="mb-4">
                                    <i className="fa-solid fa-location-dot me-2 contact-icon"></i>
                                    <span className="fs-5 fw-bold">Location</span><br />
                                    <span className="text-secondary">Nagpur, Maharashtra, India</span>
                                </p>

                                <p className="text-center mt-auto text-light contact-note">
                                    Feel free to reach out for collaborations, questions, or just to say hi!
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}
