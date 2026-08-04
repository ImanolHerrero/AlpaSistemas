import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero.tsx";
import WhyChooseUs from "./components/whyChooseUs.tsx";
import Services from "./components/Services.tsx";
import WorkProcess from "./components/WorkProcess.tsx";
import Partner from "./components/Partner.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Hero />
    <WhyChooseUs />
    <Services />
    <WorkProcess />
    <Partner />
  </StrictMode>,
);
