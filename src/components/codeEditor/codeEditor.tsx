import { useScrollAnimation } from "hooks/useScrollAnimation";
import styles from 'components/codeEditor/codeEditor.module.css'

const CodeEditor = () => {
    const { elementRef, isVisible } = useScrollAnimation({ threshold: 0.3 })
    return (
        <div ref={elementRef} className={`${styles.codeEditor} ${isVisible ? "animate-fadeInScale" : "animate-on-scroll"}`}>
            {/* Gradient border top */}
            <div className={styles.gradientBorder}>
                <div className={styles.gradientLeft}></div>
                <div className={styles.gradientRight}></div>
            </div>

            {/* Window Controls */}
            <div className={styles.windowControls}>
                <div className={styles.controlsContainer}>
                    <span className={`${styles.control} ${styles.close}`}></span>
                    <span className={`${styles.control} ${styles.minimize}`}></span>
                    <span className={`${styles.control} ${styles.maximize}`}></span>
                </div>
            </div>

            {/* Code Content */}
            <div className={styles.codeContent}>
                <code className={styles.codeBlock}>
                    <div className={styles.codeLine}>
                        <span className={styles.keyword}>const</span>
                        <span className={styles.variable}> coder</span>
                        <span className={styles.operator}> = </span>
                        <span className={styles.bracket}>{"{"}</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel1}>name:</span>
                        <span className={styles.quote}>'</span>
                        <span className={styles.string}>Luu Vi</span>
                        <span className={styles.quote}>',</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel1}>skills:</span>
                        <span className={styles.bracket}>['</span>
                        <span className={styles.string}>React</span>
                        <span className={styles.quote}>', '</span>
                        <span className={styles.string}>NextJS</span>
                        <span className={styles.quote}>', '</span>
                        <span className={styles.string}>NodeJS</span>
                        <span className={styles.quote}>', '</span>
                        <span className={styles.string}>NestJS</span>
                        <span className={styles.quote}>', '</span>
                        <span className={styles.string}>PostgreSQL</span>
                        <span className={styles.quote}>', '</span>
                        <span className={styles.string}>MongoDB</span>
                        <span className={styles.quote}>', '</span>
                        <span className={styles.string}>PyTorch</span>
                        <span className={styles.quote}>', '</span>
                        <span className={styles.string}>Docker</span>
                        <span className={styles.bracket}>'],</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel1}>hardWorker:</span>
                        <span className={styles.boolean}> true</span>
                        <span className={styles.punctuation}>,</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel1}>quickLearner:</span>
                        <span className={styles.boolean}> true</span>
                        <span className={styles.punctuation}>,</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel1}>problemSolver:</span>
                        <span className={styles.boolean}> true</span>
                        <span className={styles.punctuation}>,</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel1Function}>hireable:</span>
                        <span className={styles.keyword}> function</span>
                        <span className={styles.bracket}>() {"{"}</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel2}>return</span>
                        <span className={styles.bracket}> (</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel3This}>this.</span>
                        <span className={styles.property}>hardWorker</span>
                        <span className={styles.operator}> &amp;&amp;</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel3This}>this.</span>
                        <span className={styles.property}>problemSolver</span>
                        <span className={styles.operator}> &amp;&amp;</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel3This}>this.</span>
                        <span className={styles.property}>skills.length</span>
                        <span className={styles.operator}> &gt;= </span>
                        <span className={styles.number}>5</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel2}>)</span>
                        <span className={styles.punctuation}>;</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.indentLevel1}>{"}"}</span>
                    </div>

                    <div className={styles.codeLine}>
                        <span className={styles.bracket}>{"}"}</span>
                        <span className={styles.punctuation}>;</span>
                    </div>
                </code>
            </div>
        </div>
    )
}

export default CodeEditor