import React from "react";

import styles from "./Front.module.css";
import skills from "../../data/front.json";
import { getImageUrl } from "../../utils";

export const Front = () => {
  return (
    <section className={styles.container} id="front">
       <section className={styles.containers} id="front"> 
      <h2 className={styles.title}>Frontend</h2>
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
