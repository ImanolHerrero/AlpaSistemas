import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Hero from "./components/Hero.tsx";
import WhyChooseUs from "./components/whyChooseUs.tsx";
import Services from "./components/Services.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Hero />
    <WhyChooseUs />
    <Services />
  </StrictMode>,
);
