import React from "react";

import { motion } from "framer-motion";

import SallePsychomotAI from "../../assets/IMG/PHOTOS/SallePsychomotAI.webp";

const Psychomot = () => {
  return (
    <section id="psychomot" className="psychomot">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="motion-container"
      >
        <h2 className="section-titles">Qu'est-ce que la psychomotricité ?</h2>
        <div className="psychomot-container">
          <div className="img-container">
            <img
              src={SallePsychomotAI}
              title="Salle de psychomotricité"
              alt="Salle de psychomotricité"
              className="img-salle"
            />
          </div>

          <div className="text-container">
            <p className="text-psychomot">
              La psychomotricité est une profession du paramédical. Je vous
              recevrai au cabinet sur prescription médicale (ordonnance du
              médecin, pédiatre, psychiatre) pour un bilan psychomoteur et un
              suivi si nécessaire.
            </p>

            <p className="text-psychomot">
              En tant que psychomotricienne, je suis spécialiste des liens entre
              la cognition (savoir faire), la motricité (pouvoir faire), la
              sensorialité (ressentir dans le corps) et l’affectivité (vouloir
              faire/se sentir capable). Ces quatre piliers, associés à la
              maturation neurologique, sont le fondement des fonctions
              psychomotrices: tonus, motricité globale et motricité fine,
              adresse, organisation spatiale et temporelle…
            </p>

            <p className="text-psychomot">
              Toute personne rencontrant des difficultés dans un ou plusieurs de
              ces piliers peut être amené à consulter, à tout âge de la vie.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Psychomot;
