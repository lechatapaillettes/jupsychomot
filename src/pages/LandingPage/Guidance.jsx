import React from "react";
import { motion } from "framer-motion";

import SalleGuidance from "../../assets/IMG/PHOTOS/SalleGuidance.jpg";

const Guidance = () => {
  return (
    <section id="guidance" className="guidance">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="motion-container"
      >
        <h2 className="section-titles">
          La guidance parentale de type Barkley
        </h2>
        <div className="guidance-container">
          <div className="img-container">
            <img
              src={SalleGuidance}
              title="Salle de psychomotricité avec bureau et chaises pour guidance parentale"
              alt="Salle de psychomotricité avec bureau et chaises pour guidance parentale"
              className="img-guidance"
            />
          </div>

          <div className="text-container">
            <p className="text-guidance">
              Recommandée par la Haute Autorité de Santé, la guidance parentale
              (également appelée Programme d’Entrainement aux Habiletés
              Parentales - PEHP) est une méthode visant à atténuer les
              comportements problématiques d’un enfant au quotidien, en
              valorisant les comportements attendus.
            </p>
            <p className="text-guidance">
              Je suis formée à la guidance parentale de type Barkley, destinée
              aux parents d’enfants TDA/H (Trouble de Déficit de l’Attention
              avec ou sans Hyperactivité) avec difficultés comportementales ou
              TOP (Trouble Oppositionnel avec Provocation).
            </p>
            <p className="text-guidance">
              Je la propose en individuel (pour un couple parental, ou deux si
              les parents sont séparés) au cabinet, en cinq ateliers de deux
              heures chacun. Un sixième atelier est programmé deux/trois mois
              plus tard pour faire un point sur l’évolution après la mise en
              place des différents outils.
            </p>
            <p className="text-guidance">
              Les ateliers sont généralement sous cet ordre :
            </p>
            <ul>
              <li className="li-guidance">
                Atelier 1: Psychoéducation: le TDAH et le TOP + la
                non-compliance
              </li>
              <li className="li-guidance">
                Atelier 2: Le moment spécial + le tableau de valorisation
              </li>
              <li className="li-guidance">
                Atelier 3: Donner un ordre efficace et porter une attention
                positive + la gestion des écrans
              </li>
              <li className="li-guidance">
                Atelier 4: Le Time-Out + les sorties
              </li>
              <li className="li-guidance">
                Atelier 5: Les devoirs + anticipation
              </li>
              <li className="li-guidance">Atelier 6: Retours</li>
            </ul>
            <p className="text-guidance">
              N’hésitez pas à me contacter pour toute information
              complémentaire.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Guidance;
