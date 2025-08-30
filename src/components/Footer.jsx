import { Link } from 'react-router-dom';
import "../styles/Footer.css";

export default function Footer() {
    return (
        <footer className="footer px-4 py-2 text-white">
            <div className="">
                <div className="row text-center text-md-start align-items-center gy-3">
                    {/* Logo + Name */}
                    <div className="col-12 col-md-4 d-flex justify-content-center justify-content-md-start">
                        <Link to="/" className="d-inline-flex align-items-center text-white">
                            <img src="/portfolio_logo_bg.png" alt="Portfolio logo" className='img-fluid' style={{ height: "40px", width: "45px" }} />
                            <span className="ms-2">Yash Atkari</span>
                        </Link>
                    </div>

                    {/* Copyright */}
                    <div className="col-12 col-md-4 text-center">
                        <p className="m-0">© 2025 Yash Atkari. All rights reserved.</p>
                    </div>

                    {/* Social Links */}
                    <div className="col-12 col-md-4 text-center text-md-end">
                        <p className="m-0 d-none d-md-block">Connect with me</p>
                        <div className="d-flex justify-content-center justify-content-md-end gap-3 mt-2">
                            <a href="https://www.linkedin.com/in/yashatkari2005/" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-linkedin-in"></i>
                            </a>
                            <a href="https://github.com/Yash-Atkari" target="_blank" rel="noopener noreferrer">
                                <i className="fa-brands fa-github"></i>
                            </a>
                            <a href="#"><i className="fa-brands fa-twitter"></i></a>
                            <a href="#"><i className="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
