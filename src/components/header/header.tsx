import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import ThemeToggle from 'components/theme/ThemeToggle'
import styles from 'components/header/header.module.css'
import { Menu, X } from "lucide-react"
import logo from 'assets/images/sub-logo.png'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const location = useLocation()
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    const isActive = (path: string) => {
        return location.pathname === path ? styles.active : ""
    }
    const closeMenu = () => {
        setIsMenuOpen(false)
    }
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={logo} alt="Luu Vi" className={styles.logoImage} />
                    </Link>
                </div>

                <div className={styles.mobileMenuToggle}>
                    <button onClick={toggleMenu} aria-label="Toggle menu">
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>

                <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
                    <ul>
                        <li>
                            <Link to="/" className={isActive("/")} onClick={closeMenu}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/about" className={isActive("/about")} onClick={closeMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" className={isActive("/projects")} onClick={closeMenu}>
                                Projects
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className={styles.themeToggleWrapper}>
                    <ThemeToggle />
                </div>
            </div>
        </header>
    )
}
export default Header;