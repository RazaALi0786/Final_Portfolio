import styles from "./ProjectsStyles.module.css";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          link="https://github.com/RazaALi0786/E-Commerce-BackEnd"
          h3="E-Commerce"
          p="Backend for e-commerce website"
        />
        <ProjectCard
          link="https://github.com/RazaALi0786/Valorant"
          h3="ValPal"
          p="Valorant wiki"
        />
        <ProjectCard
          link="https://github.com/RazaALi0786/AI-SaaS-Chat-Bot-API"
          h3="Chat gtp"
          p="AI-Bot-Backend"
        />
        <ProjectCard
          link="https://github.com/RazaALi0786/AI-SaaS-Chat-Bot-UI"
          h3="Chat gtp"
          p="AI-Bot-UI"
        />
      </div>
    </section>
  );
}

export default Projects;
