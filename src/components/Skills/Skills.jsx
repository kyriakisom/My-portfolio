import React, { useState, useEffect } from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";

// Importing all skill categories
import backendSkills from "../../data/backend.json";
import databaseSkills from "../../data/database.json";
import languageSkills from "../../data/languages.json";
import securitySkills from "../../data/security.json";
import frontSkills from "../../data/front.json";
import toolSkills from "../../data/tools.json";
import msSkills from "../../data/ms.json";
import erpSkills from "../../data/erp.json";

const skillCategories = [
  { id: "backend", title: "Backend", skills: backendSkills },
  { id: "database", title: "Databases", skills: databaseSkills },
  { id: "erp", title: "ERP Systems", skills: erpSkills },
  { id: "languages", title: "Programming Languages", skills: languageSkills },
  { id: "ms", title: "Microsoft Office", skills: msSkills },
  { id: "security", title: "Security", skills: securitySkills },
  { id: "front", title: "Frontend", skills: frontSkills },
  { id: "tools", title: "Design & Dev Tools", skills: toolSkills },
];

const ITEMS_PER_PAGE = 1; // Show one category per page for carousel style
const AUTO_SLIDE_INTERVAL = 3000; // 3 seconds interval for automatic slide change

export const Skills = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = Math.ceil(skillCategories.length / ITEMS_PER_PAGE);

  // Automatically move to the next slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(handleNext, AUTO_SLIDE_INTERVAL);
    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, []);

  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <section className={styles.container}>
      <div className={styles.carousel}>
        {skillCategories.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE).map((category) => (
          <div key={category.id} className={styles.card}>
            <h2 className={styles.title}>{category.title}</h2>
            <div className={styles.skillsGrid}>
              {category.skills.map((skill, id) => (
                <div key={id} className={styles.skillCard}>
                  <div className={styles.skillImageContainer}>
                    <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                  </div>
                  <p>{skill.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Optional Pagination Controls */}
      <div className={styles.pagination}>
        <button onClick={handlePrev} disabled={currentPage === 0} className={styles.button}>&lt; Prev</button>
        <span className={styles.pageInfo}>Page {currentPage + 1} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages - 1} className={styles.button}>Next &gt;</button>
      </div>
    </section>
  );
};
