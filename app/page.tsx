import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import CodingProfiles from "./components/CodingProfiles";
import Testimonials from "./components/Testimonials";
import AnimatedSection from "./components/AnimatedSection";

export default function Home() {
  return (
    <>
      <div className="bg-black bg-grid-white/[0.2] relative ">
        <div className="absolute pointer-events-none inset-0 flex bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="relative z-20 bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-500 pb-8 overflow-x-hidden">
          <div className="flex flex-col gap-6">
            <AnimatedSection id="nav-bar">
              <Navbar />
            </AnimatedSection>
            <AnimatedSection id="hero-section">
              <HeroSection />
            </AnimatedSection>
            <AnimatedSection id="about-me">
              <AboutMe />
            </AnimatedSection>
            <AnimatedSection id="experience">
              <Experience />
            </AnimatedSection>
            <AnimatedSection id="projects">
              <Projects />
            </AnimatedSection>
            <AnimatedSection id="testimonials">
              <Testimonials />
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
            <AnimatedSection id="contact-me">
              <Footer />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </>
  );
}
