import React from "react";

import PsychomotAI from "../../assets/IMG/PHOTOS/PsychomotAI.webp";

const QuiSuisJe = () => {
  return (
    <section id="quisuisje" className="quisuisje">
      <h2 className="section-titles">Qui suis-je ?</h2>
      <div className="quisuisje-container">
        <div className="text-container">

            <p className="text-formations">
              Psychomotricienne Diplômée d’Etat de l’Institut de Formation de la
              Pitié-Salpêtrière (Sorbonne Universités) en 2019, j’ai commencé
              par travailler au sein d’un Service d’Education Spécialisée et de
              Soin A Domicile (SESSAD) pour enfants déficients moteurs et
              polyhandicapés.
            </p>
            <p className="text-formations">
              En Janvier 2023, j’ouvre mon cabinet libéral à Bonneville.
            </p>
            <h3 className="h3-quisuisje">Formations complémentaires :</h3>
            <ul>
            <li className="li-formations">
              - Bonne nuit les petits, Accompagnement normal et problématique du
              coucher et du sommeil chez l’enfant - Formation en e-learning
              (Oct-Opus formations) - Octobre 2024
            </li>
            <li className="li-formations">
              - Rééducation psychomotrice et TND - Formation en distanciel (Go
              élan) - Août 2024
            </li>
            <li className="li-formations">
              - La guidance parentale de type Barkley - Formation en distanciel
              (Go élan) - Juin 2024
            </li>
            <li className="li-formations">
              - Développer et accompagner les habiletés parentales : des outils
              pour la régulation de l'attention des émotions et des
              comportements - Formation en e-learning (Oct-Opus formations) -
              Décembre 2023
            </li>
            <li className="li-formations">
              - Profil sensoriel de Dunn 2 (Pearson)- Formation en e-learning -
              Novembre 2023
            </li>
          </ul>
        </div>

        <div className="img-container">
          <img
            src={PsychomotAI}
            title="Psychomotricienne"
            alt="Psychomotricienne"
            className="img-psychomot"
          />
        </div>
      </div>
    </section>
  );
};

export default QuiSuisJe;
