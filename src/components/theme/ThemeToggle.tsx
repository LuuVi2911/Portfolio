import { useTheme } from "hooks/useTheme"
import { Moon, Sun } from "lucide-react"
import styles from "components/theme/theme.toggle.module.css"

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme()

    return (
        <button
            className={styles.themeToggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
            {theme === "light" ? <Moon className={styles.icon} /> : <Sun className={styles.icon} />}
        </button>
    )
}

export default ThemeToggle