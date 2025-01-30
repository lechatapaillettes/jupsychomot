import React from "react";

import { motion } from "framer-motion";

const Welcome = () => {
  return (
    <section id="accueil" className="accueil">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="motion-container"
      >
        <div className="intro-container">
          <h1 className="intro-name">Julie D'Heygere</h1>
          <h2 className="intro-title">Psychomotricienne, Diplômée d'État</h2>
        </div>
      </motion.div>
    </section>
  );
};

export default Welcome;
