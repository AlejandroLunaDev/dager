'use client';

import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import ButtonAnimate from '../../../../../shared/components/ButtonAnimate/ButtonAnimate';
import styles from './FifthSlide.module.scss';
import { useTranslations } from 'next-intl';

export default function FifthSlide() {
  const t = useTranslations('FifthSlide');
  const [locale, setLocale] = useState(Cookies.get('NEXT_LOCALE') || 'en');

  useEffect(() => {
    const updateLocale = () => {
      const detectedLocale = Cookies.get('NEXT_LOCALE') || 'en';
      setLocale(detectedLocale);
    };

    window.addEventListener('focus', updateLocale);

    return () => {
      window.removeEventListener('focus', updateLocale);
    };
  }, []);

  const cvLink = `${window.location.origin}/files/${locale}-CV.pdf`;

  return (
    <div className={styles.Links}>
      <div className={styles.proyectos}>
        <header>
          <h1>{t('links.projects.title')}</h1>
          <p>{t('links.projects.description')}</p>
        </header>
        <ButtonAnimate
          href="/projects"
          hoverText={t('links.projects.button.hoverText')}
        >
          {t('links.projects.button.text')}
        </ButtonAnimate>
      </div>
      <div className={styles.curriculum}>
        <header>
          <h1>{t('links.cv.title')}</h1>
          <p>{t('links.cv.description')}</p>
        </header>
        <ButtonAnimate
          href={cvLink}
          download
          hoverText={t('links.cv.button.hoverText')}
        >
          {t('links.cv.button.text')}
        </ButtonAnimate>
      </div>
    </div>
  );
}
