import { lazy, Suspense } from 'react';
import Spinner from './Spinner';
const Subnavbar = lazy(() => import('./Subnavbar'));
const Skills = lazy(() => import('./Skills'));
const HackathonAnimation = lazy(() => import('./HackathonAnimation'));
const HackathonList = lazy(() => import('./HackathonList'));
const CertificateList = lazy(() => import('./CertificateList'));
import "../styles/About.css";

export default function About() {
  return (
    <>
      <div className="px-4 py-2 text-white">
        <Suspense fallback={<Spinner />}>
          <Subnavbar />
        </Suspense>

        {/* Me Section */}
        <section id="me" className="d-flex align-items-center justify-content-center section-me">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12 col-md-6 col-lg-8">
                <h2 className="display-6 fw-bold mb-4 text-violet">Introduction</h2>
                <p className="mb-3 text-light">
                  Greeting of the Day,<br />
                  <br />
                  My name is <span className="fw-semibold">Yash Vikas Atkari</span>. My name signifies
                  "Success," and I strive to live up to that by delivering quality results in my work.
                </p>
                <p className="mb-3 text-light">
                  I am currently a 6th-semester IT aspirant at G.H. Raisoni College of Engineering, Nagpur.
                </p>
                <p className="mb-3 text-light">
                  I have built a strong foundation in Data Structures and Algorithms (DSA), the MERN stack, and I am highly
                  passionate about AI.
                </p>
                <p className="mb-3 text-light">
                  I haven't just learned these skills; I have tested them in high-pressure environments. I have participated in
                  several national-level hackathons, including Fluxus at IIT Indore, Code of Phoenix at IIIT Naya Raipur,
                  Ecothon 2.0, and HackOn by GDSC.
                </p>
                <p className="mb-3 text-light">
                  My objective is to leverage my full-stack development skills and AI knowledge to build scalable solutions that
                  solve real-world problems in a growth-oriented organization.
                </p>
                <div className="info-grid row">
                  <div className="info-item col-md-6 mb-4">
                    <span className="label fs-5 fw-bold text-violet">Location</span><br />
                    <span className="value">Nagpur, Maharashtra, India</span>
                  </div>
                  <div className="info-item col-md-6 mb-4">
                    <span className="label fs-5 fw-bold text-violet">Email</span><br />
                    <span className="value">yashatkari7@gmail.com</span>
                  </div>
                  <div className="info-item col-md-6 mb-4">
                    <span className="label fs-5 fw-bold text-violet">College</span><br />
                    <span className="value">G H Raisoni College of Engineering, Nagpur</span>
                  </div>
                  <div className="info-item col-md-6 mb-4">
                    <span className="label fs-5 fw-bold text-violet">Degree</span><br />
                    <span className="value">B.Tech in Information Technology</span>
                  </div>
                </div>
              </div>

              <div className="col-12 col-md-6 col-lg-4 text-center">
                <img
                  src="/yash_profile_photo.webp"
                  loading="lazy"
                  alt="Yash Profile"
                  className="img-fluid rounded-circle shadow bg-secondary bg-opacity-10 profile-img"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="container py-5 section-skills">
          <Suspense fallback={<Spinner />}>
            <Skills />
          </Suspense>
        </section>

        {/* Hackathons & Events Section */}
        <section id="events" className="row align-items-center section-events">
          <div className="col-12 col-md-8">
            <Suspense fallback={<Spinner />}>
              <HackathonList />
            </Suspense>
          </div>
          <div className="col-12 col-md-4 col-lg-4 text-center">
            <Suspense fallback={<Spinner />}>
              <HackathonAnimation />
            </Suspense>
          </div>
        </section>

        {/* Certification Section */}
        <section id="certifications" className="row align-items-center section-certifications">
          <div>
            <Suspense fallback={<Spinner />}>
              <CertificateList />
            </Suspense>
          </div>
        </section>
      </div>
    </>
  );
}
