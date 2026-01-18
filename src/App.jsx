import "./App.css";
import Navbar from "./components/navbar.jsx";
import HeroSection from "./components/herosection.jsx";
import Stats from "./components/stats.jsx";
import AboutUs from "./components/about.jsx";
import TechnicalSkills from "./components/technicalskills.jsx";
import Project from "./components/featured.jsx";
import Experience from "./components/experience.jsx";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Stats />
      <AboutUs />
      <TechnicalSkills />
      <Project />
      <Experience />
    </>
  );
}

export default App;
