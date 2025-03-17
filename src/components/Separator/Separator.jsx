import React from "react";
import styles from "./Separator.module.css";

export const Separator = () => {
  return (
    <div className={styles.separatorWrapper}>
      <div className={styles.binaryRain}>
        {[...Array(20)].map((_, index) => (
          <span key={index} className={styles.binaryChar}>
            {Math.random() > 0.5 ? "1" : "0"}
          </span>
        ))}
      </div>

      <div className={styles.circuitGlow}></div>
      
      <div className={styles.glitchText}>EXIT CODE 0: NO ERRORS DETECTED. BYE!_</div>
      
      <div className={styles.circuitGlow}></div>
      
      <div className={styles.binaryRain}>
        {[...Array(20)].map((_, index) => (
          <span key={index} className={styles.binaryChar}>
            {Math.random() > 0.5 ? "1" : "0"}
          </span>
        ))}
      </div>
    </div>
  );
};
