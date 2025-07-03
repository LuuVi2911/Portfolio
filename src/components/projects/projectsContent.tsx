import { useScrollAnimation } from "hooks/useScrollAnimation";
import styles from "components/projects/projects.module.css";
import { ExternalLink, Github, Star } from "lucide-react";
import { projectsData } from "@/utils/data/project";

const Projects = () => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: gridRef, isVisible: gridVisible } = useScrollAnimation({
    threshold: 0.1,
  });
  const projects = projectsData;

  const getCategoryColor = (category: string) => {
    const colors = {
      "Web Development": "#3b82f6",
      "AI/ML": "#8b5cf6",
      Mobile: "#10b981",
      "Full Stack": "#f59e0b",
    };
    return colors[category as keyof typeof colors] || "#6b7280";
  };

  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} ${
            headerVisible ? "animate-fadeInUp" : "animate-on-scroll"
          }`}
        >
          <h2>My Projects</h2>
          <p>A showcase of my recent work and personal projects</p>
        </div>

        <div ref={gridRef} className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${styles.projectCard} ${
                project.featured ? styles.featured : ""
              } ${
                gridVisible
                  ? `animate-slideInUp animate-delay-${(index + 1) * 100}`
                  : "animate-on-scroll"
              }`}
            >
              {project.featured && (
                <div className={styles.featuredBadge}>
                  <Star className={styles.starIcon} />
                  <span>Featured</span>
                </div>
              )}

              <div className={styles.projectImage}>
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                />
                <div className={styles.imageOverlay}>
                  <div className={styles.overlayContent}>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.overlayLink}
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github className={styles.overlayIcon} />
                    </a>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.overlayLink}
                        aria-label={`View ${project.title} live demo`}
                      >
                        <ExternalLink className={styles.overlayIcon} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className={styles.projectContent}>
                <div className={styles.projectHeader}>
                  <h3>{project.title}</h3>
                  <div
                    className={styles.categoryBadge}
                    style={{
                      backgroundColor: getCategoryColor(project.category),
                    }}
                  >
                    {project.category}
                  </div>
                </div>

                <p className={styles.projectDescription}>
                  {project.description}
                </p>

                <div className={styles.tags}>
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                    aria-label={`View ${project.title} source code`}
                  >
                    <Github className={styles.icon} /> Code
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className={styles.icon} /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;
