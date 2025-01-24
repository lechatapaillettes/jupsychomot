import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="section-titles">Contact</h2>
      <div className="form-box">
        <form
          autoComplete="on"
          action="https://formsubmit.co/juliedheygere.psychomot@protonmail.com"
          method="POST"
        >
          <div className="input-container">
            <label>
              Nom et prénom du patient
              <input
                type="text"
                id="name"
                name="nom"
                required
                minLength={3}
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
                name="date-naissance"
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
                name="nom-parent"
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
                name="telephone"
                required
                minLength={10}
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
                name="email"
                required
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
                  <label for="oui">
                    Oui{" "}
                    <input
                      type="radio"
                      id="prescription-oui"
                      name="prescription"
                      value="oui"
                      required
                      className="inputs"
                    />
                  </label>
                </div>
                <div className="radio-item">
                  <label for="non">
                    Non{" "}
                    <input
                      type="radio"
                      id="prescription-non"
                      name="prescription"
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
                  <label for="oui">
                    Oui{" "}
                    <input
                      type="radio"
                      id="bilan-oui"
                      name="bilan"
                      value="oui"
                      required
                      className="inputs"
                    />
                  </label>
                </div>
                <div className="radio-item">
                  <label for="non">
                    Non{" "}
                    <input
                      type="radio"
                      id="bilan-non"
                      name="bilan"
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
                name="message"
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
            value="https://lechatapaillettes.vercel.app/thankyou"
          />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
