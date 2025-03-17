import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      <div className={styles.content}>
        
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
          <img  src={getImageUrl("about/location.png")}  alt="Cursor icon"  style={{ width: "50px", height: "auto" }} />

            <div className={styles.aboutItemText}>
              <h3>Location</h3>
              <p>
               I'm from Samos, Greece- a beautiful island, located in the Northern Aegean Sea, from a small town named "Karlovasi". 
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
          <img  src={getImageUrl("about/education.png")}  alt="Cursor icon"  style={{ width: "50px", height: "auto" }} />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I have recently graduated from the Aegean University, from the Department of Information and Communication Systems Engineering (ICSD) | Master Integrated - 5 year carriculum (2019-2024)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/certification.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Certifications</h3>
              <p>
               English language Level C2 (Proficiency) -Michigan University(2017) 
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/work.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Work Experience</h3>
              <p>
             
              Internship as Software Engineer via ESPA in google cloud APIs using javascript script( 01/07/2023 - 31/08/2023 )

              </p>
              
            </div>
            
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cat.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Proud cat owner</h3>
              <p>
              "There's nothing like the quiet purr of a cat to make everything feel right in the world." 
             
              </p>
              
            </div>
            
          </li>
        </ul>
      </div>
    </section>
  );
};
