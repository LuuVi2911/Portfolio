import { useScrollAnimation } from "hooks/useScrollAnimation";
import styles from "components/aboutDetailed/aboutDetailed.module.css";
import aboutGif from "assets/gif/about-detailed.gif";
import decorativeGif from "assets/gif/about-detailed-2.gif";
import musicGif from "assets/gif/about-detailed-3.gif";
import basketballGif from "assets/gif/about-detailed-4.gif";
import { useState, useEffect, useMemo } from "react";

const AboutDetailed = () => {
  const { elementRef: headerRef, isVisible: headerVisible } =
    useScrollAnimation();
  const { elementRef: contentRef, isVisible: contentVisible } =
    useScrollAnimation({ threshold: 0.1 });

  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const typewriterTexts = useMemo(
    () => [
      "Hello! My name is Luu Vi",
      "Passionate developer from Vietnam",
      "Studying in Tampere, Finland",
      "Third year at TAMK",
      "Web Development & AI/ML enthusiast",
    ],
    []
  );

  useEffect(() => {
    if (!contentVisible) return;

    const typeWriter = () => {
      let i = 0;
      let textPos = 0;
      let currentString = typewriterTexts[i];
      const speed = 100;
      const deleteSpeed = 50;
      const waitTime = 2000;

      function type() {
        setCurrentText(currentString.substring(0, textPos) + "_");

        if (textPos++ === currentString.length) {
          setTimeout(() => deleteText(), waitTime);
        } else {
          setTimeout(type, speed);
        }
      }

      function deleteText() {
        setCurrentText(currentString.substring(0, textPos) + "_");

        if (textPos-- === 0) {
          i = (i + 1) % typewriterTexts.length;
          currentString = typewriterTexts[i];
          setTimeout(type, 500);
        } else {
          setTimeout(deleteText, deleteSpeed);
        }
      }

      type();
    };

    if (!isTyping) {
      setIsTyping(true);
      typeWriter();
    }
  }, [contentVisible, isTyping, typewriterTexts]);

  return (
    <section className={styles.aboutDetailed}>
      <div className={styles.container}>
        <div
          ref={headerRef}
          className={`${styles.sectionHeader} ${
            headerVisible ? "animate-fadeInUp" : "animate-on-scroll"
          }`}
        >
          <h1>
            Know Who <span className={styles.highlight}>I'M</span>
          </h1>
        </div>

        {/* Main Content Grid */}
        <div
          ref={contentRef}
          className={`${styles.mainContent} ${
            contentVisible ? styles.animated : ""
          }`}
        >
          {/* About Me Section with Avatar */}
          <div
            className={`${styles.aboutSection} ${
              contentVisible ? "animate-fadeInLeft" : "animate-on-scroll"
            }`}
          >
            <div className={styles.sectionTitle}>
              <h2>About Me</h2>
            </div>

            <div className={styles.interactiveIntro}>
              <div className={styles.typingContainer}>
                <span className={styles.typedText}>{currentText}</span>
              </div>
            </div>

            <div className={styles.introduction}>
              <div className={styles.textBlock}>
                <p className={styles.highlightOnHover}>
                  Hello! My name is <span className={styles.name}>Luu Vi</span>,
                  and I'm a{" "}
                  <span className={styles.emphasis}>passionate developer</span>{" "}
                  with a love for{" "}
                  <span className={styles.emphasis}>coding and technology</span>
                  .
                </p>
              </div>

              <div className={styles.textBlock}>
                <p className={styles.highlightOnHover}>
                  I'm currently studying at{" "}
                  <span className={styles.university}>
                    Tampere University of Applied Sciences
                  </span>{" "}
                  in my <span className={styles.year}>third year</span>.
                </p>
              </div>

              <div className={styles.textBlock}>
                <p className={styles.highlightOnHover}>
                  My interests change greatly depending on my environment, but
                  at the moment, I am most interested in{" "}
                  <span className={styles.interest}>web development</span> and{" "}
                  <span className={styles.interest}>AI/ML</span>.
                </p>
              </div>
            </div>
          </div>

          {/* About Avatar Section */}
          <div
            className={`${styles.avatarSection} ${
              contentVisible ? "animate-fadeInRight" : "animate-on-scroll"
            }`}
          >
            <div className={styles.avatarContainer}>
              <div className={styles.avatarWrapper}>
                <img
                  src={aboutGif || "/placeholder.svg"}
                  alt="LuuVi Coding Animation"
                  className={styles.avatarGif}
                />
                <div className={styles.avatarOverlay}>
                  <div className={styles.floatingElements}>
                    <div className={styles.floatingElement}>💻</div>
                    <div className={styles.floatingElement}>🚀</div>
                    <div className={styles.floatingElement}>⚡</div>
                    <div className={styles.floatingElement}>🎯</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech & Learning Section */}
          <div
            className={`${styles.techSection} ${
              contentVisible ? "animate-fadeInLeft" : "animate-on-scroll"
            }`}
          >
            <div className={styles.sectionTitle}>
              <h2>Tech & Learning</h2>
            </div>

            <div className={styles.skillsContent}>
              <div className={styles.textBlock}>
                <p className={styles.highlightOnHover}>
                  My skillset is quite{" "}
                  <span className={styles.emphasis}>wide-ranging</span>; I don't
                  focus too heavily on frameworks or languages. I like to choose
                  the <span className={styles.emphasis}>best tools</span> to
                  deliver the{" "}
                  <span className={styles.emphasis}>best product</span> as
                  quickly as possible.
                </p>
              </div>

              <div className={styles.textBlock}>
                <p className={styles.highlightOnHover}>
                  I'm a <span className={styles.emphasis}>quick learner</span>,
                  especially in{" "}
                  <span className={styles.emphasis}>
                    fast-paced environments
                  </span>{" "}
                  where I'm able to hone skills on the fly to improve and
                  deliver on time.
                </p>
              </div>

              <div className={styles.textBlock}>
                <p className={styles.highlightOnHover}>
                  My love for tech goes{" "}
                  <span className={styles.emphasis}>beyond the classroom</span>.
                </p>
              </div>
            </div>

            <div className={styles.activities}>
              <p className={styles.activitiesTitle}>
                Outside of tech, you'll typically find me:
              </p>

              <div className={styles.activitySection}>
                <div className={styles.activityItem}>
                  <span className={styles.emoji}>🏀</span>
                  <span className={styles.activityText}>
                    Playing sports, especially basketball
                  </span>
                </div>
                <div className={styles.activityGifContainer}>
                  <img
                    src={basketballGif || "/placeholder.svg"}
                    alt="Basketball Animation"
                    className={styles.activityGif}
                  />
                </div>
              </div>

              <div className={styles.activitySection}>
                <div className={styles.activityItem}>
                  <span className={styles.emoji}>🎵</span>
                  <span className={styles.activityText}>
                    Listening & discovering live music
                  </span>
                </div>
                <div className={styles.activityGifContainer}>
                  <img
                    src={musicGif || "/placeholder.svg"}
                    alt="Music Animation"
                    className={styles.activityGif}
                  />
                </div>
              </div>
            </div>

            <div className={styles.quote}>
              <blockquote>
                <p className={styles.quoteText}>
                  "Pursuing Your Dreams Is How You Become Homeless ~.~"
                </p>
                <cite className={styles.quoteAuthor}>--Jimmy O Yang</cite>
              </blockquote>
            </div>
          </div>

          {/* Decorative GIF Section */}
          <div
            className={`${styles.decorativeSection} ${
              contentVisible ? "animate-fadeInRight" : "animate-on-scroll"
            }`}
          >
            <div className={styles.decorativeContainer}>
              <div className={styles.decorativeWrapper}>
                <img
                  src={decorativeGif || "/placeholder.svg"}
                  alt="Exploration Animation"
                  className={styles.decorativeGif}
                />
                <div className={styles.decorativeOverlay}>
                  <div className={styles.decorativeText}>
                    <span className={styles.decorativeLabel}>Exploring</span>
                    <span className={styles.decorativeSubtext}>
                      New Experiences
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutDetailed;
