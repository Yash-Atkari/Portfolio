import { lazy, Suspense } from 'react';
import Spinner from './Spinner';
const Hero = lazy(() => import('./Hero'));
import { Typewriter } from 'react-simple-typewriter';

export default function Home() {
    return (
        <div className="home-section px-3 py-4">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 col-lg-8 mb-4 mb-md-0">
                            <h1 className="fw-bold mb-2">Hi there,</h1>
                            <h1 className="gradient-text display-5 fw-bold mb-3">I'm Yash Atkari</h1>
                            <p className="fs-4 lead text-secondary">
                                <Typewriter
                                    words={[
                                    'Aspiring Software Engineer',
                                    'Full Stack Web Developer',
                                    'MERN Stack Enthusiast',
                                    'AI Explorer',
                                    'Blockchain Enthusiast'
                                    ]}
                                    loop={true}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={60}
                                    deleteSpeed={20}
                                    delaySpeed={1000}
                                />
                            </p>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 text-center">
                            <Suspense fallback={<Spinner />}>
                                <Hero />
                            </Suspense>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Links Section */}
            <section className="social-section">
                <h2 className="display-6 fw-bold">Find me on</h2>
                <div className="col-12 text-center pe-3">
                    <a
                        href="https://www.linkedin.com/in/yashatkari2005/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <i className="fa-brands fa-linkedin-in" title="LinkedIn"></i>
                    </a>
                    <a
                        href="https://github.com/Yash-Atkari"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <i className="fa-brands fa-github" title="GitHub"></i>
                    </a>
                    <a
                        href="mailto:yashatkari7@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <i className="fa-solid fa-envelope" title="Email"></i>
                    </a>
                </div>
            </section>
        </div>
    );
}
