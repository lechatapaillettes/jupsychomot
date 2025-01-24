import React from "react";

import { NavLink } from "react-router-dom";

const ThankYou = () => {
  return (
    <section id="ThankYou" className="ThankYou">
      <div className="ThankYou-container">
        <h2 className="ThankYou-title">Merci,</h2>
        <h3 className="ThankYou-text">Votre demande a bien été envoyée.</h3>

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

export default ThankYou;
