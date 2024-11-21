'use client';
import styles from './NavigationMenu.module.scss';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Turn as Hamburger } from 'hamburger-react';
import { usePathname } from 'next/navigation';
import ContactAction from '../contactAction/contactAction';
import LanguageSwitcher from '@/app/shared/components/LanguageSwitcher/LangaugueSwitcher';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

export default function NavigationMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations('NavbarMenu');

  // Cerrar menú y hacer scroll al inicio al cambiar de ruta
  useEffect(() => {
    setOpen(false); // Esto cierra el menú cuando cambias de página
    window.scrollTo(0, 0); // Esto hace scroll al principio de la página
  }, [pathname]);

  const items: { id: number; name: string; route: string }[] = [
    { id: 1, name: t('links.projects'), route: '/projects' },
    { id: 2, name: t('links.about'), route: '/about' },
    { id: 3, name: t('links.contact'), route: '/contact' },
  ];

  const menuVariants = {
    closed: { opacity: 0, height: 0, transition: { duration: 0.5, staggerChildren: 0.1, staggerDirection: -1, when: 'afterChildren' } },
    open: { opacity: 1, height: 'auto', transition: { duration: 0.5, staggerChildren: 0.1, staggerDirection: 1, when: 'beforeChildren' } }
  };

  const itemVariants = {
    closed: { opacity: 0, y: 20, transition: { duration: 0.3 } },
    open: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const imageVariants = {
    closed: { opacity: 0, x: 50, transition: { duration: 0.5 } },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.5 } }
  };

  return (
    <div className={styles.App}>
      <motion.button
        className={styles.menuButton}
        onClick={() => setOpen(!open)}
        whileTap={{ scale: 0.95 }}
        initial={false}
        key={pathname} // Usamos el pathname como "key" para forzar el renderizado
      >
        <motion.div
          className={styles.menuButtonBackground}
          initial={false}
          animate={open ? { backgroundColor: '#8A2BE2' } : { backgroundColor: 'transparent' }}
          transition={{ duration: 0.5 }}
        />
        <Hamburger size={34} color='#ffff ' />
      </motion.button>
      <AnimatePresence>
        {open && (
          <motion.ul className={styles.menu} variants={menuVariants} initial='closed' animate='open' exit='closed'>
            {items.map((item, index) => (
              <motion.li key={index} variants={itemVariants} className={styles.menuItem}>
                <Link href={item.route} style={{ textDecoration: 'none', color: 'white' }}>
                  {item.name}
                </Link>
              </motion.li>
            ))}

            {/* Footer */}
            <motion.div className={styles.menuLine} initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 0.5 }} />
            <Link href='/' style={{ display: 'flex', justifyContent: 'right', paddingRight: '5px' }}>
              <motion.img src='/image/Logo.png' alt='' style={{ width: 100, height: 100 }} variants={imageVariants} />
            </Link>
            {/* Sección de Conéctate */}
            <ContactAction items={items} />
            {/* Language Switcher */}
            <motion.li className={styles.languageSwitcher} variants={itemVariants}>
              <LanguageSwitcher />
            </motion.li>
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}
