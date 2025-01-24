import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section id="NotFound" className="NotFound">
      <div className="NotFound-container">
        <h2 className="NotFound-title">404</h2>
        <h3 className="NotFound-text">Cette page n'existe pas !</h3>

        <div className="back">
          <NavLink to="/" className="back-link">
            Retour à l'accueil...
          </NavLink>
        </div>
      </div>

      <div class="background">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
};

export default NotFound;
