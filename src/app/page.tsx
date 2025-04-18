"use client";
import { useEffect, useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Jumbotron from "./components/Jumbotron";
import Projects from "./components/Projects";
import AOS from "aos";
import "aos/dist/aos.css";
import SplashScreen from "./components/SplashScreen";
import Navbar from "./components/Navbar";
import LinksLeft from "./components/LinksLeft";
import LinksRight from "./components/LinksRight";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [disableSpinner, setDisableSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setDisableSpinner(false);
    }, 2000);
    AOS.init();
  }, []);

  return (
    <>
      {disableSpinner ? (
        <SplashScreen />
      ) : (
        <>
          <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <LinksLeft />
          <main
            onClick={() => setMenuOpen(false)}
            className={`${
              menuOpen ? "z-30 relative blur-sm md:blur-none" : ""
            } `}
          >
            {" "}
            <Jumbotron />
            <Experience />
            <About />
            <Projects />
            <Contact />{" "}
          </main>{" "}
          <LinksRight />
          <Footer />
        </>
      )}
    </>
  );
}
