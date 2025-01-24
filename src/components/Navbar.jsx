import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

  // Función para detectar la sección activa en el viewport
  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top <= window.innerHeight / 2 &&
        rect.bottom > window.innerHeight / 2
      ) {
        currentSection = section.id;
      }
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Función para el scroll suave al hacer clic
  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });
    }
  };

  return (
    <nav className="nav">
      <div className="nav-desktop">
        <ul className="nav-list">
          <li className="nav-item">
            <a
              href="#accueil"
              className={`nav-link ${
                activeSection === "accueil" ? "active" : ""
              }`}
              onClick={(e) => handleNavLinkClick(e, "accueil")}
            >
              <p>Accueil</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#psychomot"
              className={`nav-link ${
                activeSection === "psychomot" ? "active" : ""
              }`}
              onClick={(e) => handleNavLinkClick(e, "psychomot")}
            >
              <p>La psychomotricité</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#quandconsulter"
              className={`nav-link ${
                activeSection === "quandconsulter" ? "active" : ""
              }`}
              onClick={(e) => handleNavLinkClick(e, "quandconsulter")}
            >
              <p>Quand consulter ?</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#guidance"
              className={`nav-link ${
                activeSection === "guidance" ? "active" : ""
              }`}
              onClick={(e) => handleNavLinkClick(e, "guidance")}
            >
              <p>Guidance Parentale</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#quisuisje"
              className={`nav-link ${
                activeSection === "quisuisje" ? "active" : ""
              }`}
              onClick={(e) => handleNavLinkClick(e, "quisuisje")}
            >
              <p>Qui suis-je ?</p>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#contact"
              className={`nav-link ${
                activeSection === "contact" ? "active" : ""
              }`}
              onClick={(e) => handleNavLinkClick(e, "contact")}
            >
              <p>Contact</p>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
