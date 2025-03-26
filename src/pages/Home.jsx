import React from "react";
import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "../components";

function Home() {
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

export default Home;
