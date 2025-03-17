import React, { useState } from 'react';
import styles from './ProjectCard.module.css';
import { getImageUrl } from '../../utils';
import { FaExternalLinkAlt, FaCode } from 'react-icons/fa';

export const ProjectCard = ({ project: { title, imageSrc, description, skills, demo, source } }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImageWrapper}>
        <img src={getImageUrl(imageSrc)} alt={title} className={styles.projectImage} />
      </div>

      <div className={styles.projectContent}>
        <h3 className={styles.projectTitle}>{title}</h3>

        <div className={styles.projectSkills}>
          {skills.map((skill, index) => (
            <span key={index} className={styles.projectSkill}>
              {skill}
            </span>
          ))}
        </div>

        <div className={styles.projectLinks}>
          {/* <a href={demo} className={styles.projectButton} target="_blank" rel="noopener noreferrer">
            <FaExternalLinkAlt /> Demo
          </a> */}
          <a href={source} className={styles.projectButton} target="_blank" rel="noopener noreferrer">
            <FaCode /> Code
          </a>
        </div>

        <button 
          onClick={() => setShowDescription(!showDescription)} 
          className={styles.showDescriptionButton}
        >
          {showDescription ? "Hide Details" : "Show Details"}
        </button>

        <div className={`${styles.projectDescription} ${showDescription ? styles.show : styles.hide}`}>
          {description}
        </div>
      </div>
    </div>
  );
};
