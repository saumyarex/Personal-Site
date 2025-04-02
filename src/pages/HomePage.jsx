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
import { logout } from "../store/authSlice";

function HomePage() {
  const dispatch = useDispatch();

  function logoutUser() {
    setTimeout(() => {
      dispatch(logout());
    }, 1000);
  }

  logoutUser();

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
