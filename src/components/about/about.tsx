import { skillsdata } from '@/utils/data/skill'
import { skillsImage } from '@/utils/skill-image'
import styles from 'components/about/about.module.css'
import { useScrollAnimation } from 'hooks/useScrollAnimation'
import Marquee from "react-fast-marquee"

const AboutHomePage = () => {
    const { elementRef: headerRef, isVisible: headerVisible } = useScrollAnimation()
    const { elementRef: bioRef, isVisible: bioVisible } = useScrollAnimation({ threshold: 0.1 })
    const { elementRef: skillsRef, isVisible: skillsVisible } = useScrollAnimation({ threshold: 0.1 })

    return (
        <section id="about" className={styles.about}>
            <div className={styles.container}>
                <div
                    ref={headerRef}
                    className={`${styles.sectionHeader} ${headerVisible ? "animate-fadeInUp" : "animate-on-scroll"}`}
                >
                    <h2>About Me</h2>
                    <p>Discover my journey, passion, and the technologies I work with</p>
                </div>

                <div ref={bioRef} className={`${styles.bioSection} ${bioVisible ? "animate-fadeInUp" : "animate-on-scroll"}`}>
                    <div className={styles.bioContent}>
                        <div className={styles.bioText}>
                            <p>
                                🎓 I'm a passionate <span className={styles.highlight}>third-year Software Engineering student</span>{" "}
                                with a deep love for transforming innovative ideas into intelligent digital experiences.
                            </p>
                            <p>
                                💻 My expertise spans across <span className={styles.highlight}>full-stack development</span>, with a
                                particular focus on modern web technologies like React, Node.js, and cutting-edge AI applications
                                including <span className={styles.highlight}>Computer Vision</span> and{" "}
                                <span className={styles.highlight}>Large Language Models</span>.
                            </p>
                            <p>
                                🚀 I'm constantly driven to challenge myself and level up by building real-world solutions that make a
                                meaningful impact. Whether it's crafting seamless user interfaces or developing intelligent backend
                                systems, I approach every project with curiosity and dedication.
                            </p>
                            <p>
                                ☕ When I'm not coding, you'll find me exploring the latest tech trends or enjoying a good cup of coffee while brainstorming the next big idea.
                            </p>
                        </div>
                        <div className={styles.bioStats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>3+</span>
                                <span className={styles.statLabel}>Years Learning</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>10+</span>
                                <span className={styles.statLabel}>Technologies</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>Projects Built</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div
                    ref={skillsRef}
                    className={`${styles.skillsSection} ${skillsVisible ? "animate-fadeInUp" : "animate-on-scroll"}`}
                >
                    <h3>My Tech Stack</h3>
                    <p className={styles.skillsDescription}>Technologies and tools I use to bring ideas to life</p>

                    <div className={styles.skillsContainer}>
                        <div className={styles.skillsMarquee}>
                            <Marquee
                                gradient={true}
                                gradientColor="var(--bg-secondary)"
                                gradientWidth={50}
                                speed={60}
                                pauseOnHover={true}
                                pauseOnClick={true}
                                delay={0}
                                play={true}
                                direction="left"
                                loop={0}
                                autoFill={true}
                            >
                                {skillsdata.map((skill, id) => (
                                    <div className={styles.skillItem} key={id}>
                                        <div className={styles.skillIconWrapper}>
                                            <img
                                                src={skillsImage(skill) || "/placeholder.svg?height=64&width=64"}
                                                alt={skill}
                                                className={styles.skillIcon}
                                            />
                                        </div>
                                        <span className={styles.skillName}>{skill}</span>
                                    </div>
                                ))}
                            </Marquee>
                        </div>

                        <div className={styles.skillsMarquee}>
                            <Marquee
                                gradient={true}
                                gradientColor="var(--bg-secondary)"
                                gradientWidth={50}
                                speed={60}
                                pauseOnHover={true}
                                pauseOnClick={true}
                                delay={0}
                                play={true}
                                direction="right"
                                loop={0}
                                autoFill={true}
                            >
                                {[...skillsdata].reverse().map((skill, id) => (
                                    <div className={styles.skillItem} key={`reverse-${id}`}>
                                        <div className={styles.skillIconWrapper}>
                                            <img
                                                src={skillsImage(skill) || "/placeholder.svg?height=64&width=64"}
                                                alt={skill}
                                                className={styles.skillIcon}
                                            />
                                        </div>
                                        <span className={styles.skillName}>{skill}</span>
                                    </div>
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutHomePage;