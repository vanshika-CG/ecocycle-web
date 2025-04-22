import Link from "next/link"
import { Mail, Github, Twitter } from "lucide-react"
import styles from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.about}>
            <h3 className={styles.title}>EcoCycles</h3>
            <p>
              An interactive educational platform dedicated to teaching about the five major biogeochemical cycles that
              sustain life on Earth.
            </p>
          </div>

          <div className={styles.links}>
            <h3 className={styles.title}>Quick Links</h3>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/cycles/water">Water Cycle</Link>
              </li>
              <li>
                <Link href="/cycles/carbon">Carbon Cycle</Link>
              </li>
              <li>
                <Link href="/cycles/nitrogen">Nitrogen Cycle</Link>
              </li>
              <li>
                <Link href="/cycles/phosphorus">Phosphorus Cycle</Link>
              </li>
              <li>
                <Link href="/cycles/oxygen">Oxygen Cycle</Link>
              </li>
              <li>
                <Link href="/glossary">Glossary</Link>
              </li>
            </ul>
          </div>

          <div className={styles.resources}>
            <h3 className={styles.title}>Resources</h3>
            <ul>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms of Use</Link>
              </li>
            </ul>
          </div>

          <div className={styles.social}>
            <h3 className={styles.title}>Connect</h3>
            <div className={styles.socialLinks}>
              <a href="mailto:info@ecocycles.edu" aria-label="Email">
                <Mail size={20} />
              </a>
              <a href="https://github.com/ecocycles" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
              <a href="https://twitter.com/ecocycles" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} EcoCycles. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
