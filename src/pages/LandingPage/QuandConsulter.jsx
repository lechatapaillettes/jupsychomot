import React from "react";

import SallePsychomotBureauAI from "../../assets/IMG/PHOTOS/SallePsychomotBureauAI.webp";

const QuandConsulter = () => {
  return (
    <section id="quandconsulter" className="quandconsulter">
      <h2 className="section-titles">
        Quand consulter un·e psychomotricien·ne ?
      </h2>
      <div className="quandconsulter-container">
        <div className="text-container">
          <p className="text-qd-consulter">
            Plusieurs types d’accompagnements sont possibles selon les besoins
            rencontrés :
          </p>
          <ul>
            <li className="li-qd-consulter">
              - Éducation psychomotrice = soutien à la mise en place de piliers
              solides pour une bonne intégration des fonctions psychomotrices
              Soutien à la parentalité, éveil psychomoteur du tout-petit
            </li>
            <li className="li-qd-consulter">
              - Rééducation psychomotrice = action sur un/des piliers ou leurs
              liens pour les renforcer et atténuer des difficultés du quotidien
              Rééducation de l’écriture, apprentissage de nouvelles praxies,
              gestion de l’impulsivité, …
            </li>
            <li className="li-qd-consulter">
              - Thérapie psychomotrice = trouver un équilibre entre les piliers
              pour favoriser un bien être global Gestion émotionnelle,
              compensations de spécificités sensorielles, conscience corporelle…
            </li>
          </ul>
          <p className="text-qd-consulter">
            Un bilan psychomoteur est préalable à tout suivi de rééducation ou
            de thérapie psychomotrice. Il permet de faire le point sur les
            compétences du patient et ses difficultés pour pouvoir orienter la
            prise en soin sur des axes de travail. Des objectifs spécifiques
            sont ensuite déterminés en accord avec le patient, sa famille et les
            besoins rencontrés au quotidien.
          </p>
          <p className="text-qd-consulter">
            Les outils et activités proposés en séance sont, le plus souvent
            possible, liés aux centres d’intérêts des patients (dessin, danse,
            musique, sport, jeux de société,… ). La motivation est une notion
            essentielle dans un suivi en psychomotricité !
          </p>
          <h3 className="text-qd-consulter h3-qd-consulter">Méthodes utilisées :</h3>
          <ul>
            <li className="li-qd-consulter">
              - Programme PEP’S - rééducation de l’écriture
            </li>
            <li className="li-qd-consulter">- Méthodes CO-OP et NTT</li>
            <li className="li-qd-consulter">- apprentissage de praxies</li>
            <li className="li-qd-consulter">- Stratégies metacognitives</li>
          </ul>
        </div>

        <div className="img-container">
          <img
            src={SallePsychomotBureauAI}
            title="Salle de psychomotricité avec bureau"
            alt="Salle de psychomotricité avec bureau"
            className="img-bureau"
          />
        </div>
      </div>
    </section>
  );
};

export default QuandConsulter;
