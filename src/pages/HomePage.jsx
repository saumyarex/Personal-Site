import React from "react";
import {
  Navbar,
  HeroSection,
  AboutSection,
  ProjectsSection,
  ContactSection,
  Footer,
} from "../components";
import { useDispatch, useSelector } from "react-redux";
import { logout, login } from "../store/authSlice";

function HomePage() {
  const dispatch = useDispatch();

  const user = localStorage.getItem("user");
  if (user) {
    dispatch(login(JSON.parse(user)));
  }

  const authStatus = useSelector((state) => state.auth.status);
  console.log(authStatus);
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
