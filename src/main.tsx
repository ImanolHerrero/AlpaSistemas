import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero.tsx";
import WhyChooseUs from "./components/WhyChooseUs.tsx";
import Services from "./components/Services.tsx";
import WorkProcess from "./components/WorkProcess.tsx";
import Partner from "./components/Partner.tsx";
import Navbar from "./components/Navbar.tsx";
import Contact from "./components/Contact.tsx";
import Footer from "./components/Footer.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Navbar />
    <Hero />
    <WhyChooseUs />
    <Services />
    <WorkProcess />
    <Partner />
    <Contact />
    <Footer />
  </StrictMode>,
);
