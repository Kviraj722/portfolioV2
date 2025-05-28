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
import Heading from "./components/Heading";

const sections = [
  { id: "nav-bar", component: <Navbar /> },
  { id: "hero-section", component: <HeroSection /> },
  { id: "about-me", heading: "Meet Viraj:", component: <AboutMe /> },
  {
    id: "experience",
    heading: "Career Highlights:",
    component: <Experience />,
  },
  { id: "projects", heading: "Notable projects:", component: <Projects /> },
  { id: "testimonials", component: <Testimonials /> },
  { id: "profiles", heading: "Profiles:", component: <CodingProfiles /> },
  { id: "skills", heading: "Technologies:", component: <Technologies /> },
  { id: "contact-me", component: <ContactMe /> },
  { id: "footer", component: <Footer /> },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black relative">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="relative z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {sections.map(({ id, heading, component }) => (
            <AnimatedSection key={id} id={id}>
              {heading && <Heading heading={heading} />}
              {component}
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  );
}
