import React from "react";
import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "../components";

function HomePage() {
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

export default HomePage;
