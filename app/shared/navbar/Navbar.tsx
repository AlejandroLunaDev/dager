
import Logo from './components/logo/Logo';
import NavigationMenu from './components/navigationMenu/NavigationMenu';
import styles from './navbar.module.scss';
export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.navbarContainer}>
      <NavigationMenu />
      </div>
    </nav>
  );
}
