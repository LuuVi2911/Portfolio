import styles from 'components/footer/footer.module.css'
import { Github, Linkedin } from "lucide-react"
import logo from 'assets/images/sub-logo.png'
const Footer = () => {
    const currentYear = new Date().getFullYear()
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div className={styles.logo}>
                        <img src={logo} alt="Luu Vi" className={styles.logoImage} />
                        <p>Building digital experiences that matter</p>
                    </div>

                    <div className={styles.social}>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github className={styles.icon} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin className={styles.icon} />
                        </a>
                    </div>
                </div>

                <div className={styles.copyright}>
                    <p>&copy; {currentYear} Luu Vi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;