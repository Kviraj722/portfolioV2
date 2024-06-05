import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experiance from "./components/Experiance";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import CodingProfiles from "./components/CodingProfiles";
import TestiNomials from "./components/TestiNomials";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <>
      <div className="bg-black bg-grid-white/[0.2] relative">
        <div className="absolute pointer-events-none inset-0 flex bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
          <Navbar />
          <AnimatedSection id="hero-section">
            <HeroSection />
          </AnimatedSection>
          <AnimatedSection id="about-me">
            <AboutMe />
          </AnimatedSection>
          <AnimatedSection id="experience">
            <Experiance />
          </AnimatedSection>
          <AnimatedSection id="projects">
            <Projects />
          </AnimatedSection>
          <AnimatedSection id="testimonials">
            <TestiNomials />
          </AnimatedSection>
          <AnimatedSection id="profiles">
            <CodingProfiles />
          </AnimatedSection>
          <AnimatedSection id="skills">
            <Technologies />
          </AnimatedSection>
          <AnimatedSection id="contact-me">
            <ContactMe />
          </AnimatedSection>
          <Footer />
        </div>
      </div>
    </>
  );
}
