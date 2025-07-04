import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

const Navbar = lazy(() => import('./components/Navbar.jsx'));
const Home = lazy(() => import('./components/Home.jsx'));
const About = lazy(() => import('./components/About.jsx'));
const Resume = lazy(() => import('./components/Resume.jsx'));
const ProjectList = lazy(() => import('./components/ProjectList.jsx'));
const Contact = lazy(() => import('./components/Contact.jsx'));
const Footer = lazy(() => import('./components/Footer.jsx'));
const NotFound = lazy(() => import('./components/NotFound.jsx'));
const Codolio = lazy(() => import('./components/Codolio.jsx'));
const BlogList = lazy(() => import('./components/BlogList.jsx'));

import AnimatedBackground from './components/AnimatedBackground'; 

function App() {
  return (
    <>
      <AnimatedBackground />
      <Router>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<ProjectList />} />
            <Route path="/codolio" element={<Codolio />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
