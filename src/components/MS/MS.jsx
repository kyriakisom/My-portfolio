import React from "react";

import styles from "./MS.module.css";
import skills from "../../data/ms.json";
import { getImageUrl } from "../../utils";

export const MS = () => {
  return (
    <section className={styles.container} id="tools">
    <section className={styles.containers} id="tools"> 

      <h2 className={styles.title}> Tools </h2>
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
