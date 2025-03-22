import "./App.css";
import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
