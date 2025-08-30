import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import "../styles/Navbar.css";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleNavbar = () => setIsOpen(!isOpen);

    const navLinkClass = ({ isActive }) =>
        `nav-link ${isActive ? 'active' : 'text-white'}`;

    return (
        <nav className="navbar navbar-expand-md px-4 py-2 sticky-top">
            <NavLink to="/" className="navbar-brand d-inline-block me-3" style={{ height: "50px", width: "45px" }}>
                <img src="/portfolio_logo_bg.png" alt="Portfolio logo" className="h-100 w-100 img-fluid" />
            </NavLink>

            <button
                className="navbar-toggler"
                type="button"
                aria-controls="navbarNav"
                aria-expanded={isOpen}
                aria-label="Toggle navigation"
                onClick={toggleNavbar}
            >
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarNav">
                <div className="navbar-nav ms-auto gap-md-3 text-center">
                    <NavLink to="/" className={navLinkClass}>Home</NavLink>
                    <NavLink to="/about" className={navLinkClass}>About</NavLink>
                    <NavLink to="/resume" className={navLinkClass}>Resume</NavLink>
                    <NavLink to="/projects" className={navLinkClass}>Projects</NavLink>
                    <NavLink to="/codolio" className={navLinkClass}>Codolio</NavLink>
                    <NavLink to="/blogs" className={navLinkClass}>Blogs</NavLink>
                    <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
                </div>
            </div>
        </nav>
    );
}
