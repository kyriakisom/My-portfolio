import React from "react";

import styles from "./Hobbies.module.css";
import { getImageUrl } from "../../utils";

export const Hobbies = () => {
  return (
    <section className={styles.container} id="hobbies">
      <h2 className={styles.title}>My Hobbies</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img  src={getImageUrl("hobbies/painting.png")}  alt="Cursor icon"  style={{ width: "50px", height: "auto" }} />

            <div className={styles.aboutItemText}>
              <h3>Drawing/Painting</h3>
             
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img  src={getImageUrl("hobbies/ring.png")}  alt="Cursor icon"  style={{ width: "50px", height: "auto" }} />
            <div className={styles.aboutItemText}>
              <h3>Jewelry making</h3>
             
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("hobbies/knitting.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Knitting</h3>
             
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("hobbies/crafts.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Hand-crafting</h3>
             
              
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("hobbies/music.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Music</h3>
             
              
            </div>
          </li>
    

        </ul>
      </div>
    </section>
  );
};
