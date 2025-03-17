import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <h2>Let's Connect</h2>
        <p>Reach out to me via email or follow me on my socials!</p>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
            <a href="mailto:kyriakisomatop@gmail.com">Email Me</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIn icon" />
            <a href="https://www.linkedin.com/in/kyriaki-somatopoulou-911b22209/">LinkedIn</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="GitHub icon" />
            <a href="https://github.com/kyriakisom">GitHub</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
