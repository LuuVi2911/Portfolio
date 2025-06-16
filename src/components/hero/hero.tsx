import { useScrollAnimation } from 'hooks/useScrollAnimation'
import { Download } from 'lucide-react'
import CodeEditor from 'components/codeEditor/codeEditor'
import vLogo from 'assets/images/V.png'
import lLogo from 'assets/images/L.png'
import styles from 'components/hero/hero.module.css'
import { useEffect, useState } from 'react'

const Hero = () => {
    const { elementRef: contentRef, isVisible: contentVisible } = useScrollAnimation()
    const { elementRef: imageRef, isVisible: imageVisible } = useScrollAnimation({ threshold: 0.2 })
    const [currentText, setCurrentText] = useState("")

    const typewriterTexts = ["Software Engineer", "AI Enthusiast", "Full Stack Developer", "Coffee Drinker"]

    useEffect(() => {
        const typeWriter = () => {
            let i = 0
            let textPos = 0
            let currentString = typewriterTexts[i]
            const speed = 100
            const deleteSpeed = 50
            const waitTime = 2000

            function type() {
                setCurrentText(currentString.substring(0, textPos) + "_")

                if (textPos++ === currentString.length) {
                    setTimeout(() => deleteText(), waitTime)
                } else {
                    setTimeout(type, speed)
                }
            }
            function deleteText() {
                setCurrentText(currentString.substring(0, textPos) + "_")

                if (textPos-- === 0) {
                    i = (i + 1) % typewriterTexts.length
                    currentString = typewriterTexts[i]
                    setTimeout(type, 500)
                } else {
                    setTimeout(deleteText, deleteSpeed)
                }
            }
            type()
        }

        typeWriter()
    }, [])

    const roles = ["JavaScript/TypeScript", "Java", "Python"]
    return (
        <section id="home" className={styles.hero}>
            <div className={styles.container}>
                <div
                    ref={contentRef}
                    className={`${styles.content} ${contentVisible ? "animate-fadeInLeft" : "animate-on-scroll"}`}
                >
                    <div className={styles.rolesList}>
                        {roles.map((role, index) => (
                            <span
                                key={index}
                                className={`${styles.role} ${contentVisible ? `animate-fadeInUp animate-delay-${(index + 1) * 100}` : "animate-on-scroll"}`}
                            >
                                {role}
                            </span>
                        ))}
                    </div>

                    <h1>
                        Hi, I'm{" "}
                        <span className={styles.nameContainer}>
                            <img src={lLogo} alt="L" className={styles.letterL} />
                            uu <img src={vLogo} alt="V" className={styles.letterV} />i
                        </span>
                    </h1>
                    <h2>{currentText}</h2>
                    <p>
                        I'm a third-year{" "}
                        <span className={styles.emphasis} data-keyword="software-engineering">
                            Software Engineering
                        </span>{" "}
                        student who loves turning ideas into{" "}
                        <span className={styles.emphasis} data-keyword="intelligent">
                            intelligent
                        </span>{" "}
                        digital experiences. With a focus on{" "}
                        <span className={styles.emphasis} data-keyword="React">
                            React
                        </span>
                        ,{" "}
                        <span className={styles.emphasis} data-keyword="Node.js">
                            Node.js
                        </span>
                        ,{" "}
                        <span className={styles.emphasis} data-keyword="computer-vision">
                            Computer Vision
                        </span>
                        , and{" "}
                        <span className={styles.emphasis} data-keyword="llm">
                            LLM
                        </span>
                        , I'm constantly looking to{" "}
                        <span className={styles.emphasis} data-keyword="challenge">
                            challenge myself
                        </span>{" "}
                        and{" "}
                        <span className={styles.emphasis} data-keyword="level-up">
                            level up
                        </span>{" "}
                        by building{" "}
                        <span className={styles.emphasis} data-keyword="real-world">
                            real-world solutions
                        </span>{" "}
                        that make an{" "}
                        <span className={styles.emphasis} data-keyword="impact">
                            impact
                        </span>
                        .
                    </p>
                    <div className={styles.cta}>
                        <button className={styles.skillBtn}>MY SKILL 🔥</button>
                        <button className={styles.resumeBtn}>
                            GET RESUME <Download className={styles.icon} />
                        </button>
                    </div>
                </div>

                <div
                    ref={imageRef}
                    className={`${styles.imageContainer} ${imageVisible ? "animate-fadeInRight" : "animate-on-scroll"}`}
                >
                    <CodeEditor />
                </div>
            </div>
        </section>
    )
}

export default Hero