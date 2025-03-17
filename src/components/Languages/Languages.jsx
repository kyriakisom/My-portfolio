import React from "react";

import styles from "./Languages.module.css";
import skills from "../../data/languages.json";
import { getImageUrl } from "../../utils";

export const Languages = () => {
  return (
    <section className={styles.container} id="languages">
        <section className={styles.containers} id="languages"> 
      <h2 className={styles.title}>Programming Languages</h2>
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
