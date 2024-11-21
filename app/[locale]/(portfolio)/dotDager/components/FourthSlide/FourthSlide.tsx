import React from 'react';
import styles from './FourthSlide.module.scss';
import { useTranslations } from 'next-intl';

const FourthSlide = () => {
  const t = useTranslations('FourthSlide');

  return (
    <div className={styles.container}>
      <header>
        <h1>{t('title')}</h1>
      </header>
      <div className={styles.overlay}></div>
      <iframe src="https://tbot.xyz/lumber/" allowFullScreen></iframe>
    </div>
  );
};

export default FourthSlide;
