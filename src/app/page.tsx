"use client";
import { useEffect } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Jumbotron from "./components/Jumbotron";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section>
      <Jumbotron />
      <About />
      <Projects />
      <Contact />
    </section>
  );
}
