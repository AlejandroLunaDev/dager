'use client'
import { useEffect, useState } from 'react';
import styles from './Logo.module.scss';
import { Link } from '@/i18n/routing';

export default function Logo() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={styles.brand}>
      <Link href='/'>
        <span className={styles.logoContainer}>
          <span className={`${styles.name} ${isScrolled ? styles.scrolled : ''}`}>
            <span className={styles.char}>D</span>
            <span className={styles.char}>o</span>
            <span className={styles.char}>t</span>
            <span className={styles.space}> </span>
            <span className={styles.char}>D</span>
            <span className={styles.char}>a</span>
            <span className={styles.char}>g</span>
            <span className={styles.char}>e</span>
            <span className={styles.char}>r</span>
          </span>
        </span>
      </Link>
    </div>
  );
}
