import "./App.css";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import Navbar from "./components/navbar.jsx";
import HeroSection from "./components/herosection.jsx";
import Stats from "./components/stats.jsx";
import AboutUs from "./components/about.jsx";
import TechnicalSkills from "./components/technicalskills.jsx";
import Project from "./components/featured.jsx";
import Experience from "./components/experience.jsx";
import Message from "./components/leaveMessage.jsx";
import Contact from "./components/contact.jsx";
import Cursor from "./components/cursor.jsx";
import BackToTopButton from "./components/backToTop.jsx";
function App() {
  return (
    <ThemeProvider>
      <Cursor />
      <Navbar />
      <div className=" bg-[#FAF9F6] dark:bg-black">
        <HeroSection />
        <Stats />
        <AboutUs />
        <TechnicalSkills />
        <Project />
        <Experience />
        <Message />
        <Contact />
      </div>

      <BackToTopButton />
    </ThemeProvider>
  );
}

export default App;
