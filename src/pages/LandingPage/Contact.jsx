import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="motion-container"
      >
        <h2 className="section-titles">Contact</h2>
        <div className="form-box">
          <form
            autoComplete="on"
            action="https://formsubmit.co/79999d6284069b3f925abe0b7cabb8fd"
            method="POST"
          >
            <div className="input-container">
              <label>
                Nom et prénom du patient
                <input
                  type="text"
                  id="name"
                  name="Nom et prénom du patient"
                  required
                  minLength={3}
                  placeholder=""
                  className="inputs"
                />
                <i className="fa-solid fa-check icon-ok"></i>
                <i className="fa-solid fa-xmark icon-error"></i>
              </label>
            </div>

            <div className="input-container">
              <label>
                Date de naissance
                <input
                  type="date"
                  name="Date de naissance"
                  min="1925-01-01"
                  max="2025-12-31"
                  required
                  className="inputs"
                />
              </label>
            </div>

            <div className="input-container">
              <label>
                Nom et prénom du parent
                <input
                  type="text"
                  id="parent-name"
                  name="Nom et prénom du parent"
                  minLength={3}
                  placeholder="Si patient mineur"
                  className="inputs"
                />
              </label>
            </div>

            <div className="input-container">
              <label>
                Téléphone
                <input
                  type="tel"
                  id="tel"
                  name="Téléphone"
                  required
                  minLength={10}
                  placeholder=""
                  className="inputs"
                />
                <i className="fa-solid fa-check icon-ok"></i>
                <i className="fa-solid fa-xmark icon-error"></i>
              </label>
            </div>

            <div className="input-container">
              <label>
                Email
                <input
                  type="email"
                  id="email"
                  name="E-mail"
                  required
                  placeholder=""
                  className="inputs"
                />
                <i className="fa-solid fa-check icon-ok"></i>
                <i className="fa-solid fa-xmark icon-error"></i>
              </label>
            </div>

            <div className="input-container">
              <fieldset className="fieldset-container">
                <legend>
                  Avez-vous une prescription médicale ? (obligatoire pour toute
                  demande de bilan et/ou suivi)
                </legend>
                <div className="radio-options">
                  <div className="radio-item">
                    <label htmlFor="prescription-oui">
                      Oui{" "}
                      <input
                        type="radio"
                        id="prescription-oui"
                        name="Prescription"
                        value="oui"
                        required
                        className="inputs"
                      />
                    </label>
                  </div>
                  <div className="radio-item">
                    <label htmlFor="prescription-non">
                      Non{" "}
                      <input
                        type="radio"
                        id="prescription-non"
                        name="Prescription"
                        value="non"
                        required
                        className="inputs"
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div className="input-container">
              <fieldset className="fieldset-container">
                <legend>
                  Avez-vous déjà un bilan psychomoteur de moins de deux ans ?
                </legend>
                <div className="radio-options">
                  <div className="radio-item">
                    <label htmlFor="bilan-oui">
                      Oui{" "}
                      <input
                        type="radio"
                        id="bilan-oui"
                        name="Bilan"
                        value="oui"
                        required
                        className="inputs"
                      />
                    </label>
                  </div>
                  <div className="radio-item">
                    <label htmlFor="bilan-non">
                      Non{" "}
                      <input
                        type="radio"
                        id="bilan-non"
                        name="Bilan"
                        value="non"
                        required
                        className="inputs"
                      />
                    </label>
                  </div>
                </div>
              </fieldset>
            </div>

            <div>
              <label>
                Motif de la demande
                <textarea
                  id="text"
                  name="Message"
                  cols="30"
                  rows="10"
                  required
                  spellCheck="true"
                  className="inputs"
                  placeholder="Précisez qui vous oriente en psychomotricité (médecin / autre professionnel de santé / école) et détaillez le motif de la demande. Précisez les bilans effectués et si un dossier MDPH est en cours ou prévu."
                ></textarea>
              </label>
            </div>
            <div>
              <button type="submit" className="submit-btn">
                Envoyer
              </button>
            </div>
            <input
              type="hidden"
              name="_next"
              value="https://julie-psychomot.vercel.app/thankyou"
            />
            <input type="hidden" name="_captcha" value="false" />
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
