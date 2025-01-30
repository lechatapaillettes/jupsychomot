import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

import { AiOutlineMenu } from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";
import { Fade } from "react-awesome-reveal";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("");

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

  const handleNavLinkClick = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop,
      });
    }

    setIsMenuOpen(false);
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isXMark, setIsXMark] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsXMark(!isXMark);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsXMark(false);
  };

  return (
    <nav className="nav">
      {/* Navbar Desktop */}

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

      {/* Navbar Mobile */}

      <div className="nav-mobile">
        <div className="burger-menu">
          <div className={`burger-icon-container ${isMenuOpen ? "open" : ""}`}>
            <HiOutlineXMark
              className={`burger-icon burger-icon-close ${
                isMenuOpen ? "" : "burger-icon-hidden"
              }`}
              onClick={toggleMenu}
            />
            <AiOutlineMenu
              className={`burger-icon burger-icon-open ${
                isMenuOpen ? "burger-icon-hidden" : ""
              }`}
              onClick={toggleMenu}
            />
          </div>
        </div>

        {isMenuOpen && (
          <Fade cascade damping={0.1}>
            <ul className="burger-open">
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#accueil"
                  onClick={(e) => handleNavLinkClick(e, "accueil", closeMenu)}
                >
                  <p>Accueil</p>
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#psychomot"
                  onClick={(e) => handleNavLinkClick(e, "psychomot", closeMenu)}
                >
                  <p>La psychomotricité</p>
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#quandconsulter"
                  onClick={(e) =>
                    handleNavLinkClick(e, "quandconsulter", closeMenu)
                  }
                >
                  <p>Quand consulter ?</p>
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#guidance"
                  onClick={(e) => handleNavLinkClick(e, "guidance", closeMenu)}
                >
                  <p>Guidance Parentale</p>
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#quisuisje"
                  onClick={(e) => handleNavLinkClick(e, "quisuisje", closeMenu)}
                >
                  <p>Qui suis-je ?</p>
                </NavLink>
              </li>
              <li className="burger-item">
                <NavLink
                  className="burger-link"
                  to="/#contact"
                  onClick={(e) => handleNavLinkClick(e, "contact", closeMenu)}
                >
                  <p>Contact</p>
                </NavLink>
              </li>
            </ul>
          </Fade>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
