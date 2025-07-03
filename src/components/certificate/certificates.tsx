import { useScrollAnimation } from "hooks/useScrollAnimation";
import styles from "components/certificate/certificates.module.css";
import { Award, ExternalLink, Brain, Code } from "lucide-react";
import {
  getCertificatesByCategory,
  getAllCategories,
} from "@/utils/data/certificates";

const Certificates = () => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: categoriesRef, isVisible: categoriesVisible } =
    useScrollAnimation({ threshold: 0.1 });

  const categories = getAllCategories();

  const getCategoryIcon = (category: string) => {
    return category === "AI/ML" ? (
      <Brain className={styles.categoryIcon} />
    ) : (
      <Code className={styles.categoryIcon} />
    );
  };

  const getCategoryTitle = (category: string) => {
    return category === "AI/ML"
      ? "Artificial Intelligence & Machine Learning"
      : "Software Engineering";
  };

  const getCategoryDescription = (category: string) => {
    return category === "AI/ML"
      ? "Certifications in AI, Machine Learning, and Data Science"
      : "Certifications in Software Development and Engineering";
  };

  return (
    <section className={styles.certificates}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} ${
            headerVisible ? "animate-fadeInUp" : "animate-on-scroll"
          }`}
        >
          <h2>My Certificates</h2>
          <p>
            Professional certifications and achievements across different
            domains
          </p>
        </div>

        <div ref={categoriesRef} className={styles.categoriesContainer}>
          {categories.map((category, categoryIndex) => {
            const categoryCertificates = getCertificatesByCategory(category);

            return (
              <div
                key={category}
                className={`${styles.categorySection} ${
                  categoriesVisible
                    ? `animate-fadeInUp animate-delay-${categoryIndex * 200}`
                    : "animate-on-scroll"
                }`}
              >
                <div className={styles.categoryHeader}>
                  {getCategoryIcon(category)}
                  <div className={styles.categoryInfo}>
                    <h3 className={styles.categoryTitle}>
                      {getCategoryTitle(category)}
                    </h3>
                    <p className={styles.categoryDescription}>
                      {getCategoryDescription(category)}
                    </p>
                  </div>
                  <div className={styles.categoryBadge}>
                    <span className={styles.categoryCount}>
                      {categoryCertificates.length}
                    </span>
                    <span className={styles.categoryLabel}>Certificates</span>
                  </div>
                </div>

                <div className={styles.certificatesGrid}>
                  {categoryCertificates.map((cert, index) => (
                    <div
                      key={cert.id}
                      className={`${styles.certificateCard} ${
                        styles[
                          `category-${category.toLowerCase().replace("/", "-")}`
                        ]
                      } ${
                        categoriesVisible
                          ? `animate-slideInUp animate-delay-${
                              categoryIndex * 300 + (index + 1) * 100
                            }`
                          : "animate-on-scroll"
                      }`}
                    >
                      <div className={styles.certificateImage}>
                        <img
                          src={cert.image || "/placeholder.svg"}
                          alt={cert.title}
                        />
                        <div className={styles.overlay}>
                          <Award className={styles.awardIcon} />
                        </div>
                      </div>

                      <div className={styles.certificateContent}>
                        <div className={styles.certificateHeader}>
                          <h4>{cert.title}</h4>
                          <div className={styles.categoryTag}>
                            {getCategoryIcon(cert.category)}
                            <span>{cert.category}</span>
                          </div>
                        </div>

                        <div className={styles.issuerInfo}>
                          <span className={styles.issuer}>{cert.issuer}</span>
                          <span className={styles.date}>{cert.date}</span>
                        </div>

                        <p className={styles.description}>{cert.description}</p>

                        <div className={styles.skillTags}>
                          {cert.skills.map((skill, skillIndex) => (
                            <span key={skillIndex} className={styles.skillTag}>
                              {skill}
                            </span>
                          ))}
                        </div>

                        {cert.credentialUrl && (
                          <a
                            href={cert.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.credentialLink}
                          >
                            View Credential{" "}
                            <ExternalLink className={styles.linkIcon} />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
