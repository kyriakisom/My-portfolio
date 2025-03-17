import React from "react";

import styles from "./Backend.module.css";
import skills from "../../data/backend.json";
import { getImageUrl } from "../../utils";

export const Backend = () => {
  return (
    <section className={styles.container} id="backend">
        <section className={styles.containers} id="backend"> 
      <h2 className={styles.title}>Backend</h2>
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
