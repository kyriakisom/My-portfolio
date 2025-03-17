import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Contact } from "./components/Contact/Contact";
import { Experience } from "./components/Experience/Experience";
// import { Front } from "./components/Front/Front";
// import { Backend } from "./components/Backend/Backend";
// import { Languages } from "./components/Languages/Languages";
// import { Security } from "./components/Security/Security";
// import { Tools } from "./components/Tools/Tools";
// import { Database } from "./components/Database/Database";
import { Hero } from "./components/Hero/Hero";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";
import { Hobbies } from "./components/Hobbies/Hobbies";
import { BackToTop } from "./components/BackToTop/BackToTop";
import { Separator } from "./components/Separator/Separator";
import { ThemeSeparator } from "./components/ThemeSeparator/ThemeSeparator";
import { SimpleSeparator } from "./components/SimpleSeparator/SimpleSeparator";
import { Skills } from "./components/Skills/Skills";




function App() {
  return (
    <div className={styles.App}>
     
      <Navbar />
      <Hero />
      <About />
      <ThemeSeparator />
      <Experience />
      {/* <SimpleSeparator /> */}
      {/* <Front /> 
      <SimpleSeparator />
      <Backend />
      <SimpleSeparator />
      <Languages />
      <SimpleSeparator />
      <Security />
      <SimpleSeparator />
      <Tools />
      <SimpleSeparator />
      <Database /> */}
      <Skills />
      <ThemeSeparator />
      <Projects />
      <ThemeSeparator />
      <Hobbies />
      <ThemeSeparator />
      <Contact />
      <Separator />
      <BackToTop />
    </div>
  );
}

export default App;
