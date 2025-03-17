import React from "react";

import styles from "./Security.module.css";
import skills from "../../data/security.json";
import { getImageUrl } from "../../utils";

export const Security = () => {
  return (
    <section className={styles.container} id="security">
    <section className={styles.containers} id="security"> 
      <h2 className={styles.title}> Security </h2>
      <div className={styles.content}>
        <div className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
   
      </div>
    </section>
    </section>

  );
};
