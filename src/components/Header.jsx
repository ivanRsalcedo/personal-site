import { NavLink } from 'react-router';
import { FiHome, FiLinkedin } from 'react-icons/fi';
import { SiCodeberg } from 'react-icons/si';
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main navigation">
        <NavLink to="/" end aria-label="Home">
          <FiHome size={20} aria-hidden="true" />
        </NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/music">Music</NavLink>

        <a
          href="https://codeberg.org/ivansalcedo"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Codeberg (opens in a new tab)"
        >
          <SiCodeberg size={20} aria-hidden="true" />
        </a>
        <a
          href="https://www.linkedin.com/in/ivanrsalcedo/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <FiLinkedin size={20} aria-hidden="true" />
        </a>
      </nav>
    </header>
  );
}
