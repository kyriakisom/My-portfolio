import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import { IoGlobeOutline } from "react-icons/io5"; // Importing the icon for the language switcher

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [language, setLanguage] = useState(localStorage.getItem("language") || "en");
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem("language", lang);
    setIsOpen(false); // Close dropdown after selection
    window.location.reload(); // Reload to apply changes
  };

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        <img 
          src="/favicon.ico" 
          alt="logo" 
          className={styles.logo} 
        />
        Kyriaki Somatopoulou
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Skills/Interests</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#contact">Contact</a></li>
          
          {/* Language Switcher
          <li className={styles.languageSwitcher}>
            <button className={styles.switcherButton} onClick={() => setIsOpen(!isOpen)}>
              <IoGlobeOutline className={styles.icon} /> {language === "en" ? "English" : "Greek"} ▼
            </button>
            
            {isOpen && (
              <ul className={styles.dropdownMenu}>
                <li onClick={() => toggleLanguage("en")}>🇺🇸 English</li>
                <li onClick={() => toggleLanguage("gr")}>🇬🇷 Greek</li>
              </ul>
            )}
          </li> */}
        </ul>
      </div>
    </nav>
  );
};
