import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

export default function Home() {
  return (
    <div className="container overflow-x-hidden">
      <Navbar />
      <HeroSection />
    </div>
  );
}
