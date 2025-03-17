import React from "react";

import styles from "./Database.module.css";
import skills from "../../data/database.json";
import { getImageUrl } from "../../utils";

export const Database = () => {
  return (
    <section className={styles.container} id="database">
    <section className={styles.containers} id="database"> 

      <h2 className={styles.title}> Databases </h2>
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
